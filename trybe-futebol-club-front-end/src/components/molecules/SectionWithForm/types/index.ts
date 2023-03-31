import { ReactNode } from "react";

export default interface SectionWithFormProps {
  className: string;
  classNameForm?: string;
  hasImage:boolean;
  children: ReactNode;
}