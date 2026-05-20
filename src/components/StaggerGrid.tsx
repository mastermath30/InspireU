"use client";

import { Children, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  margin?: string;
}

export default function StaggerGrid({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0.05,
  margin = "-60px",
}: StaggerGridProps) {
  const reduced = useReducedMotion();
  const arr = Children.toArray(children);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: margin as `${number}px` }}
    >
      {arr.map((child, i) => (
        <motion.div key={i} variants={fadeUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
