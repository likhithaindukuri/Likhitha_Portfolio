import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:likhithaindukuri07@gmail.com",
    color: "from-emerald-500 to-teal-400",
    label: "likhithaindukuri07@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/likhithaindukuri/",
    color: "from-sky-500 to-indigo-500",
    label: "linkedin.com/in/likhithaindukuri",
  },
  {
    name: "GitHub",
    href: "https://github.com/likhithaindukuri",
    color: "from-slate-600 to-slate-800",
    label: "github.com/likhithaindukuri",
  },
];

function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 px-6 py-24 bg-gradient-to-b from-transparent via-slate-950/80 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3"
        >
          Let&apos;s Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Open to full-time opportunities, freelance projects, and collaborations. Whether you need
          a web app, mobile solution, or full-stack development, let&apos;s discuss how I can help
          bring your vision to life. You can typically expect a reply within 24 hours.
        </motion.p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-40 blur-md transition duration-500`}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-600/40"
                >
                  {link.name === "Email" && (
                    <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {link.name === "LinkedIn" && (
                    <svg className="w-6 h-6 text-sky-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.781 20.452H3.891V9h2.89v11.452z" />
                    </svg>
                  )}
                  {link.name === "GitHub" && (
                    <svg className="w-6 h-6 text-slate-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-400 break-all">
                  {link.label}
                </p>
                <motion.div
                  className="mt-4 text-emerald-300 font-semibold text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                >
                  Connect →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Or send me a direct message</p>
          <motion.a
            href="mailto:likhithaindukuri07@gmail.com"
            className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-600/30"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
