import type { ReactElement } from "react";

interface HeroSectionProps {
  children?: ReactElement | ReactElement[] | string;
}

const HeroSection = (props: HeroSectionProps) => {
  return (
    <section className="flex-shrink rounded-sm border-l-4 border-blue-500 bg-white p-6 shadow-md">
      {props.children}
    </section>
  );
};

export default HeroSection;
