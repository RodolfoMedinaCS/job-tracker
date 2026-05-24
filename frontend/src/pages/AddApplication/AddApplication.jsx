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
            companyWebsite: existingApp.companyWebsite || "",
            location: existingApp.location || "",
            workType: existingApp.workType || "",

            jobTitle: existingApp.jobTitle || "",
            jobType: existingApp.jobType || "",
            jobUrl: existingApp.jobUrl || "",

            dateApplied: existingApp.dateApplied || "",
            status: existingApp.status || "",
            salaryMin: existingApp.salaryMin || "",
            salaryMax: existingApp.salaryMax || "",

            recruiterName: existingApp.recruiterName || "",
            recruiterEmail: existingApp.recruiterEmail || "",

            notes: existingApp.notes || "",

            color: existingApp.color || ""
        }
    }else{
        initialData ={
            company: "",
            companyWebsite: "",
            location: "",
            workType: "",

            jobTitle: "",
            jobType: "",
            jobUrl: "",

            dateApplied: "",
            status: "",
            salaryMin: "",
            salaryMax: "",

            recruiterName: "",
            recruiterEmail: "",

            notes: "",

            color: ""
        }
    }

    const [formData, setFormData] = useState(initialData)

    async function handleSubmit(){
        if(!formData.company || !formData.jobTitle || !formData.status || !formData.dateApplied ){
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
        navigate('/applications');
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
                                <input required className={styles.inputField} placeholder="e.g. Google" type="text" value={formData.company} onChange={(e) =>
                                    setFormData({...formData, company: e.target.value})} />
                            </div>
                            <div className={styles.companyWebsite}>
                                <label>Company Website</label>
                                <input value={formData.companyWebsite} className={styles.inputField}  type="text" placeholder="careers.google.com" onChange={(e) =>
                                setFormData({...formData, companyWebsite : e.target.value})}/>
                            </div>
                        </div>

                        <div className={styles.companyBot}>
                            <div className={styles.companyLocation}>
                                <label>Location</label>
                                <input value={formData.location} className={styles.inputField}  type="text" placeholder="Mountain View, CA" onChange={(e) =>
                                setFormData({...formData, location: e.target.value})}/>
                            </div>
                            <div className={styles.companyWorkType}>
                                <label>Work Type</label>
                                <select value={formData.workType} className={styles.selectField} onChange={(e) =>
                                setFormData({...formData, workType: e.target.value})}>
                                    <option>Select Work Type</option>
                                    <option value="REMOTE">Remote</option>
                                    <option value="HYBRID">Hybrid</option>
                                    <option value="ON_SITE">On Site</option>
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
                                <input required placeholder="Software Engineer Intern" className={styles.inputField} type="text" value={formData.jobTitle} onChange={(e) =>
                                    setFormData({...formData, jobTitle: e.target.value })} />
                            </div>
                            <div className={styles.jobType}>
                                <label>Job Type</label>
                                <select value={formData.jobType} className={styles.selectField} onChange={(e) =>
                                setFormData({...formData, jobType: e.target.value})}>
                                    <option>Select Job Type</option>
                                    <option value="FULL_TIME">Full Time </option>
                                    <option value="PART_TIME">Part Time</option>
                                    <option value="INTERNSHIP">Internship</option>
                                    <option value="CONTRACT">Contract</option>
                                    <option value="FREELANCE">Freelance</option>
                                    <option value="APPRENTICESHIP">Apprenticeship</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.posBot}>
                            <div className={styles.posUrl}>
                                <label>Job posting url</label>
                                <input value={formData.jobUrl} placeholder="https://jobs.lever.co/..." className={styles.inputFieldSpecial}  type="text" onChange={(e) =>
                                setFormData({...formData, jobUrl: e.target.value})}/>
                            </div>
                        </div>
                    </div>

                    {/*Application Details Block*/}
                    <div className={styles.appDetSection}>
                        <label><FaLocationArrow></FaLocationArrow> APPLICATION DETAILS</label>
                        <div className={styles.appDevTop}>
                            <div className={styles.dateApplied}>
                                <label>Date Applied</label>
                                <input required className={styles.inputField}  type="date" value={formData.dateApplied} onChange={(e) =>
                                    setFormData({...formData, dateApplied: e.target.value})} />
                            </div>
                            <div className={styles.status}>
                                <label>Job Status: </label>
                                <select required className={styles.selectField} value={formData.status} onChange={(e) =>
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
                                <input className={styles.inputField}  type="text" placeholder="$ 120,000" onChange={(e) =>
                                setFormData({...formData, salaryMin: e.target.value})}/>
                            </div>
                            <div className={styles.salMax}>
                                <label>Salary (max)</label>
                                <input className={styles.inputField}  type="text" placeholder="$ 150,000" onChange={(e) =>
                                setFormData({...formData, salaryMax: e.target.value})}/>
                            </div>
                        </div>
                    </div>

                    {/*Recruiter Contact block*/}
                    <div className={styles.recConSection}>
                        <label><FaRegUser></FaRegUser> Recruiter Contact</label>
                        <div className={styles.recDet}>
                            <div className={styles.recName}>
                                <label>Recruiter Name</label>
                                <input className={styles.inputField}  type="text" placeholder="Jane Doe" onChange={(e) =>
                                setFormData({...formData, recruiterName: e.target.value})}/>
                            </div>
                            <div className={styles.recEmail}>
                                <label>Recruiter Email</label>
                                <input  className={styles.inputField} type="email" placeholder="jane@google.com" onChange={(e) =>
                                setFormData({...formData, recruiterEmail: e.target.value})}/>
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

                    {/* Color Picker*/}
                    <div className={styles.colorBlock}>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-coral)',
                            outline: formData.color === 'var(--card-coral)' ? '2px solid black' : 'none',
                            outlineOffset: '2px'}} onClick={() =>
                        setFormData({...formData, color: 'var(--card-coral)'})}>

                        </div>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-peach)',
                            outline: formData.color === 'var(--card-peach)' ? '2px solid black' : 'none',
                            outlineOffset: '2px'}} onClick={() =>
                        setFormData({...formData, color: 'var(--card-peach)'})}>

                        </div>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-lemon)',
                        outline: formData.color === 'var(--card-lemon)' ? '2px solid black' : 'none',
                        outlineOffset: '2px'}} onClick={() =>
                            setFormData({...formData, color: 'var(--card-lemon)'})}>

                        </div>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-lavender)',
                            outline: formData.color === 'var(--card-lavender)' ? '2px solid black' : 'none',
                            outlineOffset: '2px'}} onClick={() =>
                            setFormData({...formData, color: 'var(--card-lavender)'})}>

                        </div>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-mint)',
                            outline: formData.color === 'var(--card-mint)' ? '2px solid black' : 'none',
                            outlineOffset: '2px'}} onClick={() =>
                            setFormData({...formData, color: 'var(--card-mint)'})}>

                        </div>
                        <div className={styles.color} style={{backgroundColor: 'var(--card-sky)',
                            outline: formData.color === 'var(--card-sky)' ? '2px solid black' : 'none',
                            outlineOffset: '2px'}} onClick={() =>
                            setFormData({...formData, color: 'var(--card-sky)'})}>

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