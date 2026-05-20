"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

interface HoverZoomProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export default function HoverZoom({
  children,
  scale = 1.06,
  className = "",
}: HoverZoomProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={`overflow-hidden rounded-2xl ${className}`}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <motion.div
        whileHover={{ scale }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
