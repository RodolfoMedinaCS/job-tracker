import styles from "./AddApplication.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";






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

                <div className={styles.formContainer}>

                    {/*Company block*/}
                    <div className={styles.companySection}>
                        <label><FaBuilding/> COMPANY</label>
                        <div className={styles.companyTop}>
                            <div className={styles.companyName}>
                                <label>Company name</label>
                                <input className={styles.inputField} placeholder="e.g. Google" type="text" value={formData.company} onChange={(e) =>
                                    setFormData({...formData, company: e.target.value})} />
                            </div>
                            <div className={styles.companyWebsite}>
                                <label>Company Website</label>
                                <input className={styles.inputField}  type="text" placeholder="careers.google.com"/>
                            </div>
                        </div>

                        <div className={styles.companyBot}>
                            <div className={styles.companyLocation}>
                                <label>Location</label>
                                <input className={styles.inputField}  type="text" placeholder="Mountain View, CA"/>
                            </div>
                            <div className={styles.companyWorkType}>
                                <label>Work Type</label>
                                <select className={styles.selectField} >
                                    <option>remote</option>
                                    <option>in-person</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/*Position Block*/}
                    <div className={styles.positionSection}>
                        <label><BsBriefcaseFill></BsBriefcaseFill> POSITION</label>
                        <div className={styles.posTop}>
                            <div className={styles.jobTitle}>
                                <label>Job Title: </label>
                                <input placeholder="Software Engineer Intern" className={styles.inputField} type="text" value={formData.jobTitle} onChange={(e) =>
                                    setFormData({...formData, jobTitle: e.target.value })} />
                            </div>
                            <div className={styles.jobType}>
                                <label>Job Type</label>
                                <select className={styles.selectField} >
                                    <option>Internship</option>
                                    <option>Senior</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.posBot}>
                            <div className={styles.posUrl}>
                                <label>Job posting url</label>
                                <input placeholder="https://jobs.lever.co/..." className={styles.inputFieldSpecial}  type="text"/>
                            </div>
                        </div>
                    </div>

                    {/*Application Details Block*/}
                    <div className={styles.appDetSection}>
                        <label><FaLocationArrow></FaLocationArrow> APPLICATION DETAILS</label>
                        <div className={styles.appDevTop}>
                            <div className={styles.dateApplied}>
                                <label>Date Applied</label>
                                <input className={styles.inputField}  type="date" value={formData.dateApplied} onChange={(e) =>
                                    setFormData({...formData, dateApplied: e.target.value})} />
                            </div>
                            <div className={styles.status}>
                                <label>Job Status: </label>
                                <select className={styles.selectField} value={formData.status} onChange={(e) =>
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
                        </div>
                        <div className={styles.appDevBot}>
                            <div className={styles.salMin}>
                                <label>Salary (min)</label>
                                <input className={styles.inputField}  type="text" placeholder="$ 120,000"/>
                            </div>
                            <div className={styles.salMax}>
                                <label>Salary (max)</label>
                                <input className={styles.inputField}  type="text" placeholder="$ 150,000"/>
                            </div>
                        </div>
                    </div>

                    {/*Recruiter Contact block*/}
                    <div className={styles.recConSection}>
                        <label><FaRegUser></FaRegUser> Recruiter Contact</label>
                        <div className={styles.recDet}>
                            <div className={styles.recName}>
                                <label>Recruiter Name</label>
                                <input className={styles.inputField}  type="text" placeholder="Jane Doe"/>
                            </div>
                            <div className={styles.recEmail}>
                                <label>Recruiter Email</label>
                                <input  className={styles.inputField} type="email" placeholder="jane@google.com"/>
                            </div>
                        </div>
                    </div>

                    {/* Notes Block */}
                    <div className={styles.notesBlock}>
                        <label><CgNotes></CgNotes> NOTES</label>
                        <div className={styles.notes}>
                            <label>Notes</label>
                            <textarea placeholder="Anything worth remembering — interview prep, who referred you..." className={styles.textAreaSpecial} value={formData.notes} onChange={(e) =>
                                setFormData({...formData, notes: e.target.value})} >
                            </textarea>
                        </div>
                    </div>

                    <div className={styles.appOptions}>
                        <button className={styles.addBttns}  onClick={backToDash} >Cancel</button>
                        <button className={styles.addBttns} onClick={handleSubmit}>Add + </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddApplication