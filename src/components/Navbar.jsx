import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import resumePdf from "../assets/Likhitha_Resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Likhitha
          </motion.a>

          <div className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
            {[
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projects" },
              { href: "#why-hire-me", label: "Why Work With Me" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative hover:text-white transition-colors group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href={resumePdf}
              download="Likhitha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-gray-200 hover:border-white/40 hover:text-white transition md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s talk
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </nav>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {[
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projects" },
              { href: "#why-hire-me", label: "Why Work With Me" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumePdf}
              download="Likhitha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </motion.header>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

export default Navbar;
  