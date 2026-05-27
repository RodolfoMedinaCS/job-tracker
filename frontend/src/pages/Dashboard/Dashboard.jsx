import styles from "./Dashboard.module.css"
import StatCards from "../../components/StatCards/StatCards.jsx";
import {BarChart, PieChart} from "@mui/x-charts";
import {useEffect, useState} from "react";

function Dashboard(){
    const token = localStorage.getItem("token");
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/applications/stats",{
            method: "GET",
            headers: {
                "contentType" : "application/json",
                "Authorization" : `Bearer ${token}`}
        })
            .then(res => res.json())
            .then(data => setStats(data))
    },[])

    const data = [
    { label: 'Group A', value: 400, color: '#0088FE' },
    { label: 'Group B', value: 300, color: '#00C49F' },
    { label: 'Group C', value: 300, color: '#FFBB28' },
    { label: 'Group D', value: 200, color: '#FF8042' },
    ]

    return(
        <>
            <div className={styles.dashboardBody}>
                <div className={styles.contentBody}>
                    <div className={styles.statCardContaniner}>
                        <StatCards cardLabel={"TOTAL APPLIED"} count={stats?.totalSubmitted}
                                   badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "All time"></StatCards>
                        <StatCards cardLabel={"INTERVIEWS"} count={stats?.interviewScheduled}
                                   badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "Interviews"></StatCards>
                        <StatCards cardLabel={"OFFERS"} count={stats?.totalOfferExtended}
                                   badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "Offers"></StatCards>
                        <StatCards cardLabel={"REJECTED"} count={stats?.totalRejected}
                                   badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} badge = "Rejected"></StatCards>
                    </div>
                    <div className={styles.midContainer}>
                        <div className={styles.detContainer}>
                            {/* STATUS BREAKDOWN */}
                            <PieChart
                                series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}/>
                        </div>
                        <div className={styles.detContainer}>
                            {/* RESPONSE RATE */}
                            <div className={styles.titleContainer}>
                                <p className={styles.containerTitle}>Response Rate</p>
                            </div>
                            <div className={styles.perContainer}>
                                <label className={styles.percentage}>29%</label>
                                <p>of applicants got a response</p>
                                <p>7 out of 24 got a response</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.botContainer}>
                        <div className={styles.detContainer}>
                            {/* RECENT APPLICATIONS */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;