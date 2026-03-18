"use client";

import { motion } from "framer-motion";

export function Scanline() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 right-0 h-px bg-white/5"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
}
