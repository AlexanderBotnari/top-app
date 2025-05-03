import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}

export default HtagProps;