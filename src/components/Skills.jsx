import { motion } from "framer-motion";
import { Brain, BarChart2, Code2, Zap, Wrench, User } from "lucide-react";
import { skillCategories } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconMap = { Brain, BarChart2, Code2, Zap, Wrench, User };

const colorConfig = {
  blue: {
    badge: { background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#93C5FD" },
    header: "#3B82F6",
    headerBg: "rgba(59,130,246,0.1)",
    headerBorder: "rgba(59,130,246,0.2)",
  },
  cyan: {
    badge: { background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.2)", color: "#67E8F9" },
    header: "#06B6D4",
    headerBg: "rgba(6,182,212,0.1)",
    headerBorder: "rgba(6,182,212,0.2)",
  },
  purple: {
    badge: { background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.2)", color: "#C4B5FD" },
    header: "#8B5CF6",
    headerBg: "rgba(139,92,246,0.1)",
    headerBorder: "rgba(139,92,246,0.2)",
  },
  emerald: {
    badge: { background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)", color: "#6EE7B7" },
    header: "#10B981",
    headerBg: "rgba(16,185,129,0.1)",
    headerBorder: "rgba(16,185,129,0.2)",
  },
  orange: {
    badge: { background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)", color: "#FCA06E" },
    header: "#F97316",
    headerBg: "rgba(249,115,22,0.1)",
    headerBorder: "rgba(249,115,22,0.2)",
  },
};

function SkillCard({ category, index }) {
  const Icon = iconMap[category.icon] || Code2;
  const config = colorConfig[category.color] || colorConfig.purple;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card-base p-6 hover:shadow-xl transition-shadow"
      style={{ borderColor: config.headerBorder }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: config.headerBg, border: `1px solid ${config.headerBorder}` }}
        >
          <Icon className="w-5 h-5" style={{ color: config.header }} />
        </div>
        <h3 className="text-base font-semibold text-white">{category.title}</h3>
      </div>

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="skill-badge"
            style={config.badge}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Technical Arsenal
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              A comprehensive toolkit spanning AI/ML research, data engineering,
              full-stack development, and intelligent automation.
            </p>
          </motion.div>

          {/* Skill Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, i) => (
              <SkillCard key={category.id} category={category} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
