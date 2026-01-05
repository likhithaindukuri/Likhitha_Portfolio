import { motion } from "framer-motion";

const highlights = [
  {
    title: "Beginner Friendly",
    description: "Beginner-friendly collaboration — happy to start small and grow step by step.",
  },
  {
    title: "Startup-focused mindset",
    description: "I understand the urgency and constraints of early-stage startups. I prioritize speed without sacrificing quality.",
  },
  {
    title: "Fast communication",
    description: "Quick responses, clear updates, and no surprises. You'll always know where things stand.",
  },
  {
    title: "Clean, maintainable code",
    description: "Code that your team can actually work with later. No shortcuts that create technical debt.",
  },
  {
    title: "Ownership mindset",
    description: "I take responsibility for features from development to deployment, not just writing code.",
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
        <h2 className="text-5xl font-bold text-white mb-8">Why work with me?</h2>
      </motion.div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400 mt-2" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;

