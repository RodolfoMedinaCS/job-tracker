import styles from "./SidePanel.module.css"


function SidePanel({job, onClose}){
    const isOpen = job !== null;

    return(
        <>
            <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
                {job && (
                    <>
                        <div className={styles.panelHeader}>
                            <h2>{job.company}</h2>
                            <button onClick={onClose}>x</button>
                        </div>
                        <div className={styles.panelBody}>
                            <label>Job Title</label>
                            <p>{job.jobTitle}</p>

                            <label>Status</label>
                            <p>{job.status}</p>

                            <label>Date Applied</label>
                            <p>{job.dateApplied}</p>

                            <label>Notes</label>
                            <p>{job.notes}</p>
                        </div>
                    </>
                )}
            </div>

        </>
    );
}
export default SidePanel