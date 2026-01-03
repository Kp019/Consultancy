import { Button } from "../components/ui/buttons";

export const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-7xl px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-start flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70">
            Excellence in Construction
          </div>
          <div className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-left font-light leading-[1.1]">
            Building Dreams with <br/><span className="italic">Precision</span>
          </div>
          <div className="text-start font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-lg animate-fade-up">
            We craft exceptional spaces that stand the test of time. From
            residential elegance to commercial excellence, your vision is our
            blueprint.
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 duration-500 w-full sm:w-auto">
            <Button
              name="View Our Work"
              version="Primary"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Button
              name="Contact Us"
              version="Secondary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative w-screen h-full bg-background-primary">
        <img
          className="h-full w-full object-cover opacity-40"
          src="/images/Hero Construction 1920x1080.webp"
          alt="Hero background showing construction site"
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  );
};
