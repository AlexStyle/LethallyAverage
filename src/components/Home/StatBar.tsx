import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "0 COST", label: "Always free" },
  { value: "2026 THREATS", label: "Up to date" },
  { value: "REAL SKILLS", label: "Not theory" },
  { value: "NO ADS EVER", label: "No compromise" },
];

function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-la-gray/50 border-y border-la-gray">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            className={`flex flex-col items-center justify-center py-10 px-4 ${
              i < stats.length - 1 ? "border-r border-la-gray" : ""
            } ${i < 2 ? "border-b border-la-gray md:border-b-0" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut" as const,
            }}
          >
            <span className="font-display text-2xl md:text-3xl text-la-white tracking-wide">
              {stat.value}
            </span>
            <span className="font-accent text-xs text-la-muted uppercase tracking-widest mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatBar;
