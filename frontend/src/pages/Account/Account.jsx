import styles from "./Account.module.css"
import {useEffect, useState} from "react";
import {nashorn} from "globals";
import {useNavigate} from "react-router-dom";

function Account(){
    const token = localStorage.getItem("token");
    const [passwordError, setPasswordError] = useState("");
    const [noMatch, setNoMatch] = useState("");
    const [detailsChanged, setDetailsChanged] = useState("");
    const [userProfile, setUserProfile] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProfile(){
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/profile`,{
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            const data = await response.json();
            setUserProfile(data);
        }
        fetchProfile();
    },[]);

    const passwordCheck = {
        newPassword : "",
        currentPassword : "",
        confirmPassword: ""
    }

    const changeNameAndEmail = {
        name : "",
        email: ""
    }

    const[changeDetails, setDetails] = useState(changeNameAndEmail);
    const[passwordChange, setPasswordChange] = useState(passwordCheck)

    async function handlePassword(){
        setNoMatch("");
        setPasswordError("");
        if(passwordChange.newPassword !== passwordChange.confirmPassword){
            setNoMatch("Password doesn't match");
            return;
        }
        await changePassword();
    }
    async function changePassword(){

        try{

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/password`,{
                method : "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify({
                    currentPassword: passwordChange.currentPassword,
                    newPassword: passwordChange.newPassword
                })
            })

            if(!response.ok){
                setPasswordError("Current password is incorrect");
                return;
            }

            alert("Password Updated");
        }catch(error){
            console.log(error);

        }

    }

    async function accountDeletion(){
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/deleteAccount`,{
                method: "DELETE",
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            })

            if(!response.ok){
                alert("Failed to delete account!")
            }

            localStorage.removeItem("token");
            navigate("/login");

        }catch(error){
            console.log(error)
        }

    }

    async function changeEmailOrName(){
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/details`,{
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body: JSON.stringify(changeDetails)
            })

            if(!response.ok){
                throw new Error("Failed!");
            }
            setDetailsChanged("details successfully changed!");

        }catch(error){
            console.log(error);
        }

    }

    return (
        <>
            {confirm && (
                <div className={styles.modal}>
                    <div className={styles.modalBox}>
                        <h3 style={{color: "red"}}>Are you sure?</h3>
                        <p>This action cannot be undone</p>
                        <div className={styles.modalActions}>
                            <button onClick={accountDeletion} className={styles.btnYes}>Confirm</button>
                            <button onClick={() => setConfirm(false)} className={styles.btnCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.accountPage}>
                <div className={styles.flexContainer}>
                    <div className={styles.header}>
                        <p className={styles.headerName}>Account</p>
                        <p className={styles.subHeader}>Manage your account and profile settings</p>
                    </div>

                    <div className={styles.detailContainer}>
                        <div className={styles.profileHeader}>
                            <p className={styles.sectionTitle}>Profile</p>
                            <p className={styles.subSectionTitle}>Update your name, email and profile photo</p>
                        </div>
                        <hr/>
                        <div className={styles.profMiddle}>
                            <div className={styles.proMidTop}>
                                <div className={styles.picture}>

                                </div>
                                <div className={styles.changePhotoContainer}>
                                    <p>{userProfile?.name}</p>
                                    <button className={styles.detailBttn}>Change photo</button>
                                </div>
                            </div>
                            <div className={styles.proMidBot}>
                                <div className={styles.subTop}>
                                    <label className={styles.detLabel}>Full Name</label>
                                    <input className={styles.detInput} type="text" placeholder="Jane Doe" onChange={(e) =>
                                    setDetails({...changeDetails, name: e.target.value})}/>
                                </div>
                                <div className={styles.subBot}>
                                    <label className={styles.detLabel}>Email</label>
                                    <input className={styles.detInput} type="email" placeholder="Jane@gmail.com" onChange={(e) =>
                                    setDetails({...changeDetails, email: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.profBot}>
                            {detailsChanged && <p className={styles.success}>Details saved successfully!</p>}
                            <button className={styles.detailBttn} onClick={changeEmailOrName}>Save Changes</button>
                        </div>
                    </div>


                    <div className={styles.detailContainer}>
                        <div className={styles.profileHeader}>
                            <p className={styles.sectionTitle}>Password</p>
                            <p className={styles.subSectionTitle}>Must be at least 8 characters</p>
                            <hr/>
                        </div>
                        <div className={styles.currentPassword}>
                            <label className={styles.detLabel}>Current Password</label>
                            <input placeholder="••••••••" className={styles.detInput} type="password" onChange={(e) =>
                            setPasswordChange({...passwordChange, currentPassword: e.target.value})}/>
                            {passwordError && <p className={styles.errorWarning}>Current password is incorrect</p>}
                        </div>
                        <div className={styles.proMidBot}>
                            <div className={styles.subTop}>
                                <label className={styles.detLabel}>New Password</label>
                                <input placeholder="••••••••" className={styles.detInput} type="password" onChange={(e) =>
                                setPasswordChange({...passwordChange,newPassword : e.target.value})}/>
                                {noMatch && <p className={styles.errorWarning}>Passwords don't match</p>}
                            </div>
                            <div className={styles.subBot}>
                                <label className={styles.detLabel}>Confirm new password</label>
                                <input placeholder="••••••••" className={styles.detInput} type="password" onChange={(e) =>
                                setPasswordChange({...passwordChange,confirmPassword: e.target.value})}/>
                                {noMatch && <p className={styles.errorWarning}>Passwords don't match</p>}
                            </div>
                        </div>

                        <hr/>
                        <div className={styles.profBot}>
                            <button onClick={handlePassword} className={styles.detailBttn}>Update password</button>
                        </div>
                    </div>

                    <div className={styles.delContainer}>
                        <div className={styles.delTop}>
                            <p className={styles.sectionTitle}>Danger zone</p>
                            <p className={styles.subSectionTitle}>These actions are permanent and cannot be undone</p>
                        </div>
                        <div className={styles.delBot}>
                            <p className={styles.sectionTitle}>Delete account</p>
                            <div className={styles.subDelBot}>
                                <p className={styles.subSectionTitle}>All your applications and data will be permanently deleted</p>
                                <button onClick={() => {setConfirm(true)}} className={styles.detailBttn}>Delete account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Account