import { motion } from "framer-motion";

const services = [
  {
    title: "Small Tasks & Bug Fixes",
    description:
    "Quick help with React bugs, UI fixes, API integration, or backend issues. Ideal for short-term or first-time collaborations.",
    includes: [
      "Bug fixes & debugging",
      "Small UI fixes & improvements",
      "API integration & fixes",
      "Minor backend issues",
      "Quick performance & code cleanup",
    ],
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "MVP & Prototype Development",
    description: "Go from idea to a working product quickly. I build web apps with React + Node/Spring Boot/Go, handle authentication, create dashboards, and deploy to production.",
    includes: [
      "Web apps (React + Node / Spring Boot / Go)",
      "Authentication & user management",
      "Interactive dashboards",
      "CRUD operations",
      "Production deployment",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Admin panels, analytics dashboards, automation tools, and workflow systems that your team actually wants to use.",
    includes: [
      "Admin panels",
      "Analytics dashboards",
      "Automation tools",
      "Task & workflow systems",
      "Data visualization",
    ],
    color: "from-amber-500 to-emerald-500",
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
        <h2 className="text-5xl font-bold text-white mb-4">Services</h2>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Services;

