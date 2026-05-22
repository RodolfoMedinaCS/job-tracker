import styles from "./Register.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function Register(){
    const navigate = useNavigate();

    let initialData = {
        name: "",
        email: "",
        password: "",
    }

    const [regData, setRegData] = useState(initialData);

    async function registerAccount(){
        if(!regData.name || !regData.email || !regData.password){
            alert("Please fill out all fields!")
            return;
        }
        await callRegister()
    }

    async function callRegister(){
        try{
            const response =
                await fetch("http://localhost:8080/api/v1/auth/register",{
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(regData),
                });

            if(!response.ok){
               throw new Error("Register Failed!");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            navigate("/dashboard");

        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
            <div className={styles.flexContainer}>
                <div className={styles.loginBox}>
                    <div className={styles.loginInfo}>

                        <div>
                            <div>
                                <label>JobApps</label>
                            </div>
                        </div>

                        <header className={styles.loginHeader}>
                            <span>Hello,</span>
                            <span>Welcome to JobApps</span>
                            <p>I hope you hear back from all your apps!</p>
                        </header>

                        <div className={styles.userInput}>

                            <div className={styles.getName}>
                                <input value={regData.name} type="text" placeholder="Name" onChange={(e) =>
                                    setRegData({...regData, name : e.target.value})} />
                            </div>

                            <div className={styles.email}>
                                <input value={regData.email} type="email" placeholder="Email" onChange={(e) =>
                                setRegData({...regData, email : e.target.value})} />
                            </div>

                            <div className={styles.password}>
                                <input value={regData.password} type="password" placeholder="Password" onChange={(e) =>
                                setRegData({...regData, password: e.target.value})} />
                            </div>

                            <div className={styles.radioBttn}>
                                <input type="checkbox" id="rememberMe"/>
                                <label htmlFor="rememberMe" >Remember Me</label>
                            </div>
                        </div>



                        <div className={styles.bttns}>
                            <button onClick={registerAccount}>Create Account</button>

                            <Link to={"/login"}>
                                <button>Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register