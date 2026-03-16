import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function MissionBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-la-black">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" as const }}
      >
        <div className="w-16 h-[2px] bg-la-red mx-auto mb-10" />
        <p className="font-body text-xl md:text-2xl text-la-muted leading-relaxed">
          They called us average. We made it lethal. No paywalls. No
          certificates. No gatekeeping. Just real knowledge&nbsp;&mdash; shared
          for free&nbsp;&mdash; so the kids nobody bet on can protect themselves,
          their families, and their future.
        </p>
      </motion.div>
    </section>
  );
}

export default MissionBlock;
