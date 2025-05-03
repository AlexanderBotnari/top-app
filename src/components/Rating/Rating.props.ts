import {DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    error?: FieldError;
}

export default RatingProps;