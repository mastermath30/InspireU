import Image from "next/image";

interface InspireULogoProps {
  className?: string;
  size?: number;
}

export default function InspireULogo({
  className = "",
  size = 44,
}: InspireULogoProps) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="InspireU"
    >
      <LogoMark size={size} />
    </span>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 44, className = "" }: LogoMarkProps) {
  return (
    <Image
      src="/inspireu-logo.png"
      alt="InspireU"
      width={size}
      height={size}
      priority
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
