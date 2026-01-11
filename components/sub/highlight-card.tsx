"use client";

import { motion } from "framer-motion";

interface HighlightCardProps {
  title: string;
  description: string;
  index: number;
}

export const HighlightCard = ({
  title,
  description,
  index,
}: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15 }}
      className="
        flex flex-col justify-start
        w-[260px] h-[200px]
        rounded-xl
        border border-white/10
        bg-[#030014]/80
        backdrop-blur-md
        p-5
        hover:border-purple-500/50
        hover:shadow-[0_0_25px_#7c3aed33]
        transition-all duration-300
      "
    >
      <h3 className="text-lg font-semibold text-purple-400 mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
