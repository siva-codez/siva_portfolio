import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { achievements } from "../data/achievements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categoryColors = {
  Hackathon: { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", text: "#93C5FD", iconColor: "#3B82F6" },
  Competition: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", text: "#6EE7B7", iconColor: "#10B981" },
};

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images, isHovered]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/20 to-transparent opacity-85 z-10 pointer-events-none" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-sm z-20 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-sm z-20 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "bg-blue-400 w-3.5" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Achievement() {
  return (
    <section id="achievements" className="section-padding relative">
      {/* Background Accent Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,130,246,0.03) 0%, transparent 80%)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Recognitions & Milestones
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Achievements
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Competitive success, hackathons, and certifications showcasing high performance,
              problem-solving capability, and technical excellence.
            </p>
          </motion.div>

          {/* Grid of achievement cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((ach) => {
              const c = categoryColors[ach.category] || {
                bg: "rgba(255,255,255,0.05)",
                border: "rgba(255,255,255,0.1)",
                text: "#D1D5DB",
                iconColor: "#9CA3AF",
              };

              return (
                <motion.div
                  key={ach.id}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="card-base flex flex-col group overflow-hidden hover:shadow-2xl transition-all duration-300"
                  style={{
                    borderColor: "rgba(59,130,246,0.15)",
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Hero image card area (Carousel) */}
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full border-b border-white/5 bg-[#0D1117]">
                    <ImageCarousel images={ach.images} title={ach.title} />

                    {/* Float tags */}
                    <div className="absolute top-4 left-4 flex gap-2 z-25 pointer-events-none">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md"
                        style={{
                          background: c.bg,
                          border: `1px solid ${c.border}`,
                          color: c.text,
                        }}
                      >
                        <Trophy className="w-3.5 h-3.5" style={{ color: c.iconColor }} />
                        {ach.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-25 pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#07090D]/80 border border-white/10 text-gray-400 backdrop-blur-sm flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {ach.date}
                      </span>
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                        {ach.title}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm mt-1 mb-4">
                        {ach.subtitle}
                      </p>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {ach.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                          Key Highlights
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {ach.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metadata Table / Key-Values */}
                    <div>
                      <div className="h-px w-full bg-white/5 my-4" />
                      <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                        Event Details
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.03]">
                        {Object.entries(ach.details).map(([key, val]) => (
                          <div key={key} className="flex flex-col gap-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                              {key}
                            </span>
                            <span className="text-gray-300 text-xs font-medium leading-snug">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

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
