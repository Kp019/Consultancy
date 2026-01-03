import { SectionHeader } from "../components/SectionHeader";
import { StatCard } from "../components/StatCard";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-28 ">
      <div className="w-full md:w-1/2">
        <SectionHeader
          subheading="ABOUT US"
          heading={
            <>
              Crafting Spaces with <span className="italic">Integrity</span>
            </>
          }
        />
        <div className="font-sans text-muted-foreground leading-relaxed mb-6 text-[#7c736a]">
          For over two decades, we have been at the forefront of construction
          excellence. Our commitment to quality craftsmanship and innovative
          solutions has earned us the trust of clients across residential,
          commercial, and industrial sectors.
        </div>
        <div className="font-sans text-muted-foreground leading-relaxed mb-6 text-[#7c736a]">
          Every project we undertake reflects our dedication to precision,
          sustainability, and timeless design. We believe that great
          construction is not just about building structures—it's about creating
          legacies.
        </div>
        <div className="w-20 h-[1px] bg-[#a67b3f] mt-12"></div>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
        <StatCard value="25+" label="Years Experience" />
        <StatCard value="25+" label="Years Experience" />
        <StatCard value="25+" label="Years Experience" />
        <StatCard value="25+" label="Years Experience" />
      </div>
    </div>
  );
};
