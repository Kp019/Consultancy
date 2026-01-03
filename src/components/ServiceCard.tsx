
import type { ReactNode } from "react";
import { Card } from "./ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card props={{ varient: "Primary" }}>
      <div className="py-8 px-10 flex flex-col items-start justify-center">
        <div className="mb-6">{icon}</div>
        <div className="font-serif text-xl font-medium text-foreground mb-4">
          {title}
        </div>
        <div className="font-sans text-muted-foreground leading-relaxed text-[#7c736a]">
          {description}
        </div>
      </div>
    </Card>
  );
};
