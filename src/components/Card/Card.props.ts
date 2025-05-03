import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    color?: 'white' | 'blue';
}

export default PProps;