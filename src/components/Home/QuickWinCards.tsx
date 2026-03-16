import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Cpu, Building2 } from "lucide-react";

const cards = [
  {
    title: "Secure your WiFi in 10 minutes",
    to: "/security/home-basics",
    Icon: Wifi,
  },
  {
    title: "The IoT device you forgot about",
    to: "/security/iot",
    Icon: Cpu,
  },
  {
    title: "Multi-family home = multi-family risk",
    to: "/security/multifamily",
    Icon: Building2,
  },
];

function QuickWinCards() {
  return (
    <section className="py-20 px-4 bg-la-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 pb-4 md:pb-0 snap-x snap-mandatory">
          {cards.map((card) => (
            <motion.div
              key={card.to}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="min-w-[280px] snap-start flex-shrink-0 md:min-w-0"
            >
              <Link
                to={card.to}
                className="block bg-la-gray border border-la-gray hover:border-la-red transition-colors p-6 h-full"
              >
                <card.Icon className="text-la-red mb-4" size={28} />
                <p className="font-body text-la-white text-base leading-relaxed mb-6">
                  {card.title}
                </p>
                <ArrowRight className="text-la-red" size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickWinCards;
