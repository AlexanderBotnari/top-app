import TagProps from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";
import { JSX } from "react";

export function Tag({children, className, size = 'm', color, href , ...props}: TagProps): JSX.Element{
  return (
    <div {...props} className={cn( styles.tag, className,
        {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.primary]: color == 'primary',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.gray]: color == 'gray',
            [styles.red]: color == 'red',
        }
    )}
    >
        {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
    );
}