import Navbar from "../NavBar/NavBar.jsx";
import styles from "./addApplication.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";


function AddApplication(){

    const navigate = useNavigate();
    const location = useLocation();
    const existingApp = location.state;
    const[showConfirm, setShowConfirm] = useState(false);
    const token = localStorage.getItem("token");

    let initialData;

    if(existingApp){
        initialData = {
            company: existingApp.company || "",
            jobTitle: existingApp.jobTitle || "",
            status: existingApp.status || "",
            dateApplied: existingApp.dateApplied || "",
            notes: existingApp.notes || ""
        }
    }else{
        initialData ={
            company: "",
            jobTitle: "",
            status: "",
            dateApplied: "",
            notes: ""
        }
    }

    const [formData, setFormData] = useState(initialData)

    async function handleSubmit(){
        if(!formData.company || !formData.jobTitle || !formData.status || !formData.dateApplied
        || !formData.notes){
            alert("please fill out all fields!");
            return;
        }
        await handleUpdate();
    }

    async function handleUpdate(){

        if(existingApp){
            try{
                const response =
                    await fetch(`http://localhost:8080/api/v1/applications/${existingApp.id}`,{
                        method: "PATCH",
                        headers: {
                            "Content-Type" : "application/json",
                            "Authorization" : `Bearer ${token}`},
                        body: JSON.stringify(formData),
                    });

                if(!response.ok){
                    throw new Error("Update Failed!");
                }
                setShowConfirm(true);
            }catch(error){
                console.log(error);
            }
        }else{
            try{
                const response =
                    await fetch("http://localhost:8080/api/v1/applications",{
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json",
                            "Authorization" : `Bearer ${token}`},
                        body: JSON.stringify(formData),
                    });

                if(!response.ok){
                    throw new Error("Save Failed!");
                }
                setShowConfirm(true);
            }catch(error){
                console.log(error);
            }

        }
    }

    function backToDash(){
        navigate('/dashboard');
    }



    return(
        <>
            {showConfirm && (
                <div className={styles.modal}>
                    <div className={styles.modalBox}>
                        <p>{existingApp ? "Application Updated!" : "Application Saved!"}</p>
                        <div className={styles.bttns}>
                            <button onClick={() => {
                                setShowConfirm(false); backToDash()
                            }}>Ok!</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.pageWrapper}>
                <Navbar/>
                <div className={styles.appOptions}>
                    <button onClick={backToDash} >Cancel</button>
                    <button onClick={handleSubmit}>Add + </button>
                </div>

                <div className={styles.contentBody}>
                    <div className={styles.formGroup}>
                        <div className={styles.companyName}>
                            <label>Company: </label>
                            <input type="text" value={formData.company} onChange={(e) =>
                            setFormData({...formData, company: e.target.value})} />
                        </div>

                        <div className={styles.titleName}>
                            <label>Job Title: </label>
                            <input  type="text" value={formData.jobTitle} onChange={(e) =>
                            setFormData({...formData, jobTitle: e.target.value })} />
                        </div>

                        <div className={styles.jobStatus}>
                            <label>Job Status: </label>
                            <select value={formData.status} onChange={(e) =>
                            setFormData({...formData, status: e.target.value})} >
                                <option value="">Select Status</option>
                                <option value="SUBMITTED">Submitted</option>
                                <option value="UNDER_REVIEW">Under Review</option>
                                <option value="INTERVIEW_SCHEDULED">Interview Scheduled</option>
                                <option value="OFFER_EXTENDED">Offer Extended</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="HIRED">Hired</option>
                            </select>
                        </div>

                        <div className={styles.jobNotes}>
                            <label>Job Notes: </label>
                            <textarea value={formData.notes} onChange={(e) =>
                            setFormData({...formData, notes: e.target.value})} >
                            </textarea>
                        </div>

                        <div className={styles.jobDate}>
                            <label>Date Applied: </label>
                            <input type="date" value={formData.dateApplied} onChange={(e) =>
                                setFormData({...formData, dateApplied: e.target.value})} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AddApplication