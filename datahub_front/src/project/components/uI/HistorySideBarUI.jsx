import styles from "../styles.module.css";
import projectExampleData from "../data/ProjectExampleData";

export default function  HistorySideBarUI(){
    return(
        <>
            <select className={styles.ProjectSelectBox}>
                {/*<option value="0" selected>프로젝트 선택</option>*/}
                {projectExampleData.map(project => (
                    <option key={project.id} value={project.id}>
                        {project.name}
                    </option>
                ))}
            </select>
            <div className={styles.HistorySideBar}>
                <div className={styles.HistorySideBarMenu}>
                    <p className={styles.HistorySideMenuState}>현재 상태</p>
                    <p className={styles.HistorySideMenuHistory}>히스토리</p>
                    <p className={styles.HistorySideMenuSearch}>커밋 선택</p>

                </div>

            </div>
        </>
    )
}