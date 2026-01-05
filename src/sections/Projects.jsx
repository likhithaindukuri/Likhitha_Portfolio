import { motion } from "framer-motion";

const projects = [
  {
    title: "Wisher",
    role: "Full Stack development, Backend Logic, Authentication",
    problem:
      "People forget to send wishes on important dates, missing opportunities to connect.",
    solution:
      "Built an automated wish scheduling platform with time-based delivery logic and secure authentication.",
    outcome:
      "Automated scheduling eliminates forgetfulness—users set wishes once and they're delivered on time, ensuring no missed connections.",
    tech: ["React", "Node.js", "MongoDB", "Passport.js"],
    github: "https://github.com/likhithaindukuri",
    demo: "https://wisher-omega.vercel.app/",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    title: "Task Genie",
    role: "FULL-stack development, Gen-AI development, Backend Logic, Authentication",
    problem:
      "Task management tools require structured input, making quick task creation tedious.",
    solution:
      "Built a GenAI-powered task manager that converts natural language into structured tasks with analytics.",
    outcome:
      "Natural language input removes the tedious formatting—users type tasks conversationally and AI structures them automatically, making task creation instant.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
    github: "https://github.com/likhithaindukuri",
    demo: "https://task-genie-iota.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "prepXpert",
    role: "Full Stack development, Backend Logic, Authentication, GoLang Development",
    problem:
      "Competitive exam prep lacks structured practice and performance insights.",
    solution:
      "Built a comprehensive platform with topic-based modules, automated mock tests, and real-time analytics.",
    outcome:
      "Topic-based modules and automated tests provide structured practice, while real-time analytics give clear performance insights—transforming scattered prep into focused improvement.",
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
          className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-200"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-5xl font-bold text-white"
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 blur-md transition duration-500 group-hover:opacity-30" />

            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <h3 className="mb-4 text-2xl font-bold text-white transition-all group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                  {project.title}
                </h3>

                <div className="mb-6 flex-grow space-y-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Outcome
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-emerald-300">
                      {project.outcome}
                    </p>
                  </div>

                  {/* 🔹 Role added here */}
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Role
                    </p>
                    <p className="text-sm text-gray-300">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((item, techIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-gray-400/80"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group/link flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
                  >
                    GitHub
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group/link flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Live Demo
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </motion.a>
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
