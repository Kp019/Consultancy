import { Button } from "../components/ui/buttons";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../constants/projects";

export const Portfolio = () => {
  return (
    <div className="lg:gap-16 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-28 flex flex-col justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-4 sm:gap-0 mb-8">
        <SectionHeader
          subheading="Portfolio"
          heading={
            <>
              Featured <span className="italic">Projects</span>
            </>
          }
          className="mb-0"
        />
        <div className="w-full sm:w-auto">
          <Button
            name="VIEW ALL PROJECTS"
            version="Tertiary"
            onClick={() => {
              window.location.href = "/projects";
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            category={project.category}
            title={project.title}
            description={project.description}
            location={project.location}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
};
