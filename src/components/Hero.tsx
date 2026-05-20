import Container from "./Container";
import HeroAnimatedTitle from "./HeroAnimatedTitle";
import { LogoMark } from "./InspireULogo";

interface HeroProps {
  imageLabel: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  height?: "tall" | "standard" | "short";
  animateTitle?: boolean;
}

const heightClass: Record<NonNullable<HeroProps["height"]>, string> = {
  tall: "min-h-[88vh]",
  standard: "min-h-[72vh]",
  short: "min-h-[52vh]",
};

export default function Hero({
  imageLabel,
  title,
  subtitle,
  eyebrow,
  height = "standard",
  animateTitle = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${heightClass[height]} flex items-center bg-base`}
      aria-label={imageLabel}
    >
      <div className="absolute inset-0 bg-elevated">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,169,97,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(232,184,111,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <LogoMark size={560} />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,6,16,0.55) 0%, rgba(13,6,16,0.30) 40%, rgba(13,6,16,0.85) 100%)",
          }}
        />
      </div>
      <div className="absolute top-6 right-6 z-10 hidden md:block">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
          {imageLabel}
        </span>
      </div>
      <Container className="relative z-10 py-24 md:py-32">
        <div className="flex flex-col text-center gap-5">
          {eyebrow && (
            <span className="font-display text-xs md:text-sm uppercase tracking-[0.32em] text-gold">
              {eyebrow}
            </span>
          )}
          {animateTitle ? (
            <HeroAnimatedTitle title={title} subtitle={subtitle} />
          ) : (
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
          )}
        </div>
      </Container>
    </section>
  );
}
