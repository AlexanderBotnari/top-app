import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 's' | 'm' | 'l';
}

export default PProps;