import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import profileImage from "../assets/Better.jpeg";
import resumePdf from "../assets/Likhitha_Resume.pdf";

const roles = [
  "Full-Stack Developer",
  "React & React Native Engineer",
  "Freelance Developer",
  "Mobile App Developer",
];

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-start justify-center px-6 pt-12 pb-6 overflow-hidden min-h-[80vh]"
    >
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-full border border-white/5 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.01,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-3 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-2"
            >
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-5 py-2.5 text-sm font-bold text-emerald-100 backdrop-blur-sm shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(16, 185, 129, 0.3)" }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                  🚀 Available for Freelance Projects
                </span>
              </motion.p>
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-2 text-xs font-semibold text-blue-200 backdrop-blur-sm"
              >
                Open to Full-Time Opportunities
              </motion.p>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Hi, I&apos;m{" "}
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Likhitha
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold h-12 flex items-center justify-center lg:justify-start"
              >
                <span className="text-gray-400">I&apos;m a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 ml-2 min-w-[300px] text-left">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              I design and ship performant, reliable products across web and mobile, from polished
              user interfaces to well-structured backend APIs. <span className="text-emerald-300 font-semibold">Currently accepting freelance projects</span> and open to full-time opportunities. 
              Focused on building solutions that are scalable, maintainable, and deliver real value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-600/30"
                whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(16, 185, 129, 0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href={resumePdf}
                download="Likhitha_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border-2 border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xs lg:max-w-md flex-shrink-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/35 via-teal-500/30 to-cyan-400/30 rounded-full blur-3xl opacity-40" />
            <div className="relative flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 w-64 rounded-full border border-white/20 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-1.5 shadow-2xl backdrop-blur-md"
              >
                <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                  <img
                    src={profileImage}
                    alt="Likhitha Indukuri"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fallback = e.target.parentElement.querySelector(
                        ".fallback-initials"
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="fallback-initials hidden h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/40 via-teal-500/35 to-cyan-400/35 text-4xl font-bold text-white">
                    LI
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
