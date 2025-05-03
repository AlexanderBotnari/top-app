import ReviewProps from "./Review.props";
import cn from "classnames";
import styles from "./Review.module.css";
import { JSX } from "react";
import UserIcon from "./user.svg";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import { Rating } from "../Rating/Rating";

export function Review({review, className, ...props}: ReviewProps): JSX.Element{

    const {name, title, description, createdAt, rating} = review;

  return (
        <div className={cn(className, styles.review)} {...props}>
            <UserIcon className={styles.userIcon}/>
            <div>
                <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), "dd MMMM yyyy", {locale: ru})}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating}/>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}