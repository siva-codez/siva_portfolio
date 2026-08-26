import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown, Sparkles, Brain, Code2, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import sivaImage from "../data/siva.jpeg";
import sivaResume from "../assets/siva_resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    {/* Radial fade */}
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 70%)"
    }} />

    {/* Animated orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 70%)" }}
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Floating particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-blue-400/50"
        style={{
          left: `${10 + (i * 8) % 80}%`,
          top: `${20 + (i * 13) % 60}%`,
        }}
        animate={{
          y: [-12, 12, -12],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4 + (i % 3),
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const PhotoVisual = () => {
  const floatingBadges = [
    { label: "AI / ML Engineer", icon: Brain, color: "blue", x: -140, y: -90, delay: 0 },
    { label: "LLMs & RAG", icon: Sparkles, color: "cyan", x: 130, y: -100, delay: 0.5 },
    { label: "Data Analytics", icon: Database, color: "emerald", x: -145, y: 80, delay: 1 },
    { label: "Full-Stack Dev", icon: Code2, color: "purple", x: 135, y: 90, delay: 1.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[380px] lg:min-h-[440px]">
      {/* Glow Aura behind Photo */}
      <div
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full animate-pulse opacity-60 filter blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.2) 50%, transparent 75%)",
        }}
      />

      {/* Orbit Rings */}
      {[240, 310, 380].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-blue-500/15 pointer-events-none hidden sm:block"
          style={{ width: size, height: size }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-blue-400/80 shadow-[0_0_10px_#60A5FA]"
            style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
      ))}

      {/* Photo Frame Container */}
      <motion.div
        className="relative z-10 p-1.5 rounded-3xl bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-purple-500/30 shadow-[0_0_50px_rgba(59,130,246,0.25)] group"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[22px] overflow-hidden bg-[#0D1117] border border-white/10">
          <img
            src={sivaImage}
            alt="Siva Arumuga Perumal S"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient vignette at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent opacity-60" />
        </div>
      </motion.div>

      {/* Floating Labels Around Photo */}
      {/* {floatingBadges.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            className="absolute z-20 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl backdrop-blur-md bg-[#0D1117]/90 border border-white/15 shadow-2xl hover:border-blue-500/40 transition-colors"
            style={{ x: item.x, y: item.y }}
            animate={{ y: [item.y - 6, item.y + 6, item.y - 6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className="p-1 rounded-lg bg-blue-500/15 text-blue-400">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-white tracking-wide">
              {item.label}
            </span>
          </motion.div>
        );
      })} */}
    </div>
  );
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <GridBackground />

      {/* Mobile background photo with dark overlay */}
      <div className="absolute inset-0 lg:hidden pointer-events-none z-0 overflow-hidden">
        <img
          src={sivaImage}
          alt="Siva Arumuga Perumal S"
          className="w-full h-full object-cover object-top opacity-40 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D]/75 via-[#07090D]/90 to-[#07090D]" />
      </div>

      <div className="section-container relative z-10 w-full pt-16 pb-6 sm:pt-24 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AI/ML Engineer  · Data Analyst  · Software Developer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div custom={0.15} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Hi, I'm{" "}
                <span className="gradient-text">Siva Arumuga Perumal S</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              I am a final-year Computer Science and Engineering student passionate
              about Artificial Intelligence, Machine Learning, Data Analytics and
              modern software development. I build intelligent applications,
              data-driven solutions and practical AI products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToWork}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href={sivaResume}
                download="siva_resume.pdf"
                className="btn-secondary backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={0.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Connect</span>
              <div className="w-10 h-px bg-[#1F2937]" />
              {[
                { icon: GithubIcon, href: "https://github.com/siva-codez", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/siva-arumuga-perumal-s-615068265/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sivaarumugap@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-[#1F2937] hover:border-blue-500/40 bg-[#0D1117]/80 hover:bg-blue-500/10 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <PhotoVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

