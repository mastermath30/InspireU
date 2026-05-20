import { ReactNode } from "react";

type ContainerSize = "default" | "narrow" | "wide";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

const sizeClass: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-6xl",
  wide: "max-w-[1440px]",
};

export default function Container({
  children,
  size = "default",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`${sizeClass[size]} w-full mx-auto px-6 md:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
}
