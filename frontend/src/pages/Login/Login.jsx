import styles from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    async function handleLogin() {
        if (!loginData.email || !loginData.password) {
            alert("Please fill out all fields!");
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/authenticate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            });
            if (!response.ok) throw new Error("failed to Login!");
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
                    <h2>Welcome back</h2>
                    <p>Sign in to your account to continue</p>
                </div>

                <div className={styles.fields}>
                    <div className={styles.field}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                    </div>
                    <div className={styles.checkboxRow}>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>

                <button className={styles.btnPrimary} onClick={handleLogin}>
                    Log in
                </button>

                <div className={styles.divider}>
                    <div className={styles.dividerLine} />
                    <span className={styles.dividerText}>don't have an account?</span>
                    <div className={styles.dividerLine} />
                </div>

                <Link to="/register">
                    <button className={styles.btnSecondary}>Create account</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;