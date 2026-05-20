"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

interface PersonCardProps {
  name?: string;
  role: string;
  school?: string;
  imageLabel?: string;
  image?: string;
  imagePosition?: string;
}

const cardVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.02 },
};

const borderVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 0.55 },
};

const imageScaleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
};

export default function PersonCard({
  name,
  role,
  school,
  imageLabel,
  image,
  imagePosition,
}: PersonCardProps) {
  const reduced = useReducedMotion();
  const label = imageLabel ?? (name ? `Photo: ${name}` : `Photo: ${role}`);

  const Wrapper = reduced ? "article" : motion.article;
  const wrapperProps = reduced
    ? {}
    : {
        initial: "rest" as const,
        animate: "rest" as const,
        whileHover: "hover" as const,
        variants: cardVariants,
        transition: { duration: 0.25, ease: EASE_OUT_EXPO },
        style: { willChange: "transform" as const },
      };

  return (
    <Wrapper
      className="group relative flex flex-col gap-4 cursor-default"
      {...wrapperProps}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {image ? (
          <div className="relative aspect-square w-full overflow-hidden bg-elevated border border-gold-subtle rounded-2xl">
            {reduced ? (
              <Image
                src={image}
                alt={name ?? role}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: imagePosition ?? "center" }}
              />
            ) : (
              <motion.div
                className="absolute inset-0"
                variants={imageScaleVariants}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                style={{ willChange: "transform" }}
              >
                <Image
                  src={image}
                  alt={name ?? role}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{ objectPosition: imagePosition ?? "center" }}
                />
              </motion.div>
            )}
          </div>
        ) : (
          <PlaceholderImage label={label} aspect="square" />
        )}
        {!reduced && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl border border-gold pointer-events-none z-10"
            variants={borderVariants}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
      <div className="grid grid-rows-[auto_minmax(3.5rem,auto)_auto] gap-y-1">
        {name ? (
          <h3 className="font-display font-bold text-lg md:text-xl text-primary tracking-tight self-start">
            {name}
          </h3>
        ) : (
          <h3 className="font-display font-bold text-lg md:text-xl text-muted tracking-tight italic self-start">
            Name TBD
          </h3>
        )}
        <p className="font-sans text-sm text-gold uppercase tracking-[0.14em] font-medium self-start leading-snug">
          {role}
        </p>
        <p className="font-sans text-sm text-secondary leading-snug self-start">
          {school ?? " "}
        </p>
      </div>
    </Wrapper>
  );
}
