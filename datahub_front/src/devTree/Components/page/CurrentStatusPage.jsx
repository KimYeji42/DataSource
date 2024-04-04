import styles from "../../styles/styles.module.css";
import HistorySideBar2UI from "../ui/HistorySideBar2UI";
import React, {useState} from "react";
import HistoryCanvasLayOut from "../layout/HistoryCanvasLayOut";
import CurrentStatusTableLayOut from "../layout/CurrentStatusTableLayOut";

export default function CurrentStatusPage() {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedCommitId, setSelectedCommitId] = useState(null);

    const handleSelectProject = (projectId) => {
        setSelectedProjectId(projectId);
    };

    const handleSelectCommit = (commitId) => {
        setSelectedCommitId(commitId);
    };

    return (
        <div className={styles.CurrentPage}>
            <div className={styles.HistoryCanverLayOut}>
                <HistoryCanvasLayOut/>
            </div>

            <div className={styles.HistoryCanverBack}>
                <div className={styles.HistoryCanver}>
                    <CurrentStatusTableLayOut commitId={selectedCommitId}/>
                    <div>
                        <textarea placeholder={"커밋 메시지를 입력하세요."} className={styles.CommitMs}></textarea>
                        <button className={styles.CommitBtn}>커밋</button>

                    </div>

                </div>
            </div>
            <HistorySideBar2UI
                onSelect={handleSelectProject}
                defaultSelectedIndex={0}
            />
        </div>
    )
}