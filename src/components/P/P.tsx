import PProps from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";
import { JSX } from "react";

export function P({children, className, size = 'm', ...props}: PProps): JSX.Element{
  return (
    <p className={cn( styles.p, className,
        {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
        }
    )}
    {...props} 
    >
        {children}
    </p>
    );
}