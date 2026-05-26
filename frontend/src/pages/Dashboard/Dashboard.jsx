import styles from "./Dashboard.module.css"
import StatCards from "../../components/StatCards/StatCards.jsx";

function Dashboard(){

    return(
        <>
            <div className={styles.dashboardBody}>
                <div className={styles.statCardContaniner}>
                    <StatCards badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "+4 this week"></StatCards>
                    <StatCards badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "+4 this week"></StatCards>
                    <StatCards badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "+4 this week"></StatCards>
                    <StatCards badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "+4 this week"></StatCards>
                </div>
            </div>
        </>
    )
}
export default Dashboard;