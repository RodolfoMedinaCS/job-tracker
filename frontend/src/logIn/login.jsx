import styles from "./login.module.css"
import {Link, useNavigate} from "react-router-dom";
import loginImage from "../../svgImages/file.svg"
import {useState} from "react";

function login(){
    const navigate = useNavigate();

    let initialData = {
        email : "",
        password: "",
    };

    const [loginData, setLoginData] = useState(initialData);

    async function handleLogin(){
        if(!loginData.email || !loginData.password){
            alert("Please fill out all fields!");
            return;
        }
        await callLogging();
    }

    async function callLogging(){
        try{
            const response =
                await fetch("http://localhost:8080/api/v1/auth/authenticate", {
                    method : "POST",
                    headers : {"Content-Type": "application/json"},
                    body: JSON.stringify(loginData)
            });

            if(!response.ok){
                throw new Error("failed to Login!");
            }
            const data = await response.json();
            localStorage.setItem("token", data.token);
            navigate("/dashboard");

        }catch(error){
            throw new Error(error);
        }
    }


    return(
        <>
            <div className={styles.flexContiner}>
                <div className={styles.loginBox}>
                    <div className={styles.loginInfo}>

                        <div>
                            <div>
                                <label>JobApps</label>
                            </div>
                        </div>

                        <header className={styles.loginHeader}>
                            <span>Hello,</span>
                            <span>Welcome Back</span>
                            <p>Hey, welcome back to your special place</p>
                        </header>

                        <div className={styles.userInput}>

                            <div className={styles.email}>
                                <input value={loginData.email} type="email" placeholder="Email" onChange={(e) =>
                                setLoginData({...loginData, email: e.target.value})} />
                            </div>

                            <div className={styles.password}>
                                <input value={loginData.password} type="password" placeholder="Passwrod" onChange={(e) =>
                                setLoginData({...loginData, password: e.target.value})} />
                            </div>

                            <div className={styles.radioBttn}>
                                <input type="checkbox" id="rememberMe"/>
                                <label htmlFor="rememberMe" >Remember Me</label>
                            </div>
                        </div>



                        <div className={styles.bttns}>
                            <Link to={"/register"}>
                                <button>Create Account</button>
                            </Link>
                            <button onClick={handleLogin}>Log In</button>
                        </div>
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <img src={loginImage} alt="login illustration"/>
                </div>
            </div>
        </>
    )
}
export default login