import styles from './appCards.module.css'
import { Link } from "react-router-dom";

function appCards({job, onCardClick}){
    return(
        <div>
            <div onClick={() => onCardClick(job)} key={job.id} to={`/applications/${job.id}`}>
                <div className={styles.outerCard}>
                    <div className={styles.innerContainer}>

                        <div className={styles.companyName}>
                            <h1>{job.company}</h1>
                        </div>

                        <div className={styles.jobTitle}>
                            <h3>{job.jobTitle}</h3>
                            <p>$130,000-145,000</p>
                        </div>

                        <div className={styles.jobTags}>
                            <label className={styles.pills}>{job.status}</label>
                            <label className={styles.pills}>{job.dateApplied}</label>
                        </div>
                    </div>

                    <p className={styles.postedDate}>Posted Yesterday</p>
                </div>
            </div>
        </div>
    )
}

export default appCards