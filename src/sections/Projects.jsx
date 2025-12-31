import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Genie",
    description:
      "GenAI-powered task manager that converts natural language into structured tasks, with analytics and CRUD workflows.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
    link: "https://github.com/likhithaindukuri",
    github: "https://github.com/likhithaindukuri",
    demo: "https://task-genie-iota.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Wisher",
    description:
      "Automated wish scheduling platform with secure auth and responsive UI for desktop screens.",
    tech: ["React", "Node.js", "MongoDB", "Passport.js"],
    link: "https://github.com/likhithaindukuri",
    github: "https://github.com/likhithaindukuri",
    demo: "https://wisher-app.vercel.app/",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    title: "prepXpert",
    description:
      "Comprehensive preparation platform for competitive exams with practice tests, analytics, and personalized study plans.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/likhithaindukuri",
    github: "https://github.com/likhithaindukuri",
    demo: "https://prepxpert.vercel.app/",
    gradient: "from-amber-500 to-emerald-500",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Real-world applications showcasing full-stack development, AI integration, and modern web technologies.
        </motion.p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -2, scale: 1.005 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-md transition duration-500 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
            
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-900/80 border border-slate-600/40">
                    {project.title === "Task Genie" && (
                      <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    )}
                    {project.title === "Wisher" && (
                      <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                    {project.title === "prepXpert" && (
                      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item, techIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm border border-white/5"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
                    whileHover={{ x: 4 }}
                  >
                    <span>GitHub</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </motion.a>
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                      whileHover={{ x: 4 }}
                    >
                      <span>Live Demo</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
