import styles from "./StatCards.module.css"
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';


function StatCards({badgeColor, badge, color}){

    return(
        <>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.count}>
                        <p className={styles.label}>TOTAL APPLIED</p>
                        <p className={styles.value}>24</p>
                    </div>
                    <span className={styles.badgeContainer} style={{ background: badgeColor.bg, color: badgeColor.text }}>
                        {badge}
                    </span>
                </div>

                {/*GRAPH CONTAINER*/}
                <div className={styles.graphContainer}>
                    <SparkLineChart
                        data ={[1, 4, 2, 5, 7, 2, 4]}
                        height={75}
                        showTooltip
                        showHighlight
                        area
                        color = {color}
                                    xAxis={{
                                        scaleType: 'band',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    }}/>
                </div>
            </div>

        </>
    )

}
export default StatCards