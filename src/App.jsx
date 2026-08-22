import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FeaturedAI from "./components/FeaturedAI";
import Certifications from "./components/Certifications";
import Achievement from "./components/Achievement";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
          style={{
            background: "#2563EB",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Section wrapper with fade-in animation
function Section({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Divider between sections
function Divider() {
  return (
    <div
      className="section-container"
      style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}
    >
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07090D" }}>
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <Section><About /></Section>
        <Divider />
        <Section><Skills /></Section>
        <Divider />
        <Section><Experience /></Section>
        <Divider />
        <Section><Projects /></Section>
        <Divider />
        <Section><FeaturedAI /></Section>
        <Divider />
        <Section><Certifications /></Section>
        <Divider />
        <Section><Achievement /></Section>
        <Divider />
        <Section><Services /></Section>
        <Divider />
        <Section><Education /></Section>
        <Divider />
        <Section><Contact /></Section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
