import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../constants/projects";
import { Footer } from "../sections/footer";
import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";
import { PageLoader } from "../components/PageLoader";
import { usePageLoader } from "../hooks/usePageLoader";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoading, progress } = usePageLoader();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      <PageLoader isLoading={isLoading} progress={progress} />
      <div
        className={`fixed z-50 top-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <Navbar isScrolled={isScrolled} />
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/public/images/Hero Construction 1920x1080.webp"
            alt="Projects Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background-primary/60" />
        </div>
        <div className="relative z-10 text-start px-4 sm:px-8 md:px-16 lg:px-32 w-full flex justify-between items-end pb-12 sm:pb-16 md:pb-20">
          <div className="flex flex-col justify-start items-start w-full lg:w-3/4">
            {/* Back to Home Link */}
            <Link
              to="/"
              className="inline-block text-white/80 hover:text-white text-xs sm:text-sm tracking-wider mb-4 sm:mb-6 transition-colors duration-300"
            >
              ← Back to Home
            </Link>

            {/* Section Label */}
            <p className="text-white/70 text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              OUR WORK
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 md:mb-12 font-normal">
              Featured <span className="italic">Projects</span>
            </h1>
            <div className="font-sans text-white/70 text-sm sm:text-base max-w-2xl">
              Explore our portfolio of exceptional construction and renovation
              projects. Each project reflects our commitment to quality,
              innovation, and client satisfaction.
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white pt-10 pb-5 sticky top-[72px] z-40 border-b border-gray-100">
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-button-primary text-button-primary-text"
                  : "bg-transparent text-gray-600 border border-gray-300 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <main className="grow py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
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
      </main>

      <Footer />
    </div>
  );
};
