import { motion } from "framer-motion";

const techStack = {
  Frontend: ["React", "React Native", "HTML", "CSS", "Tailwind"],
  Backend: ["Node.js", "Express", "Spring Boot", "Go"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Other: ["REST APIs", "JWT Authentication", "Git", "Postman"],
};

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative px-6 py-16 border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                {category}
              </h3>
              <p className="text-gray-300 text-sm">
                {items.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;

