import styles from './appCards.module.css'
import { Link } from "react-router-dom";

function appCards({job}){
    return(
        <div>
            <Link key={job.id} to={`/applications/${job.id}`} className={styles.applicationCard}>
                <div className={styles.metaData}>
                    <h3>{job.company}</h3>
                    <p>{job.jobTitle}</p>
                </div>

                <div className={styles.metaData}>
                    <span>{job.status}</span>
                    <p>{job.dateApplied}</p>
                </div>
            </Link>
        </div>
    )
}

export default appCards