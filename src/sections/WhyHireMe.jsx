import { motion } from "framer-motion";

const highlights = [
  {
    title: "Full-Stack Expertise",
    description: "Proficient in both frontend and backend development, delivering end-to-end solutions from UI design to database architecture.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Following best practices, design patterns, and writing code that's easy to read, test, and scale for long-term success.",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Timely Delivery",
    description: "Committed to meeting deadlines while maintaining high quality standards. Clear communication throughout the project lifecycle.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Problem Solving",
    description: "Strong background in Data Structures & Algorithms with 500+ solved problems. Quick to identify and solve complex technical challenges.",
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Modern Tech Stack",
    description: "Up-to-date with latest technologies: React, React Native, Node.js, Spring Boot, and cloud-ready solutions for scalable applications.",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Client-Focused",
    description: "Understanding your business needs and translating them into technical solutions. Available for freelance projects and ready to collaborate.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-teal-500",
  },
];

function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
      className="relative border-t border-white/5 px-6 py-24 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3">
          Why Choose Me
        </p>
        <h2 className="text-5xl font-bold text-white mb-4">Why Hire Me</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Bringing technical expertise, reliability, and a commitment to excellence to every project. Here's what sets me apart.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-30 blur-md transition duration-500`} />
              
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mx-auto mt-12 max-w-4xl text-center"
      >
        <motion.a
          href="#contact"
          className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-600/30"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Work Together
        </motion.a>
      </motion.div>
    </section>
  );
}

export default WhyHireMe;

