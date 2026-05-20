"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, useReducedMotion } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  margin?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "ul" | "li";
}

export default function Reveal({
  children,
  variants = fadeUp,
  className,
  margin = "-80px",
  delay,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;
  const transition = delay !== undefined ? { delay } : undefined;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: margin as `${number}px` }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
