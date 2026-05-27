import styles from "./Dashboard.module.css"
import StatCards from "../../components/StatCards/StatCards.jsx";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const token = localStorage.getItem("token");
    const [stats, setStats] = useState(null);
    const [recentApps, setRecentApps] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications/stats`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setStats(data));

        fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setRecentApps(data.slice(-5).reverse()));
    }, []);

    if (!stats) return <p style={{ padding: "2rem", color: "#64748b" }}>Loading...</p>;

    const total = stats.totalSubmitted + stats.totalRejected + stats.totalHired +
        stats.totalUnderReview + stats.totalOfferExtended + stats.interviewScheduled;

    const responded = stats.interviewScheduled + stats.totalOfferExtended + stats.totalHired + stats.totalRejected;
    const responseRate = total > 0 ? Math.round((responded / total) * 100) : 0;

    const pieData = [
        { id: 0, value: stats.totalSubmitted,      label: "Submitted",     color: "#dbeafe" },
        { id: 1, value: stats.totalUnderReview,    label: "Under Review",  color: "#e0e7ff" },
        { id: 2, value: stats.interviewScheduled,  label: "Interview",     color: "#fef3c7" },
        { id: 3, value: stats.totalOfferExtended,  label: "Offer",         color: "#dcfce7" },
        { id: 4, value: stats.totalRejected,       label: "Rejected",      color: "#f1f5f9" },
        { id: 5, value: stats.totalHired,          label: "Hired",         color: "#d1fae5" },
    ].filter(d => d.value > 0);

    function formatStatus(status) {
        if (!status) return "";
        return status.replace(/_/g, " ").toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    const badgeMap = {
        SUBMITTED:           { bg: "#dbeafe", text: "#1e40af" },
        UNDER_REVIEW:        { bg: "#e0e7ff", text: "#3730a3" },
        INTERVIEW_SCHEDULED: { bg: "#fef3c7", text: "#92400e" },
        OFFER_EXTENDED:      { bg: "#dcfce7", text: "#166534" },
        REJECTED:            { bg: "#f1f5f9", text: "#475569" },
        HIRED:               { bg: "#d1fae5", text: "#065f46" },
    };

    return (
        <div className={styles.page}>

            <div className={styles.statRow}>
                <StatCards cardLabel="Total Applied"  count={total}                       badge="All time"  badgeColor={{ bg: "#e0e7ff", text: "#3730a3" }} />
                <StatCards cardLabel="Interviews"     count={stats.interviewScheduled}    badge="Scheduled" badgeColor={{ bg: "#fef3c7", text: "#92400e" }} />
                <StatCards cardLabel="Offers"         count={stats.totalOfferExtended}    badge="Extended"  badgeColor={{ bg: "#dcfce7", text: "#166534" }} />
                <StatCards cardLabel="Rejected"       count={stats.totalRejected}         badge="Total"     badgeColor={{ bg: "#f1f5f9", text: "#475569" }} />
            </div>

            <div className={styles.midRow}>

                <div className={styles.card}>
                    <p className={styles.cardTitle}>Status breakdown</p>
                    <div className={styles.pieWrap}>
                        <PieChart
                            series={[{ innerRadius: 50, outerRadius: 90, data: pieData }]}
                            width={200}
                            height={200}
                            slotProps={{ legend: { hidden: true } }}
                        />
                        <div className={styles.legend}>
                            {pieData.map(d => (
                                <div key={d.id} className={styles.legendRow}>
                                    <span className={styles.legendDot} style={{ background: d.color }} />
                                    <span className={styles.legendLabel}>{d.label}</span>
                                    <span className={styles.legendVal}>{d.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardTitle}>Response rate</p>
                    <div className={styles.rateWrap}>
                        <p className={styles.rateNum}>{responseRate}%</p>
                        <p className={styles.rateLabel}>of applications got a response</p>
                        <p className={styles.rateSub}>{responded} out of {total} moved past submitted</p>
                    </div>
                </div>

            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>Recent applications</p>
                {recentApps.length === 0 && (
                    <p style={{ color: "#94a3b8", fontSize: "13px" }}>No applications yet</p>
                )}
                {recentApps.map(job => (
                    <div key={job.id} className={styles.appRow} onClick={() => navigate("/applications")}>
                        <div className={styles.appDot} style={{ background: job.color || "#cce5fb" }} />
                        <span className={styles.appCompany}>{job.company}</span>
                        <span className={styles.appRole}>{job.jobTitle}</span>
                        <span className={styles.appBadge}
                              style={{
                                  background: badgeMap[job.status]?.bg || "#f1f5f9",
                                  color: badgeMap[job.status]?.text || "#475569"
                              }}>
                            {formatStatus(job.status)}
                        </span>
                        <span className={styles.appDate}>{job.dateApplied}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Dashboard;