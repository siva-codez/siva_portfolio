import { motion } from "framer-motion";
import { Mail, Zap, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/siva-codez", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/siva-arumuga-perumal-s-615068265/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sivaarumugap@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Subtle top line glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)",
        }}
      />

      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">SIVA S</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Building intelligent solutions with AI, data and software engineering.
              Open to opportunities and collaborations.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg border flex items-center justify-center text-gray-500 hover:text-blue-400 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sivaarumugap@gmail.com"
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                sivaarumugap@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/siva-arumuga-perumal-s-615068265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/siva-codez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Siva Arumuga Perumal S. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
