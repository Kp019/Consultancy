import { SectionHeader } from "../components/SectionHeader";
import { TestimonialCard } from "../components/TestimonialCard";

export const Testimonials = () => {
  return (
    <div className="lg:gap-16 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-28 flex flex-col justify-center items-center w-full">
      <SectionHeader
        subheading="Testimonials"
        heading={
          <>
            What Our Clients <span className="italic">Say</span>
          </>
        }
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        <TestimonialCard
          quote="Working with this construction team was an absolute pleasure. They transformed our vision into reality with exceptional attention to detail and professionalism. The quality of work exceeded our expectations."
          author="Sarah Johnson"
          role="Homeowner, Riverdale Residence"
        />
        <TestimonialCard
          quote="The team's expertise in commercial construction is unmatched. They delivered our office complex on time and within budget, maintaining the highest standards throughout the project."
          author="Michael Chen"
          role="CEO, Tech Innovations Inc."
        />
        <TestimonialCard
          quote="From initial consultation to final walkthrough, the entire process was seamless. Their commitment to sustainability and quality craftsmanship is evident in every detail of our new home."
          author="Emily Rodriguez"
          role="Property Developer"
        />
      </div>
    </div>
  );
};

