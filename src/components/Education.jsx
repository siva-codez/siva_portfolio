import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Dr. G.U. Pope College of Engineering",
    location: "Sawyerpuram, Thoothukudi, Tamil Nadu, India",
    duration: "2023 – 2027",
    status: "Final Year",
    highlights: [
      "Specializing in Artificial Intelligence and Machine Learning",
      "Coursework: Data Structures, Machine Learning, DBMS, Computer Networks, OS",
      "Active member of the college tech community and AI/ML club",
      "Building AI-powered projects and contributing to open-source",
    ],
    cgpa: "7.8",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
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
              Academic Background
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Education
            </h2>
          </motion.div>

          {/* Education cards */}
          <div className="max-w-3xl flex flex-col gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-base p-6 sm:p-8 relative overflow-hidden"
                style={{ borderColor: "rgba(59,130,246,0.2)" }}
              >
                {/* Bg accent */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
                  }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                    >
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400 font-semibold">{edu.field}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#34D399",
                    }}
                  >
                    {edu.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center gap-1.5 text-sm text-gray-400">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    {edu.institution}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    {edu.duration}
                  </span>
                </div>

                <div
                  className="h-px w-full mb-6"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                <ul className="flex flex-col gap-2">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
