import styles from "./ApplicationsPage.module.css"
import {useEffect, useState} from "react";
import AppCards from "../appCards/appCards.jsx";
import { useNavBar } from "../Context/NavBarContext.jsx";

function ApplicationsPage(){


    const[jobList, setJobList] = useState([]);
    const token = localStorage.getItem("token");

    const { setNavConfig, filter, setFilter } = useNavBar(); //tune into broadcast

    //when this page mounts tell navbar to show it
    useEffect(() => {
        setNavConfig({
            showSearch: true,
            showFilter: true,
            filter,
            setFilter,
        });

        // When this page unmounts (user navigates away), clean up
        return () => setNavConfig({ showSearch: false, showFilter: false });
    }, [filter]); // re-run when filter changes so NavBar stays in sync


    const filteredJobs = filter === "ALL" ? jobList : jobList.filter(job =>
        job.status === filter);

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
            <div className={styles.appsList}>
                {filteredJobs.map((singleJob) => (
                    <AppCards key={singleJob.id} job={singleJob}/>
                ))}
            </div>
        </>
    )
}
export default ApplicationsPage