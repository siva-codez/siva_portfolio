import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sivaarumugap@gmail.com",
    href: "mailto:sivaarumugap@gmail.com",
    color: "blue",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Siva Arumuga Perumal S",
    href: "https://www.linkedin.com/in/siva-arumuga-perumal-s-615068265/",
    color: "cyan",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/siva-codez",
    href: "https://github.com/siva-codez",
    color: "purple",
  },
];

const colorMap = {
  blue: { bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.2)", icon: "#3B82F6", iconBg: "rgba(59,130,246,0.1)" },
  cyan: { bg: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.2)", icon: "#06B6D4", iconBg: "rgba(6,182,212,0.1)" },
  purple: { bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.2)", icon: "#8B5CF6", iconBg: "rgba(139,92,246,0.1)" },
};

const initialForm = { name: "", email: "", subject: "", message: "" };
const initialErrors = { name: "", email: "", subject: "", message: "" };

function validateForm(data) {
  const errors = { ...initialErrors };
  let valid = true;

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
    valid = false;
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
    valid = false;
  }
  if (!data.subject.trim() || data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
    valid = false;
  }
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
    valid = false;
  }

  return { errors, valid };
}

function InputField({ label, id, type = "text", value, onChange, error, placeholder, multiline }) {
  const Component = multiline ? "textarea" : "input";
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label} <span className="text-blue-500">*</span>
      </label>
      <Component
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={multiline ? 5 : undefined}
        className={`w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none ${
          multiline ? "min-h-[120px]" : ""
        }`}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: error
            ? "1px solid rgba(239,68,68,0.5)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: error ? "0 0 0 3px rgba(239,68,68,0.08)" : "none",
        }}
        onFocus={(e) => {
          e.target.style.border = error
            ? "1px solid rgba(239,68,68,0.7)"
            : "1px solid rgba(59,130,246,0.5)";
          e.target.style.boxShadow = error
            ? "0 0 0 3px rgba(239,68,68,0.08)"
            : "0 0 0 3px rgba(59,130,246,0.08)";
        }}
        onBlur={(e) => {
          e.target.style.border = error
            ? "1px solid rgba(239,68,68,0.5)"
            : "1px solid rgba(255,255,255,0.08)";
          e.target.style.boxShadow = "none";
        }}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400 flex items-center gap-1"
        >
          <AlertCircle className="w-3 h-3" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors: newErrors, valid } = validateForm(form);
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    // Construct mailto link with form details
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:sivaarumugap@gmail.com?subject=${subject}&body=${body}`;

    await new Promise((resolve) => setTimeout(resolve, 600));

    // Open default mail app prefilled with message
    window.location.href = mailtoUrl;

    setStatus("success");
    setForm(initialForm);

    // Reset status after 5s
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Let's Connect
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Have an idea or opportunity?
            </h2>
            <p className="text-gray-400">
              I'm open to internships, collaborations, AI/ML opportunities,
              freelance projects and innovative technology work.
            </p>
          </motion.div>

          {/* Grid: Form + Info */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Form (3 cols) */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div
                className="card-base p-6 sm:p-8"
                style={{ borderColor: "rgba(59,130,246,0.15)" }}
              >
                <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Your full name"
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="your@email.com"
                    />
                  </div>
                  <InputField
                    label="Subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="What's this about?"
                  />
                  <InputField
                    label="Message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    multiline
                  />

                  {/* Success message */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl text-emerald-300 text-sm"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Message sent! I'll get back to you soon.
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message →
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info (2 cols) */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => {
                const c = colorMap[color];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="card-base p-5 flex items-center gap-4 group hover:shadow-lg transition-shadow"
                    style={{ borderColor: c.border, background: c.bg }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.iconBg, border: `1px solid ${c.border}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: c.icon }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Availability status */}
              <motion.div
                variants={fadeUp}
                className="card-base p-5 mt-2"
                style={{ borderColor: "rgba(16,185,129,0.2)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 p-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400 ">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Currently looking for AI/ML internships, graduate roles, and
                  freelance projects. Response time: within 24 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
