import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom React applications with modern UI/UX, responsive design, and optimal performance.",
    features: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "TypeScript"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native with native performance.",
    features: ["React Native", "JavaScript", "TypeScript", "API Integration", "Debugging"],
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development from frontend to backend with database integration.",
    features: [
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
    color: "from-amber-500 to-emerald-500",
  },
  {
    title: "API Integration & Debugging",
    description: "Seamless backend integration, API optimization, and comprehensive debugging.",
    features: [
      "REST APIs",
      "API Integration",
      "Postman",
      "Problem Solving",
      "Debugging",
    ],
    color: "from-slate-500 to-slate-700",
  },
];

function Services() {
  return (
    <section id="services" className="relative px-6 py-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3">
          What I Offer
        </p>
        <h2 className="text-5xl font-bold text-white mb-4">Services</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional development services for startups, businesses, and individuals. Let&apos;s bring your ideas to life.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -2, scale: 1.005 }}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-40 blur-md transition duration-500`} />
            
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-4">
                  {service.title === "Web Development" && (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {service.title === "Mobile App Development" && (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.title === "Full-Stack Solutions" && (
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  )}
                  {service.title === "API Integration & Debugging" && (
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-xs font-medium text-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mx-auto mt-12 max-w-4xl text-center"
      >
        <motion.a
          href="#contact"
            className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-600/30"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Discuss Your Project
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Services;

