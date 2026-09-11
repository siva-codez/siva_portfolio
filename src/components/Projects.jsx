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

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card-base flex flex-col group hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
    >
      {/* Visual area with fixed suitable height */}
      <div
        className="h-56 sm:h-64 w-full relative overflow-hidden flex items-center justify-center bg-[#0B0F17]"
        style={{
          borderBottom: "1px solid #1F2937",
        }}
      >
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle bottom gradient to blend smoothly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        ) : (
          /* Abstract project visualization fallback */
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 100%)",
            }}
          >
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
              <span className="text-3xl">
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
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Category badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((cat) => {
            const c = categoryColors[cat];
            return c ? (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
              >
                {c.label}
              </span>
            ) : null;
          })}
        </div>

        <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-blue-400 text-xs sm:text-sm font-medium mb-3">{project.subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#9CA3AF",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github && project.github !== "[GITHUB URL]" ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center py-2.5 text-xs sm:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </motion.a>
          ) : null}
          {project.demo && project.demo !== "[PROJECT DEMO]" ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center py-2.5 text-xs sm:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          ) : null}
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
          className="mb-14"
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

        {/* Grid: 2 cards per row on desktop (md/lg), 1 on mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
