import styles from "./Register.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";

function Register() {
    const navigate = useNavigate();
    const [regData, setRegData] = useState({ name: "", email: "", password: "" });

    async function registerAccount() {
        if (!regData.name || !regData.email || !regData.password) {
            alert("Please fill out all fields!");
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(regData),
            });
            if (!response.ok) throw new Error("Register Failed!");
            const data = await response.json();
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.box}>
                <div className={styles.brand}>
                    <div className={styles.brandIcon}>
                        <IoDocumentText />
                    </div>
                    <span className={styles.brandName}>JobApps</span>
                </div>

                <div className={styles.heading}>
                    <h2>Create an account</h2>
                    <p>Start tracking your job search today</p>
                </div>

                <div className={styles.fields}>
                    <div className={styles.field}>
                        <label>Full name</label>
                        <input
                            type="text"
                            placeholder="Jane Doe"
                            value={regData.name}
                            onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={regData.email}
                            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={regData.password}
                            onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        />
                    </div>
                </div>

                <button className={styles.btnPrimary} onClick={registerAccount}>
                    Create account
                </button>

                <div className={styles.divider}>
                    <div className={styles.dividerLine} />
                    <span className={styles.dividerText}>already have an account?</span>
                    <div className={styles.dividerLine} />
                </div>

                <Link to="/login">
                    <button className={styles.btnSecondary}>Log in</button>
                </Link>
            </div>
        </div>
    );
}

export default Register;