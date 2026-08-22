import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "../data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ExperienceCard({ exp, index, isLast }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="w-10 h-10 rounded-xl bg-[#0D1117] border-2 border-blue-500/50 flex items-center justify-center flex-shrink-0 z-10"
        >
          <Briefcase className="w-4 h-4 text-blue-400" />
        </motion.div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: "linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(59,130,246,0.05))",
              minHeight: "40px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
        className="card-base p-6 mb-8 flex-1"
        style={{ borderLeft: "2px solid rgba(59,130,246,0.2)" }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
            <p className="text-blue-400 font-semibold text-sm mt-0.5">{exp.company}</p>
          </div>
          <span
            className="px-2.5 py-1 rounded-md text-xs font-semibold"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#60A5FA",
            }}
          >
            {exp.type}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            {exp.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5" />
            {exp.location}
          </span>
        </div>

        {/* Responsibilities */}
        <ul className="flex flex-col gap-2 mb-5">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
              <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Outcome */}
        {/* {exp.outcome && (
          <div
            className="p-3 rounded-lg text-sm text-emerald-300"
            style={{
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <span className="font-semibold">Outcome: </span>
            {exp.outcome}
          </div>
        )} */}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {exp.technologies.map((tech) => (
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
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Work History
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Experience
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Hands-on internship experience applying AI/ML and data analytics
              to real-world challenges.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
