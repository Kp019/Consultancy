interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export const LoadingSpinner = ({
  size = "md",
  fullScreen = false,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const spinner = (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin`}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};
