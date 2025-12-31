import { motion } from "framer-motion";

const skills = {
  Frontend: ["React.js", "React Native", "HTML", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "GoLang", "REST APIs", "JWT Authentication"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Languages: ["C++", "Java", "JavaScript", "Python", "TypeScript"],
  "Version Control": ["Git", "GitHub", "VS Code", "Postman"],
  Others: ["Problem Solving", "Data Structures & Algorithms", "API Integration", "Debugging"],
};

const skillDescriptions = {
  Frontend: "Building modern, responsive interfaces with a strong focus on UX and performance.",
  Backend: "Designing reliable APIs and services with clean architecture and robust security.",
  Databases: "Modeling and querying data efficiently across SQL and NoSQL systems.",
  Languages: "Writing clean, maintainable code across multiple programming paradigms.",
  "Version Control": "Using version control systems and development tools for efficient collaboration.",
  Others: "Essential skills for problem-solving, algorithm design, and efficient debugging.",
};

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3">
          Technical Expertise
        </p>
        <h2 className="text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-left backdrop-blur-sm"
            >
              <div className="mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                  {category}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {skillDescriptions[category] ?? "Core technologies I use day-to-day."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-xs font-medium text-gray-200 hover:border-emerald-400/60 hover:text-emerald-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
