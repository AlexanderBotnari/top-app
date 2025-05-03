"use client";

import { JSX, useEffect, useState } from "react";
import ButtonProps from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

export function Rating({isEditable=false, rating, setRating, error, ...props}: ButtonProps): JSX.Element {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })} 
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => changeRating(i + 1)}>
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: React.KeyboardEvent) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray);
    }

    useEffect( () => {
        constructRating(rating);
    }, [rating]);

    function changeDisplay(i: number) {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }

    function changeRating(i: number) {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    function handleSpace(i: number, e: React.KeyboardEvent) {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }

    return (
        <div {...props} className={cn(styles.ratingWrapper)}>
            {ratingArray.map((r, i) => {
                return (
                    <span key={i} className={cn({[styles.error]: error})}>{r}</span>
                )
            })}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
}