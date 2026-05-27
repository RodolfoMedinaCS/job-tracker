import styles from "./StatCards.module.css"


function StatCards({badgeColor, count, cardLabel,badge}){

    return(
        <>
            <div className={styles.card}>
                <p className={styles.label}>{cardLabel}</p>
                <p className={styles.count}>{count}</p>
                <span className={styles.badgeContainer} style={{ background: badgeColor.bg, color: badgeColor.text }}>
                       {badge}
                </span>
            </div>

        </>
    )

}
export default StatCards