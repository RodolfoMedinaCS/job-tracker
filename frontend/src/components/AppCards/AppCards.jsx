import styles from './AppCards.module.css'
import { Link } from "react-router-dom";

function appCards({job, onCardClick}){

    function formatStatus(status) {
        if (!status) return "";
        return status.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    function getStatusBadgeClasses(status, stylesObj){
        const colors ={
            INTERVIEW_SCHEDULED: stylesObj.badgeInterview,
            SUBMITTED:           stylesObj.badgeSubmitted,
            UNDER_REVIEW:        stylesObj.badgeSubmitted,
            OFFER_EXTENDED:      stylesObj.badgeOffer,
            HIRED:               stylesObj.badgeHired,
            REJECTED:            stylesObj.badgeRejected,
        }
        return colors[status] || stylesObj.badgeSubmitted;
    }


    return(
        <div>
            <div className={styles.card} onClick={() => onCardClick(job)} key={job.id} to={`/applications/${job.id}`}>
                <div  style={{'--card-color':job.color}} className={styles.outerCard}>
                    <div className={styles.innerContainer}>

                        <div className={styles.companyName}>
                            <h1>{job.company}</h1>
                        </div>

                        <div className={styles.jobTitle}>
                            <h3>{job.jobTitle}</h3>
                            <p>{`$${job.salaryMin.toLocaleString()}` + '-' + `$${job.salaryMax.toLocaleString()}`}</p>
                        </div>

                        <div className={styles.jobTags}>
                            <label className={`${styles.pills} ${getStatusBadgeClasses(job.status, styles)}`}>{formatStatus(job.status)}</label>
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