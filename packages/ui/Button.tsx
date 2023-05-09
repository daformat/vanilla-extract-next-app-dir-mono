import { button, ButtonVariants } from "./Button.css";
import { ReactNode } from "react";

export const Button = ({ color, children }: ButtonVariants & { children: ReactNode }) => {
  return <button className={button({ color })}>{children}</button>;
};