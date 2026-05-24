import styles from "./SidePanel.module.css"
import {useNavigate} from "react-router-dom";


function SidePanel({job, onClose}){
    const isOpen = job !== null;
    const navigate = useNavigate();

    function getStatusBadgeClass(status, stylesObj){
        const map = {
            INTERVIEW_SCHEDULED: stylesObj.badgeInterview,
            SUBMITTED:           stylesObj.badgeSubmitted,
            UNDER_REVIEW:        stylesObj.badgeSubmitted,
            OFFER_EXTENDED:      stylesObj.badgeOffer,
            HIRED:               stylesObj.badgeHired,
            REJECTED:            stylesObj.badgeRejected,
        };
        return map[status] || stylesObj.badgeSubmitted;
    }

    function getInitials(name) {
        if (!name) return "?";
        return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    }

    function formatStatus(status) {
        if (!status) return "";
        return status.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    function handleEdit() {
        navigate("/add-application", { state: job });
    }

    return(
        <>
            <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
                {job && (
                    <>
                        <div className={styles.panelHeader}>
                            <div className={styles.headerTop}>
                                <div>
                                    <p className={styles.company}>{job.company}</p>
                                    <p className={styles.jobTitle}>{job.jobTitle}</p>
                                </div>
                                <button className={styles.closeBtn} onClick={onClose}>✕</button>
                            </div>
                            <div className={styles.badgeRow}>
                                <span className={`${styles.badge} ${getStatusBadgeClass(job.status, styles)}`}>
                                    {formatStatus(job.status)}
                                </span>
                            </div>
                        </div>

                        <div className={styles.panelBody}>
                            <div>
                                <p className={styles.sectionDetails}>Details</p>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Date applied</span>
                                    <span className={styles.infoVal}>{job.dateApplied}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Location</span>
                                    <span className={styles.infoVal}>{job.location || "—"}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Work type</span>
                                    <span className={styles.infoVal}>{job.workType || "—"}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <span className={styles.infoLabel}>Salary</span>
                                    <span className={styles.infoVal}>
                                    {job.salaryMin && job.salaryMax
                                        ? `$${job.salaryMin.toLocaleString()} – $${job.salaryMax.toLocaleString()}`
                                        : "—"}
                                    </span>
                                </div>
                            </div>
                                <hr className={styles.divider} />

                                {(job.recruiterName || job.recruiterEmail) && (
                                    <>
                                        <div>
                                            <p className={styles.sectionTitle}>Recruiter</p>
                                            <div className={styles.recruiterRow}>
                                                <div className={styles.avatar}>
                                                    {getInitials(job.recruiterName)}
                                                </div>
                                                <div>
                                                    <p className={styles.recruiterName}>{job.recruiterName}</p>
                                                    <p className={styles.recruiterEmail}>{job.recruiterEmail}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className={styles.divider} />
                                    </>
                                )}

                                {job.notes && (
                                    <div>
                                        <p className={styles.sectionTitle}>Notes</p>
                                        <p className={styles.notesText}>{job.notes}</p>
                                    </div>
                                )}
                        </div>
                        <div className={styles.panelFooter}>
                            <button className={styles.btnEdit} onClick={handleEdit}>Edit application</button>
                            <button className={styles.btnDelete} onClick={onClose}>Delete</button>
                        </div>
                    </>
                )}
            </div>

        </>
    );
}
export default SidePanel