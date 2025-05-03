import FooterProps from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { JSX } from "react";
import {format} from "date-fns";

export function Footer({ className, ...props}: FooterProps): JSX.Element{
  return (
        <div {...props} className={cn(styles.container, className)}>
            <div>
                OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
            </div>
            <a href="#" target="_blank">Пользовательское соглашение</a>
            <a href="#" target="_blank">Политика конфиденциальности</a>
        </div>
    );
}