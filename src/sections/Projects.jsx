import { motion } from "framer-motion";

const projects = [
  {
    title: "Wisher",
    problem: "People forget to send wishes on important dates, missing opportunities to connect.",
    solution: "Built an automated wish scheduling platform with time-based delivery logic and secure authentication.",
    outcome: "Automated scheduling eliminates forgetfulness—users set wishes once and they're delivered on time, ensuring no missed connections.",
    tech: ["React", "Node.js", "MongoDB", "Passport.js"],
    github: "https://github.com/likhithaindukuri",
    demo: "https://wisher-omega.vercel.app/",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    title: "Task Genie",
    problem: "Task management tools require structured input, making quick task creation tedious.",
    solution: "Built a GenAI-powered task manager that converts natural language into structured tasks with analytics.",
    outcome: "Natural language input removes the tedious formatting—users type tasks conversationally and AI structures them automatically, making task creation instant.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
    github: "https://github.com/likhithaindukuri",
    demo: "https://task-genie-iota.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "prepXpert",
    problem: "Competitive exam prep lacks structured practice and performance insights.",
    solution: "Built a comprehensive platform with topic-based modules, automated mock tests, and real-time analytics.",
    outcome: "Topic-based modules and automated tests provide structured practice, while real-time analytics give clear performance insights—transforming scattered prep into focused improvement.",
    tech: ["React", "GoLang", "PostgreSQL"],
    github: "https://github.com/likhithaindukuri",
    demo: "https://prep-xpert-three.vercel.app/",
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
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Problem</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Solution</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Outcome</p>
                    <p className="text-emerald-300 text-sm leading-relaxed font-medium">{project.outcome}</p>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((item, techIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-normal text-gray-400/80"
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
