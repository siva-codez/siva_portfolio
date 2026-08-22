import { motion } from "framer-motion";
import { Brain, Database, Bot, Cpu, BarChart2, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "End-to-end machine learning pipelines — from data preprocessing and model training to evaluation and deployment. Specializing in classification, regression, NLP, and computer vision.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Flask"],
    color: "blue",
  },
  {
    icon: BarChart2,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights through exploratory analysis, statistical modeling, and professional visualization that drives real business decisions.",
    technologies: ["Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn"],
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Design intelligent automation workflows using n8n, LLMs, and custom AI agents to eliminate repetitive manual tasks and boost organizational productivity.",
    technologies: ["n8n", "OpenAI API", "Python", "REST APIs", "Webhooks"],
    color: "purple",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Build fast, modern, and responsive full-stack web applications with clean UI/UX, robust backends, and seamless API integrations.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "AI Agent Development",
    description:
      "Design and build autonomous AI agents capable of reasoning, planning, and executing multi-step tasks using the latest LLM frameworks and tool-use architectures.",
    technologies: ["LangChain", "OpenAI", "RAG", "Vector DBs", "Python"],
    color: "orange",
  },
  {
    icon: Database,
    title: "Dashboard & BI Solutions",
    description:
      "Create professional Power BI dashboards and business intelligence solutions that give stakeholders real-time visibility into key metrics and performance indicators.",
    technologies: ["Power BI", "DAX", "SQL", "Excel", "Python"],
    color: "rose",
  },
];

const colorConfig = {
  blue: { bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.2)", icon: "#3B82F6", iconBg: "rgba(59,130,246,0.1)" },
  cyan: { bg: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.2)", icon: "#06B6D4", iconBg: "rgba(6,182,212,0.1)" },
  purple: { bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.2)", icon: "#8B5CF6", iconBg: "rgba(139,92,246,0.1)" },
  emerald: { bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.2)", icon: "#10B981", iconBg: "rgba(16,185,129,0.1)" },
  orange: { bg: "rgba(249,115,22,0.06)", border: "rgba(249,115,22,0.2)", icon: "#F97316", iconBg: "rgba(249,115,22,0.1)" },
  rose: { bg: "rgba(244,63,94,0.06)", border: "rgba(244,63,94,0.2)", icon: "#F43F5E", iconBg: "rgba(244,63,94,0.1)" },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)" }}
      />

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
              What I Offer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Services
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              From AI model development to full-stack applications and business intelligence —
              I deliver end-to-end technical solutions.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              const c = colorConfig[service.color];
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="card-base p-6 flex flex-col gap-4 group hover:shadow-xl transition-shadow"
                  style={{ borderColor: c.border, background: c.bg }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: c.iconBg, border: `1px solid ${c.border}` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: c.icon }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-medium"
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
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
