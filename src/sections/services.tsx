import { LucideHome } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";

export const Services = () => {
  return (
    <div className="lg:gap-16 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-28 bg-[#eeebe84d] flex flex-col justify-center items-center">
      <SectionHeader
        subheading="Our Services"
        heading={
          <>
            Comprehensive Construction <br className="hidden sm:block" />
            <span className="italic">Solutions</span>
          </>
        }
        align="center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
        <ServiceCard
          icon={
            <LucideHome
              strokeWidth={1.5}
              className="lucide lucide-house w-10 h-10 text-accent mb-6 transition-transform duration-500 group-hover:scale-110 text-[#a67b3f]"
            />
          }
          title="Residential Construction"
          description="Custom homes and luxury residences built to your exact specifications with uncompromising quality."
        />
      </div>
    </div>
  );
};
