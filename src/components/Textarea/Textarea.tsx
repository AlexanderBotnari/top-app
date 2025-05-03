import TextareaProps from "./Textarea.props";
import cn from "classnames";
import styles from "./Textarea.module.css";
import { JSX } from "react";

export function Textarea({className, error, ...props}: TextareaProps): JSX.Element{
  return (
    <div className={cn(styles.textareaWrapper, className)}>
        <textarea className={cn(styles.textarea, {
          [styles.error]: error
        })} {...props}/>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
    );
}