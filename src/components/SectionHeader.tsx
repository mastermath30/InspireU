import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  eyebrow,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const subtitleClass = `font-sans text-base md:text-lg text-secondary max-w-2xl ${isCenter ? "mx-auto" : ""}`;
  return (
    <Reveal
      className={`flex flex-col gap-4 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span className="font-display text-xs uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display italic font-extrabold tracking-tighter-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance">
        {title}
      </h2>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
      <div
        aria-hidden="true"
        className={`mt-2 h-px w-24 bg-gold/60 ${isCenter ? "mx-auto" : ""}`}
      />
    </Reveal>
  );
}
