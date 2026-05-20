import Image from "next/image";
import { ReactNode } from "react";
import HoverZoom from "./HoverZoom";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export interface EventImage {
  label: string;
  size?: "large" | "small";
  aspect?: "square" | "video" | "landscape" | "portrait";
  src?: string;
}

interface EventCardProps {
  title: string;
  body?: ReactNode;
  images: EventImage[];
  layout?: "split" | "gallery";
}

const aspectClass: Record<NonNullable<EventImage["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

function EventTile({
  img,
  defaultAspect,
  sizes,
}: {
  img: EventImage;
  defaultAspect: NonNullable<EventImage["aspect"]>;
  sizes: string;
}) {
  if (!img.src) {
    return (
      <PlaceholderImage
        label={img.label}
        aspect={img.aspect ?? defaultAspect}
      />
    );
  }

  const aspect = img.aspect ?? defaultAspect;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-elevated border border-gold-subtle ${aspectClass[aspect]}`}
    >
      <Image
        src={img.src}
        alt={img.label}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export default function EventCard({
  title,
  body,
  images,
  layout = "split",
}: EventCardProps) {
  if (layout === "gallery") {
    return (
      <Reveal as="article" className="flex flex-col gap-8">
        <h3 className="font-display italic font-extrabold tracking-tighter-display text-3xl md:text-4xl text-primary text-balance">
          {title}
        </h3>
        {body && (
          <div className="font-sans text-base md:text-lg text-secondary max-w-3xl leading-relaxed">
            {body}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <HoverZoom key={i}>
              <EventTile
                img={img}
                defaultAspect="landscape"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </HoverZoom>
          ))}
        </div>
      </Reveal>
    );
  }

  const [feature, ...rest] = images;

  return (
    <Reveal as="article" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <div className="flex flex-col gap-5">
        {feature && (
          <HoverZoom>
            <EventTile
              img={feature}
              defaultAspect="landscape"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </HoverZoom>
        )}
        {rest.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {rest.map((img, i) => (
              <HoverZoom key={i}>
                <EventTile
                  img={img}
                  defaultAspect="square"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </HoverZoom>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 lg:pt-4">
        <h3 className="font-display italic font-extrabold tracking-tighter-display text-3xl md:text-4xl lg:text-5xl text-primary text-balance">
          {title}
        </h3>
        <div
          aria-hidden="true"
          className="h-px w-20 bg-gold/60"
        />
        {body && (
          <div className="font-sans text-base md:text-lg text-secondary leading-relaxed text-pretty">
            {body}
          </div>
        )}
      </div>
    </Reveal>
  );
}
