"use client";

import ReviewFormProps from "./ReviewForm.props";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import { JSX, useState } from "react";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import { API } from "@/helpers/api";

export function ReviewForm({productId, className, ...props}: ReviewFormProps): JSX.Element{

    const {register, control, handleSubmit, formState:{errors}} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();

    async function onSubmit(formData: IReviewForm){
        try {
            const response = await fetch(API.review.createDemo, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...formData, productId})
            });
            if(response.ok){
                setIsSuccess(true);
            }else{
                setIsError('Что-то пошло не так, попробуйте позже');
            }
        }catch (e) {
            setIsError('Что-то пошло не так, попробуйте перезапустить страницу');
        }
    }
        

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(className, styles.reviewForm)} {...props}>
            <Input {...register('name', {required: {value: true, message: 'Введите имя'}})} 
                    placeholder="Имя"
                    error={errors.name}
                    />
            <Input {...register('title', {required: {value: true, message: 'Введите заголовок'}})} 
                    error={errors.title}
                    placeholder="Заголовок отзыва" 
                    className={styles.title}
            />
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Controller
                    control={control}
                    name="rating"
                    rules={{required: {value: true, message: 'Укажите рейтинг'}}}
                    render={({ field }) => (
                        <Rating rating={field.value} isEditable={true} setRating={field.onChange} error={errors.rating}/>
                    )}
                />
            </div>
            <Textarea {...register('description', {required: {value: true, message: 'Введите текст отзыва'}})}
                    error={errors.description} 
                    placeholder="Текст отзыва" 
                    className={styles.description}
                    />
            <div className={styles.submit}>
                <Button appearance="primary">Отправить</Button>
                <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        {isSuccess && <div className={cn(styles.success, styles.panel)}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div className={styles.successDescription}>Спасибо, ваш отзыв будет опубликован после проверки</div>
            <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
        </div>}
        {isError && <div className={cn(styles.error, styles.panel)}>
            <div className={styles.errorTitle}>Ошибка</div>
            <div className={styles.errorDescription}>{isError}</div>
            <CloseIcon className={styles.close} onClick={() => setIsError(undefined)}/>
        </div>}
    </form>
    );
}