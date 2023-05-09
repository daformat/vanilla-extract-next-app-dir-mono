import {button, ButtonVariants} from "./button.css";
import {ReactNode} from "react";

export const Button = ({color, children}: ButtonVariants & {children: ReactNode}) => {
  return <button className={button({color})}>{children}</button>

}