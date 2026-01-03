import type { ReactNode } from "react";

interface SectionHeaderProps {
  subheading: string;
  heading: ReactNode | string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  subheading,
  heading,
  className = "",
  align = "left",
}: SectionHeaderProps) => {
  const alignmentClass =
    align === "center" ? "items-center justify-center text-center" : "";
  const combinedClassName = `flex flex-col mb-8 ${alignmentClass} ${className}`;

  return (
    <div className={combinedClassName}>
      <div className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-[#a67b3f]">
        {subheading}
      </div>
      <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-tight">
        {heading}
      </div>
    </div>
  );
};
