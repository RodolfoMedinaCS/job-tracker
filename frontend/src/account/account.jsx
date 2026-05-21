import styles from "./account.module.css"
import Navbar from "../NavBar/NavBar.jsx";
import {Link} from "react-router-dom";

function account(){

    return(
        <>

            <Navbar/>
            <div className={styles.flexContainer}>
                <div className={styles.header}>
                    <h2>Account</h2>
                </div>
                <div className={styles.accountInfo}>
                    <label>Name: </label>
                    <label>Email: </label>

                    <Link to={"/login"}>
                        <button className={styles.bttn}>Logout</button>
                    </Link>
                </div>

                <footer>
                    <ul>
                        <li>contact Us: JobApp@test.com</li>
                        <li>Phone: 323-841-6627</li>
                        <li>About</li>
                    </ul>
                </footer>
            </div>


        </>
    )
}

export default account