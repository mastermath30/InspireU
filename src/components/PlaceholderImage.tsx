import { LogoMark } from "./InspireULogo";

type Aspect = "square" | "video" | "portrait" | "landscape" | "wide";

interface PlaceholderImageProps {
  label: string;
  aspect?: Aspect;
  className?: string;
  overlayTitle?: string;
}

const aspectClass: Record<Aspect, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[21/9]",
};

export default function PlaceholderImage({
  label,
  aspect = "landscape",
  className = "",
  overlayTitle,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-elevated border border-gold-subtle ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,97,0.10) 0%, rgba(13,6,16,0) 70%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <LogoMark size={96} className="opacity-70" />
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted max-w-[80%]">
          {label}
        </p>
      </div>
      {overlayTitle && (
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="font-display italic font-extrabold tracking-tighter-display text-4xl md:text-5xl text-primary">
            {overlayTitle}
          </h3>
        </div>
      )}
    </div>
  );
}
