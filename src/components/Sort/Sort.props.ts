import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
    Rating = 'rating',
    Price = 'price',
}

export default SortProps;