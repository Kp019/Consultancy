import { useEffect, useState } from "react";

interface UsePageLoaderReturn {
  isLoading: boolean;
  progress: number;
}

export const usePageLoader = (): UsePageLoaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const updateProgress = (value: number) => {
      if (mounted) {
        setProgress(value);
      }
    };

    // Track document ready state
    if (document.readyState === "complete") {
      updateProgress(100);
      setTimeout(() => {
        if (mounted) setIsLoading(false);
      }, 300);
      return;
    }

    updateProgress(30);

    // Track all images on the page
    const images = Array.from(document.images);
    let loadedImages = 0;

    const checkAllImagesLoaded = () => {
      loadedImages++;
      const imageProgress = (loadedImages / Math.max(images.length, 1)) * 70;
      updateProgress(30 + imageProgress);

      if (loadedImages >= images.length) {
        updateProgress(100);
        setTimeout(() => {
          if (mounted) setIsLoading(false);
        }, 300);
      }
    };

    // If no images, just wait for document ready
    if (images.length === 0) {
      const handleLoad = () => {
        updateProgress(100);
        setTimeout(() => {
          if (mounted) setIsLoading(false);
        }, 300);
      };

      window.addEventListener("load", handleLoad);
      return () => {
        mounted = false;
        window.removeEventListener("load", handleLoad);
      };
    }

    // Track each image
    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener("load", checkAllImagesLoaded);
        img.addEventListener("error", checkAllImagesLoaded); // Count errors as loaded to prevent hanging
      }
    });

    // Fallback: force complete after 5 seconds
    const timeout = setTimeout(() => {
      if (mounted) {
        updateProgress(100);
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
      images.forEach((img) => {
        img.removeEventListener("load", checkAllImagesLoaded);
        img.removeEventListener("error", checkAllImagesLoaded);
      });
    };
  }, []);

  return { isLoading, progress };
};
