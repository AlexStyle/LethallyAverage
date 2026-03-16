import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const slideLeft = {
  hidden: { x: -120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const slideRight = {
  hidden: { x: 120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-la-black overflow-hidden">
      <motion.div
        className="flex flex-col items-center text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="font-display text-7xl sm:text-8xl md:text-9xl text-la-white leading-none tracking-tight"
          variants={slideLeft}
        >
          LETHALLY
        </motion.h1>

        <motion.h1
          className="font-display text-7xl sm:text-8xl md:text-9xl text-la-red leading-none tracking-tight"
          variants={slideRight}
        >
          AVERAGE.
        </motion.h1>

        <motion.p
          className="font-body text-la-muted text-xl mt-6"
          variants={fadeIn}
        >
          The knowledge they buried.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          variants={fadeIn}
        >
          <Link
            to="/security/home-basics"
            className="inline-flex items-center justify-center px-8 py-3 bg-la-red text-la-white font-body text-sm uppercase tracking-widest hover:brightness-110 transition-all"
          >
            START HERE &rarr;
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-3 border border-la-white/30 text-la-white font-body text-sm uppercase tracking-widest hover:border-la-red hover:text-la-red transition-all"
          >
            WHY THIS EXISTS
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
