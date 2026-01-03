import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  progress?: number;
}

export const PageLoader = ({ isLoading, progress = 0 }: PageLoaderProps) => {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setIsVisible(true);
    } else {
      // Start fade out
      setIsVisible(false);
      // Remove from DOM after animation
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Simple Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-gray-900 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
      </div>

      {/* Progress Bar */}
      {/* <div className="w-64 max-w-[90vw]">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-center text-sm text-gray-500">
          {Math.round(progress)}%
        </p>
      </div> */}
    </div>
  );
};
