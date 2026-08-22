import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects, filterOptions } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categoryColors = {
  "ai-ml": { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", text: "#93C5FD", label: "AI/ML" },
  "data-analytics": { bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.2)", text: "#67E8F9", label: "Data" },
  web: { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", text: "#C4B5FD", label: "Web" },
  automation: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", text: "#6EE7B7", label: "Auto" },
};

function ProjectCard({ project, featured }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`card-base flex flex-col group hover:shadow-2xl transition-shadow duration-300 ${
        featured ? "lg:col-span-2" : ""
      }`}
      style={{
        borderColor: featured ? "rgba(59,130,246,0.2)" : undefined,
        boxShadow: featured ? "0 0 30px rgba(59,130,246,0.05)" : undefined,
      }}
    >
      {/* Visual area */}
      <div
        className="h-44 rounded-t-xl flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 100%)",
          borderBottom: "1px solid #1F2937",
        }}
      >
        {/* Abstract project visualization */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Center icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-2xl bg-[#0D1117] border border-blue-500/30 flex items-center justify-center shadow-xl z-10"
          >
            <span className="text-2xl">
              {project.category.includes("ai-ml")
                ? "🤖"
                : project.category.includes("data-analytics")
                ? "📊"
                : project.category.includes("automation")
                ? "⚡"
                : "🌐"}
            </span>
          </motion.div>
        </div>

        {/* Featured badge */}
        {featured && (
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold"
            style={{
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60A5FA",
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((cat) => {
            const c = categoryColors[cat];
            return c ? (
              <span
                key={cat}
                className="px-2 py-0.5 rounded text-xs font-semibold"
                style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
              >
                {c.label}
              </span>
            ) : null;
          })}
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-blue-400 text-xs font-medium mb-3">{project.subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#6B7280",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 justify-center py-2 text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center py-2 text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A selection of real-world AI/ML, data analytics, and software projects
            demonstrating end-to-end problem solving.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterOptions.map((opt) => (
            <motion.button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background:
                  activeFilter === opt.id
                    ? "rgba(59,130,246,0.15)"
                    : "rgba(255,255,255,0.03)",
                border:
                  activeFilter === opt.id
                    ? "1px solid rgba(59,130,246,0.4)"
                    : "1px solid #1F2937",
                color: activeFilter === opt.id ? "#60A5FA" : "#9CA3AF",
              }}
            >
              {opt.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured && activeFilter === "all"}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
