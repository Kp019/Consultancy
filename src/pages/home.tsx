import { Suspense, lazy, useEffect, useState } from "react";
import { Hero } from "../sections/hero";
import { PageLoader } from "../components/PageLoader";
import { usePageLoader } from "../hooks/usePageLoader";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Navbar } from "../components/navbar";

const About = lazy(() =>
  import("../sections/about").then((module) => ({ default: module.About }))
);
const Portfolio = lazy(() =>
  import("../sections/portfolio").then((module) => ({
    default: module.Portfolio,
  }))
);
const Services = lazy(() =>
  import("../sections/services").then((module) => ({
    default: module.Services,
  }))
);
const Testimonials = lazy(() =>
  import("../sections/testimonials").then((module) => ({
    default: module.Testimonials,
  }))
);
const Footer = lazy(() =>
  import("../sections/footer").then((module) => ({ default: module.Footer }))
);

export const Home = () => {
  const { isLoading } = usePageLoader();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="font-sans">
      <PageLoader isLoading={isLoading} />
      <div
        className={`fixed z-50 top-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Navbar isScrolled={isScrolled} />
      </div>
      <Hero />
      <div className="flex flex-col">
        <Suspense fallback={<LoadingSpinner fullScreen={false} />}>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Portfolio />
          </section>
          <Testimonials />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingSpinner fullScreen={false} />}>
        <section id="contact">
          <Footer />
        </section>
      </Suspense>
    </div>
  );
};
