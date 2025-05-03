import InputProps from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";
import { JSX } from "react";

export function Input({className, error, ...props}: InputProps): JSX.Element{
  return (
    <div className={cn(styles.inputWrapper, className)}>
        <input className={cn(styles.input, {
          [styles.error]: error
          })} {...props}/>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
    );
}