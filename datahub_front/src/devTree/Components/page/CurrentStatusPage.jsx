import styles from "../../styles/styles.module.css";
import HistorySideBar2UI from "../ui/HistorySideBar2UI";
import React, {useState} from "react";
import HistoryCanvasLayOut from "../layout/HistoryCanvasLayOut";
import CurrentStatusTableLayOut from "../layout/CurrentStatusTableLayOut";
import GuidePopupUI from "../ui/GuidePopupUI";

export default function CurrentStatusPage() {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedCommitId, setSelectedCommitId] = useState(null);
    const [commitSuccessVisible, setCommitSuccessVisible] = useState(false); // 커밋 성공 메시지 표시 여부 상태
    const handleSelectProject = (projectId) => {
        setSelectedProjectId(projectId);
    };

    const handleSelectCommit = (commitId) => {
        setSelectedCommitId(commitId);
    };

    const handleCommit = () => {
        // 커밋 성공 메시지 표시
        setCommitSuccessVisible(true);
        // 5초 후에 커밋 성공 메시지 숨기기
        setTimeout(() => {
            setCommitSuccessVisible(false);
        }, 5000);
    };

    return (
        <div className={styles.CurrentPage}>
            <div className={styles.HistoryCanverLayOut}>
                <HistoryCanvasLayOut/>
            </div>

            <div className={styles.HistoryCanverBack}>
                <div className={styles.HistoryCanver}>
                    <CurrentStatusTableLayOut commitId={selectedCommitId}/>
                    <div className={styles.commitBox}>
                        <textarea placeholder={"커밋 메시지를 입력하세요."} className={styles.CommitMs}></textarea>
                        {commitSuccessVisible && (
                            <span className={styles.commitSuccess}>커밋완료 ✓ </span>
                        )}
                        <button className={styles.CommitBtn}  onClick={handleCommit}>커밋</button>

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