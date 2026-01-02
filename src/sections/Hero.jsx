import { motion } from "framer-motion";

import profileImage from "../assets/Better.jpeg";

const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Hero() {

  return (
    <section
      id="hero"
      className="relative flex items-start justify-center px-6 pt-6 pb-6 overflow-hidden min-h-[80vh]"
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              I help early-stage startups build MVPs, internal tools, and web applications — fast and reliably.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-8"
            >
              Full-stack developer with real-world product experience using React, React Native, Node, and Spring Boot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-600/30"
                whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(16, 185, 129, 0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xs lg:max-w-lg flex-shrink-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/35 via-teal-500/30 to-cyan-400/30 rounded-full blur-3xl opacity-40" />
            <div className="relative flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-72 w-72 rounded-full border border-white/20 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-1.5 shadow-2xl backdrop-blur-md"
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
