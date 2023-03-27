import { ReactNode } from 'react';

export default interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: ReactNode;
}