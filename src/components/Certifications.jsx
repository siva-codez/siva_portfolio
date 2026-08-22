import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "../data/certifications";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const orgColors = [
  { bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.2)", icon: "#3B82F6" },
  { bg: "rgba(234,179,8,0.06)", border: "rgba(234,179,8,0.2)", icon: "#EAB308" },
  { bg: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.2)", icon: "#06B6D4" },
  { bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.2)", icon: "#8B5CF6" },
  { bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.2)", icon: "#10B981" },
  { bg: "rgba(249,115,22,0.06)", border: "rgba(249,115,22,0.2)", icon: "#F97316" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Certifications
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Industry-recognized certifications validating expertise in AI, ML,
              data science, and software development.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => {
              const c = orgColors[index % orgColors.length];
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="card-base p-6 flex flex-col gap-4 group hover:shadow-xl transition-shadow"
                  style={{ borderColor: c.border }}
                >
                  {/* Icon + Org */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <Award className="w-5 h-5" style={{ color: c.icon }} />
                    </div>
                    <span
                      className="flex items-center gap-1 text-xs font-medium"
                      style={{ color: c.icon }}
                    >
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500">{cert.organization}</p>
                    {cert.credentialId !== "[CREDENTIAL ID]" && (
                      <p className="text-xs text-gray-600 mt-1 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: c.bg,
                          border: `1px solid ${c.border}`,
                          color: c.icon,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary w-full justify-center py-2 text-xs mt-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
