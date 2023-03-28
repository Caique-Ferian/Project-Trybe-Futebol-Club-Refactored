import React from "react";
import SectionProps from "./types";

const Section: React.FC<SectionProps> = ({
  className,
  children,
}:SectionProps) => {
  return(<section className={className}>{children}</section>);
}

export default Section;