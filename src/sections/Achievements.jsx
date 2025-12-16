import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const achievements = [
  {
    title: "Published PyPI Package",
    description:
      "Developed and published DataPros, a Python package that automates ML preprocessing and improves model pipelines.",
    color: "from-amber-500 to-emerald-500",
  },
  {
    title: "Top 10 – NASA Space Apps",
    description:
      "Ranked in the Top 10 at the NASA International Space Apps Challenge (Eluru region).",
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "500+ Problems Solved",
    description:
      "Solved 500+ coding problems across GeeksForGeeks and LeetCode, strengthening data structures and algorithms.",
    color: "from-emerald-500 to-teal-400",
  },
];

function Counter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}+</span>;
}

function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200 mb-3">
          Milestones
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Highlights from my journey in software development and problem-solving.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 shadow-xl backdrop-blur-sm"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-4 transform group-hover:scale-105 transition-transform duration-250">
                {achievement.title.includes("500+") && (
                  <svg className="w-9 h-9 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {achievement.title.includes("NASA") && (
                  <svg className="w-9 h-9 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {achievement.title.includes("PyPI") && (
                  <svg className="w-9 h-9 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {achievement.title.includes("500+") ? (
                  <>
                    <Counter end={500} /> Problems Solved
                  </>
                ) : (
                  achievement.title
                )}
              </h3>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </div>

            <div className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-2xl group-hover:opacity-26 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;

