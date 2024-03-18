import styles from "../styles.module.css";
import HistoryButtonUI from "../uI/HistoryButtonUI";
import HistoryButtonWhitever from "../uI/HistoryButtonWhitever";
import HistorySideBarUI from "../uI/HistorySideBarUI";
import CommitChartUI from "../uI/CommitChartUI";

export default function HistoryCanvasLayOut(){
    return(
        <>
            <div className={styles.buttonContainerF}>
                <HistoryButtonUI title={"Commit"}/>
                <HistoryButtonWhitever title={"Push"} icon={"↑"} number={"3"}/>
                <HistoryButtonWhitever title={"Pull"} icon={"↓"} number={"3"}/>
            </div>
            <div className={styles.buttonContainerT}>
                <HistoryButtonUI title={"Reset"}/>
                <HistoryButtonUI title={"Merge"}/>

            </div>

            <HistorySideBarUI/>

            <div className={styles.HistoryCanver}>
                <CommitChartUI/>
            </div>

        </>
    )
}