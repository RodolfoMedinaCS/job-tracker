import styles from "./Account.module.css"
import {useState} from "react";

function Account(){
    const token = localStorage.getItem("token");

    const passwordCheck = {
        newPassword : "",
        currentPassword : "",
        confirmPassword: ""
    }

    const[passwordChange, setPasswordChange] = useState(passwordCheck)

    async function handlePassword(){
        if(passwordChange.newPassword !== passwordChange.confirmPassword){
            alert("Passwords do not match");
            return;
        }
        await changePassword();
    }
    async function changePassword(){

        try{

            const response = await fetch("http://localhost:8080/api/v1/users/password",{
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
                throw new Error("Failed to update password");
            }

            alert("Password Updated");
        }catch(error){
            console.log(error);

        }

    }

    return (
        <>
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
                                    <p>Rodolfo</p>
                                    <button className={styles.detailBttn}>Change photo</button>
                                </div>
                            </div>
                            <div className={styles.proMidBot}>
                                <div className={styles.subTop}>
                                    <label className={styles.detLabel}>Full Name</label>
                                    <input className={styles.detInput} type="text" placeholder="Jane Doe"/>
                                </div>
                                <div className={styles.subBot}>
                                    <label className={styles.detLabel}>Email</label>
                                    <input className={styles.detInput} type="email" placeholder="Jane@gmail.com"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.profBot}>
                            <button className={styles.detailBttn}>Save Changes</button>
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
                        </div>
                        <div className={styles.proMidBot}>
                            <div className={styles.subTop}>
                                <label className={styles.detLabel}>New Password</label>
                                <input placeholder="••••••••" className={styles.detInput} type="password" onChange={(e) =>
                                setPasswordChange({...passwordChange,newPassword : e.target.value})}/>
                            </div>
                            <div className={styles.subBot}>
                                <label className={styles.detLabel}>Confirm new password</label>
                                <input placeholder="••••••••" className={styles.detInput} type="password" onChange={(e) =>
                                setPasswordChange({...passwordChange,confirmPassword: e.target.value})}/>
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
                                <button className={styles.detailBttn}>Delete account</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Account