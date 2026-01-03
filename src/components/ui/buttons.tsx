export const Button = ({
  name,
  version,
  isScrolled,
  onClick,
  className = "",
  type = "button",
}: {
  name: string;
  version: string;
  isScrolled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) => {
  const getButtonClassName = () => {
    const basePadding = "py-3 px-6 sm:py-4 sm:px-8 md:px-10";
    switch (version) {
      case "Primary":
        return `bg-button-primary text-button-primary-text ${basePadding} cursor-pointer opacity-100 hover:bg-button-primary/80 active:bg-button-primary-active transition-all duration-300 ease-in-out text-sm sm:text-base`;
      case "Secondary":
        if (isScrolled) {
          return `bg-button-secondary border border-gray-900/50 text-gray-900 ${basePadding} cursor-pointer hover:bg-button-primary-hover hover:text-white active:bg-gray-800 transition-all duration-300 ease-in-out text-sm sm:text-base`;
        }
        return `bg-button-secondary border border-white/50 text-button-secondary-text ${basePadding} cursor-pointer hover:bg-button-secondary-hover hover:text-button-secondary-text-hover active:bg-button-secondary-active transition-all duration-300 ease-in-out text-sm sm:text-base`;
      case "Tertiary":
        return `border border-button-primary text-button-Secondary-text ${basePadding} cursor-pointer transition-all hover:bg-button-primary hover:text-[#fff] duration-300 ease-in-out text-xs sm:text-sm`;
      case "Quaternary":
        return `bg-button-info text-button-quaternary-text ${basePadding} cursor-pointer transition-all hover:bg-button-info-hover active:bg-button-info-active duration-300 ease-in-out text-sm sm:text-base`;
      case "Quinary":
        return `bg-button-warning text-button-quinary-text ${basePadding} cursor-pointer transition-all hover:bg-button-warning-hover active:bg-button-warning-active duration-300 ease-in-out text-sm sm:text-base`;
      default:
        return `bg-button-secondary text-button-secondary-text ${basePadding} cursor-pointer hover:bg-button-secondary-hover active:bg-button-secondary-active transition-all duration-300 ease-in-out text-sm sm:text-base`;
    }
  };

  return (
    <button
      type={type}
      className={`${getButtonClassName()} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
