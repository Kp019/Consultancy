
import { Card } from "./ui/card";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Card props={{ varient: "Tertiary" }}>
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2 text-[#2a2622]">
          {value}
        </div>
        <div className="font-sans text-sm text-muted-foreground tracking-wide text-[#7c736a]">
          {label}
        </div>
      </div>
    </Card>
  );
};
