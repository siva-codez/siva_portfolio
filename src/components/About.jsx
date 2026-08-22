import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Briefcase, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.E. Computer Science & Engineering",
    color: "blue",
  },
  {
    icon: Target,
    label: "Focus",
    value: "AI / ML / Data Science",
    color: "cyan",
  },
  {
    icon: Briefcase,
    label: "Current Goal",
    value: "AI/ML Engineer",
    color: "purple",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thoothukudi, Tamil Nadu, India",
    color: "emerald",
  },
];

const learningItems = [
  "Deep Learning",
  "Generative AI",
  "LLMs",
  "AI Agents",
  "Data Analytics",
  "Cloud & Deployment",
];

const colorMap = {
  blue: {
    bg: "rgba(59, 130, 246, 0.05)",
    border: "rgba(59, 130, 246, 0.2)",
    icon: "#3B82F6",
    label: "#60A5FA",
  },
  cyan: {
    bg: "rgba(6, 182, 212, 0.05)",
    border: "rgba(6, 182, 212, 0.2)",
    icon: "#06B6D4",
    label: "#22D3EE",
  },
  purple: {
    bg: "rgba(139, 92, 246, 0.05)",
    border: "rgba(139, 92, 246, 0.2)",
    icon: "#8B5CF6",
    label: "#A78BFA",
  },
  emerald: {
    bg: "rgba(16, 185, 129, 0.05)",
    border: "rgba(16, 185, 129, 0.2)",
    icon: "#10B981",
    label: "#34D399",
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle bg accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Who I Am
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              About Me
            </h2>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Bio */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate final-year{" "}
                  <span className="text-white font-semibold">
                    Computer Science & Engineering
                  </span>{" "}
                  student with a deep interest in building AI-powered solutions
                  that solve real-world problems.
                </p>
                <p>
                  My journey began with a curiosity for how machines can learn
                  and make decisions. Over time, that curiosity evolved into
                  hands-on experience with{" "}
                  <span className="text-blue-400">machine learning pipelines</span>,
                  data analytics, and full-stack AI application development.
                </p>
                <p>
                  I enjoy working across the entire spectrum — from{" "}
                  <span className="text-cyan-400">data preprocessing and model training</span>{" "}
                  to deploying intelligent applications and building
                  automation workflows that save real time and deliver
                  measurable outcomes.
                </p>
                <p>
                  Currently, I'm focused on exploring the frontier of{" "}
                  <span className="text-white font-medium">
                    Generative AI, LLMs, and AI Agents
                  </span>{" "}
                  — technologies I believe will define the next decade of
                  software.
                </p>
              </div>

              {/* Currently Learning */}
              <div
                className="card-base p-6 mt-2"
                style={{ borderColor: "rgba(59, 130, 246, 0.15)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                    Currently Learning
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 p-4">
                  {learningItems.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md text-sm font-medium text-gray-300"
                      style={{
                        background: "rgba(59, 130, 246, 0.08)",
                        border: "1px solid rgba(59, 130, 246, 0.15)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Info Cards */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {infoCards.map(({ icon: Icon, label, value, color }) => {
                const c = colorMap[color];
                return (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="card-base p-5 flex flex-col gap-3 hover:shadow-lg"
                    style={{
                      background: c.bg,
                      borderColor: c.border,
                      boxShadow: `0 0 0 0 ${c.icon}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${c.bg}`, border: `1px solid ${c.border}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: c.icon }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: c.label }}>
                        {label}
                      </p>
                      <p className="text-sm font-medium text-white">{value}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                className="card-base p-5 sm:col-span-2"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { number: "3+", label: "Projects Built" },
                    { number: "5+", label: "Certifications" },
                    { number: "5+", label: "Internships" },
                  ].map(({ number, label }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <span className="text-2xl font-bold gradient-text">{number}</span>
                      <span className="text-xs text-gray-500 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
