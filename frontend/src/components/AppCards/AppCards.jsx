import styles from './AppCards.module.css'
import {useState} from "react";

function appCards({job, onCardClick}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isHovered, setIsHovered] = useState(false);

    const now = new Date();
    const target = new Date(job.dateApplied);

    now.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - now;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    // Handle specific edge cases first
    if (diffDays === 0) return "today";
    if (diffDays === -1) return "yesterday";
    if (diffDays >= -7 && diffDays < -1) return `${Math.abs(diffDays)} days ago`;
    if (diffDays === -7) return "a week ago";

    // Fallback for dates older than a week or dates in the future
    let dateLabel = rtf.format(diffDays, 'day');

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

    const hoverMap = {
        'var(--card-coral)' : 'var(--card-coral-hover)',
        'var(--card-peach)' : 'var(--card-peach-hover)',
        'var(--card-lemon)' : 'var(--card-lemon-hover)',
        'var(--card-lavender)' : 'var(--card-lavender-hover)',
        'var(--card-mint)' : 'var(--card-mint-hover)',
        'var(--card-sky)' : 'var(--card-sky-hover)',
    }

    const baseColor = job.color || "var(--card-sky)";
    const hoverColor = hoverMap[baseColor] || baseColor;




    return(
        <div>
            <div className={styles.card} onClick={() => onCardClick(job)} key={job.id} to={`/applications/${job.id}`}>
                <div  style={{background: isHovered ? hoverColor : baseColor}} className={styles.outerCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
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

                    <p className={styles.postedDate}>{dateLabel}</p>
                </div>
            </div>
        </div>
    )
}

export default appCards