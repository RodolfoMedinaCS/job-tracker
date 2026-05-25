import styles from "./Account.module.css"

function Account(){


    return (
        <>
            <div className={styles.accountPage}>
                <div className={styles.flexContainer}>
                    <div className={styles.header}>
                        <p className={styles.headerName}>Account</p>
                        <p>Manage your account and profile settings</p>
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
                            <input className={styles.detInput} type="password"/>
                        </div>
                        <div className={styles.proMidBot}>
                            <div className={styles.subTop}>
                                <label className={styles.detLabel}>New Password</label>
                                <input className={styles.detInput} type="password"/>
                            </div>
                            <div className={styles.subBot}>
                                <label className={styles.detLabel}>Confirm new password</label>
                                <input className={styles.detInput} type="password"/>
                            </div>
                        </div>

                        <hr/>
                        <div className={styles.profBot}>
                            <button className={styles.detailBttn}>Update password</button>
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