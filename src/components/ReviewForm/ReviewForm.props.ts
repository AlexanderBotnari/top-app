import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
}

export default ReviewProps;