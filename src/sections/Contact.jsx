import { motion } from "framer-motion";

function Contact() {

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
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Have an idea or feature to build?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12"
        >
          Let&apos;s talk.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-2xl flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          href="mailto:likhithaindukuri07@gmail.com"
          className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-600/30"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Email Me
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/likhithaindukuri/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;
