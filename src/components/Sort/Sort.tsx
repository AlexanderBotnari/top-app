import SortProps, { SortEnum } from "./Sort.props";
import cn from "classnames";
import styles from "./Sort.module.css";
import { JSX } from "react";
import SortIcon from "./sort.svg";

export function Sort({sort, setSort, ...props}: SortProps): JSX.Element{
  return (
    <div className={cn(styles.sort)} {...props}>
        <span className={cn({
            [styles.active]: sort === SortEnum.Rating
        })} onClick={() => setSort(SortEnum.Rating)}>
            <SortIcon className={styles.sortIcon}/>
            По рейтингу
        </span>
        <span className={cn({
            [styles.active]: sort === SortEnum.Price
        })} onClick={() => setSort(SortEnum.Price)}>
            <SortIcon className={styles.sortIcon}/>
            По цене
        </span>
    </div>
    );
}