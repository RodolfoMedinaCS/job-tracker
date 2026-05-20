import styles from './dashboard.module.css'
import AppCards from "../appCards/appCards.jsx"
import {useEffect, useState} from "react";
import Navbar from "../NavBar/navbar.jsx";

function dashboard(){
    const[filter, setFilter] = useState("ALL");
    const[jobList, setJobList] = useState([]);


    {/*
    The filteredJobs is an array of of which we want to be filled with applications
    the filter variable is what holds the status of the kind of filter we want
    then we create a condition, if filter which is picked through the select
    options, is === 'ALL' then it just returns the list of jobs 'jobList'
    if not, and it has a different status then it calls this built in
    javascript array method that loops through every item and keeps only the
    job list with that specific filter, "job" being the variable used to
    store every job app on every iteration, and then after every iteration it checks
    whether the job.status === filter to the filter the user selected
    */}
    const filteredJobs = filter === "ALL" ? jobList : jobList.filter(job =>
    job.status === filter);
    const token = localStorage.getItem("token");



    useEffect(() => {
        fetch("http://localhost:8080/api/v1/applications",{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`},
        })
            .then(res => res.json()).then(data => setJobList(data))
    }, [])

    return(
        <>
            <div className={styles.dashboard}>

                <Navbar></Navbar>

                <div className={styles.flexContainer}>
                    <div className={styles.filters}>
                        <label>Status Filters</label>
                        <select value={filter} onChange={(e) =>
                        setFilter(e.target.value)}>
                            <option value="ALL">ALL</option>
                            <option value="SUBMITTED">Submitted</option>
                            <option value="UNDER_REVIEW">Under Review</option>
                            <option value="INTERVIEW_SCHEDULED">Interview Scheduled</option>
                            <option value="OFFER_EXTENDED">Offer Extended</option>
                            <option value="REJECTED">Rejected</option>
                            <option value="HIRED">Hired</option>
                        </select>
                    </div>
                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.appsList}>
                        {filteredJobs.map((singleJob) => (
                            <AppCards key={singleJob.id} job={singleJob}/>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </>
    )
}
export default dashboard