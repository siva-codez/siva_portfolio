import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    const el = id === "home" ? null : document.getElementById(id);

    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#07090D]/90 backdrop-blur-xl border-b border-[#1F2937]/80 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Siva
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={`nav-link px-4 py-2 rounded-lg hover:bg-white/5 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-white bg-white/5"
                    : ""
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary text-sm py-2 px-5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#1F2937]"
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.replace("#", "")
                        ? "text-white bg-blue-600/10 border border-blue-600/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="btn-primary mt-2 justify-center text-sm py-3"
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
