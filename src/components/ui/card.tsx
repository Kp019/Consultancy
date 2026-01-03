import type { ReactNode } from "react";

type CardProps = {
  varient: string;
};

export const Card = ({
  children,
  props,
}: {
  children: ReactNode;
  props: CardProps;
}) => {
  const { varient } = props;

  switch (varient) {
    case "Tertiary":
      return (
        <div className="bg-[#eeebe880] flex flex-col justify-center items-center">
          {children}
        </div>
      );
    case "Primary":
      return (
        <div className="bg-[#fff] border border-[#e5e1dc]">{children}</div>
      );
    case "Secondary":
      return (
        <div className="">{children}</div>
      );
  }
};
