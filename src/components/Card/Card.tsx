import CardProps from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";
import { JSX } from "react";

export function Card({color="white", children, className, ...props}: CardProps): JSX.Element{
  return (
        <div className={cn(className, styles.card, {
            [styles.blue]: color = 'blue'
        })} {...props}>
            {children}
        </div>
    );
}