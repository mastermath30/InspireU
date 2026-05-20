import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

interface MissionBlockProps {
  imageLabel: string;
  overlayTitle: string;
  body: string;
  imageSide?: "left" | "right";
}

export default function MissionBlock({
  imageLabel,
  overlayTitle,
  body,
  imageSide = "left",
}: MissionBlockProps) {
  const imageOrderClass = imageSide === "left" ? "lg:order-1" : "lg:order-2";
  const textOrderClass = imageSide === "left" ? "lg:order-2" : "lg:order-1";
  return (
    <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={`${imageOrderClass}`}>
        <PlaceholderImage
          label={imageLabel}
          aspect="landscape"
          overlayTitle={overlayTitle}
        />
      </div>
      <div className={`${textOrderClass} max-w-xl`}>
        <p className="font-display italic font-extrabold tracking-tight text-2xl md:text-3xl lg:text-4xl text-primary text-balance leading-tight">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
