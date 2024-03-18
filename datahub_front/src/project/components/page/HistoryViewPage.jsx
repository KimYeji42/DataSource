import styles from "../styles.module.css";
import HistoryCanvasLayOut from "../layout/HistoryCanvasLayOut";
import CommitChartUI from "../uI/CommitChartUI";
import ChangeCommitLayOut from "../../../devTree/Components/layout/ChangeCommitLayOut";

export default function HistoryViewPage(){
    return(
        <>
            <div className={styles.HistoryCanverLayOut}>
                <HistoryCanvasLayOut/>

            </div>

            <div className={styles.HistoryCanverBack} >
                <div className={styles.HistoryCanver}>
                    <CommitChartUI/>
                    <ChangeCommitLayOut/>
                </div>

            </div>

        </>
    )

}