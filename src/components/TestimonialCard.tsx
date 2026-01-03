
import { Card } from "./ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <Card props={{ varient: "Primary" }}>
      <div className="py-8 px-10 flex flex-col items-start justify-center">
        <div className="mb-6">
          <svg
            className="w-10 h-10 text-[#a67b3f]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
          </svg>
        </div>
        <div className="font-sans text-muted-foreground leading-relaxed mb-6 text-[#7c736a] italic">
          "{quote}"
        </div>
        <div className="w-20 h-[1px] bg-[#a67b3f] mb-4"></div>
        <div className="font-serif text-lg font-medium text-foreground mb-1 text-[#2a2622]">
          {author}
        </div>
        <div className="font-sans text-sm text-muted-foreground tracking-wide text-[#7c736a]">
          {role}
        </div>
      </div>
    </Card>
  );
};
