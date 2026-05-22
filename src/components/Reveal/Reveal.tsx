"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "section";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 80,
  as = "div",
  className,
}: RevealProps) {
  const Comp = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
}
