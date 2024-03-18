import styles from "../styles.module.css";

export default function HistoryButtonWhitever({title, icon, number}){
    return(
        <div className={styles.HistoryBtns}>
            <div className={styles.HistoryBtn}>
                {title}
                <div className={styles.HistoryBtnWhite}>
                    {icon}{number}
                </div>
            </div>
        </div>
    )
}