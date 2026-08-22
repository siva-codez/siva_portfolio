import { motion } from "framer-motion";
import { ExternalLink, Database, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const details = [
  {
    icon: "🌱",
    label: "Problem",
    value:
      "Farmers face low yields due to poor crop selection, lack of data-driven recommendations, and inability to leverage soil + climate data effectively.",
  },
  {
    icon: "🤖",
    label: "AI Approach",
    value:
      "Ensemble ML pipeline combining Random Forest and Gradient Boosting trained on multi-dimensional agricultural features including soil NPK values, pH, rainfall, and temperature.",
  },
  {
    icon: "🧬",
    label: "Model",
    value: "Random Forest + Gradient Boosting Ensemble with 5-fold cross-validation and hyperparameter tuning via Grid Search CV.",
  },
  {
    icon: "📊",
    label: "Dataset",
    value:
      "Agricultural dataset containing soil composition, climate variables, and historical yield data across multiple crop varieties.",
  },
];

const techStack = [
  { label: "Python", color: "blue" },
  { label: "Scikit-learn", color: "orange" },
  { label: "Pandas", color: "cyan" },
  { label: "NumPy", color: "blue" },
  { label: "Flask", color: "gray" },
  { label: "React", color: "cyan" },
  { label: "Matplotlib", color: "orange" },
];

const colorMap = {
  blue: { bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)", text: "#93C5FD" },
  cyan: { bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.25)", text: "#67E8F9" },
  orange: { bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.25)", text: "#FCA06E" },
  gray: { bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.2)", text: "#9CA3AF" },
  purple: { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.25)", text: "#C4B5FD" },
};

const MLVisualization = () => (
  <div className="relative w-full h-full flex items-center justify-center min-h-64">
    {/* Background grid */}
    <div
      className="absolute inset-0 rounded-xl opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    {/* Nodes and connections */}
    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
      {/* Input layer connections */}
      {[60, 100, 140, 180].map((y, i) => (
        <motion.line
          key={`l1-${i}`}
          x1="20%" y1={`${y}px`} x2="45%" y2="120px"
          stroke="#3B82F6" strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {/* Output connections */}
      {[80, 120, 160].map((y, i) => (
        <motion.line
          key={`l2-${i}`}
          x1="55%" y1="120px" x2="80%" y2={`${y}px`}
          stroke="#06B6D4" strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 + i * 0.25 }}
        />
      ))}
    </svg>

    {/* Input nodes */}
    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-3">
      {["Soil NPK", "pH", "Rainfall", "Temp"].map((label, i) => (
        <motion.div
          key={label}
          className="flex items-center gap-2"
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
            <Database className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <span className="text-xs text-blue-300 font-mono hidden sm:block">{label}</span>
        </motion.div>
      ))}
    </div>

    {/* Model node */}
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#07090D] border-2 border-blue-500/50 flex flex-col items-center justify-center shadow-2xl z-10"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Cpu className="w-6 h-6 text-blue-400 mb-1" />
      <span className="text-xs text-gray-400 font-mono text-center leading-tight">ML<br/>Model</span>
    </motion.div>

    {/* Output nodes */}
    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-3">
      {["Rice", "Wheat", "Maize"].map((label, i) => (
        <motion.div
          key={label}
          className="flex items-center gap-2"
          animate={{ x: [2, -2, 2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        >
          <span className="text-xs text-cyan-300 font-mono hidden sm:block">{label}</span>
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function FeaturedAI() {
  return (
    <section id="featured-ai" className="section-padding relative">
      {/* Bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Featured Project
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Building with AI
          </h2>
          <p className="text-gray-400">
            A deep-dive into OptiCrop — an AI-powered agricultural optimization engine
            that helps farmers make smarter, data-driven crop decisions.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-base overflow-hidden"
          style={{ borderColor: "rgba(59,130,246,0.2)" }}
        >
          {/* Top: Visual */}
          <div
            className="relative h-64 sm:h-80 flex items-center justify-center px-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(6,182,212,0.04) 100%)",
              borderBottom: "1px solid rgba(59,130,246,0.15)",
            }}
          >
            {/* Title overlay */}
            <div className="absolute top-6 left-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#60A5FA",
                }}
              >
                🏆 Featured AI Project
              </span>
            </div>
            <MLVisualization />
          </div>

          {/* Bottom: Details */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                OptiCrop
              </h3>
              <p className="text-blue-400 font-medium mt-1">
                Smart Agricultural Production Optimization Engine
              </p>
            </div>

            {/* Detail grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{d.icon}</span>
                    <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                      {d.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.value}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl mb-8"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-emerald-400">Result: </span>
                <span className="text-sm text-gray-300">
                  Achieved 91% recommendation accuracy on test dataset with 5-fold
                  cross-validation. Reduced misclassification by optimizing the ensemble
                  weighting strategy.
                </span>
              </div>
            </div>

            {/* Tech + Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => {
                  const c = colorMap[tech.color];
                  return (
                    <span
                      key={tech.label}
                      className="px-3 py-1 rounded-md text-xs font-medium"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                    >
                      {tech.label}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="[GITHUB URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href="[PROJECT DEMO]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
