import AdvantagesProps from "./Advantages.props";
import styles from "./Advantages.module.css";
import { JSX } from "react";
import AdvantageIcon from "./success.svg";

export function Advantages({advantages}: AdvantagesProps): JSX.Element{
  return (
    <>
       {advantages.map((a) => (
            <div className={styles.advantage} key={a._id}>
                <AdvantageIcon className={styles.advantageIcon}/>
                <div className={styles.advantageTitle}>{a.title}</div>
                <hr className={styles.vline} />
                <div className={styles.advantageDescription}>{a.description}</div>
            </div>
       ))}
    </>
    );
}