import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Better Software",
    duration: "Sep 2025 – Nov 2025",
    location: "Andhra Pradesh, India · Remote",
    points: [
      "Developed and maintained mobile application screens using React Native and TypeScript, ensuring pixel-perfect UI.",
      "Debugged UI and functional issues, tested features across devices, and optimized components for performance and maintainability.",
      "Integrated backend APIs, handled request/response flows, and implemented reusable components to improve code consistency.",
      "Collaborated with designers, backend developers, and team leads to deliver features within given timelines.",
    ],
    tech: ["React Native", "TypeScript", "API Integration", "Debugging", "Agile workflows"],
    gradient: "from-emerald-500 to-teal-400",
  },
];

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="experience"
      className="relative border-t border-white/5 px-6 py-24 bg-gradient-to-b from-transparent via-slate-900/60 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3">
          Career Journey
        </p>
        <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building impactful products across mobile and full-stack development. Fresh graduate with hands-on experience in modern web technologies.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-6xl">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-400 opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                <motion.div
                  className="absolute left-6 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-lg shadow-emerald-500/40"
                  whileHover={{ scale: 1.12 }}
                />

                <motion.div
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="text-sm font-semibold uppercase tracking-wide text-blue-200 mb-2"
                        >
                          {exp.duration}
                        </motion.p>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-300">{exp.company}</p>
                        <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedIndex === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        {exp.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: expandedIndex === index ? 1 : 0, x: expandedIndex === index ? 0 : -10 }}
                            transition={{ delay: pointIndex * 0.1 }}
                            className="flex gap-3 text-gray-200"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm border border-white/5"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
