"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

type Variant = "white" | "gold" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
}

interface ButtonProps extends BaseProps {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

type CTAButtonProps = LinkProps | ButtonProps;

const variantClass: Record<Variant, string> = {
  white:
    "bg-white text-gold hover:bg-gold hover:text-base shadow-[0_8px_30px_rgba(201,169,97,0.18)]",
  gold:
    "bg-gold text-base hover:bg-gold-bright",
  ghost:
    "bg-transparent text-primary border border-gold-subtle hover:border-gold hover:text-gold",
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 font-display text-sm font-bold uppercase tracking-[0.16em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-base";

export default function CTAButton(props: CTAButtonProps) {
  const reduced = useReducedMotion();
  const { variant = "white", children, className = "" } = props;
  const classes = `${baseClass} ${variantClass[variant]} ${className}`;

  const motionProps = reduced
    ? {}
    : {
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.96 },
        transition: { duration: 0.18, ease: EASE_OUT_EXPO },
      };

  if ("href" in props && props.href) {
    return (
      <motion.span
        className="inline-flex"
        {...motionProps}
        style={{ willChange: "transform" }}
      >
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      {...motionProps}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.button>
  );
}
