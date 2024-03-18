import styles from "../styles.module.css";

export default function HistoryButtonUI({title}){
    return(
        <div className={styles.HistoryBtns}>
            <div className={styles.HistoryBtn}>{title}</div>
        </div>
    )
}