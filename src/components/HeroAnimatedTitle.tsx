"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

interface HeroAnimatedTitleProps {
  title: string;
  subtitle?: string;
}

const charVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
      delay: i * 0.04,
    },
  }),
};

export default function HeroAnimatedTitle({
  title,
  subtitle,
}: HeroAnimatedTitleProps) {
  const reduced = useReducedMotion();
  const chars = Array.from(title);
  const subtitleDelay = Math.max(0.6, chars.length * 0.04 + 0.45);

  if (reduced) {
    return (
      <>
        <h1 className="font-display italic font-black tracking-tighter-display text-[clamp(2.5rem,11vw,7rem)] lg:text-8xl text-primary text-balance leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-display italic font-medium text-base sm:text-lg md:text-2xl text-secondary max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <motion.h1
        className="font-display italic font-black tracking-tighter-display text-[clamp(2.5rem,11vw,7rem)] lg:text-8xl text-primary text-balance leading-[0.95]"
        initial="hidden"
        animate="show"
        aria-label={title}
      >
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            variants={charVariants}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            aria-hidden="true"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="font-display italic font-medium text-base sm:text-lg md:text-2xl text-secondary max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: subtitleDelay,
            duration: 0.55,
            ease: EASE_OUT_EXPO,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </>
  );
}
