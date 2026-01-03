import { OptimizedImage } from "./OptimizedImage";

interface ProjectCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  location: string;
  year: string;
}

export const ProjectCard = ({
  imageSrc,
  category,
  title,
  description,
  location,
  year,
}: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container with Hover Overlay */}
      <div className="relative overflow-hidden mb-6 aspect-4/3 w-full">
        <OptimizedImage
          src={imageSrc}
          alt={`${title} Project`}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover Overlay with Location and Year */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-white">
            <p className="text-sm font-sans tracking-wider mb-1">{location}</p>
            <p className="text-2xl font-serif">{year}</p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-start justify-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">
          {category}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
