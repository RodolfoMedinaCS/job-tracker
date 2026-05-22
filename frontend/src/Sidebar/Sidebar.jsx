import styles from "./Sidebar.module.css"
import {Link} from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import logo from '../assets/images/801639-200.png'






function Sidebar(){
    return(
        <>
            <div className={styles.sidebar}>


                <div className={styles.logo}>
                    <label className={styles.logoIcon}><img src={logo} alt="logo"></img> JobApps</label>
                </div>

                <div className={styles.menu}>
                    <p className={styles.sectionName}>MENU</p>
                    <Link to={"/dashboard"}>
                        <span className={styles.menuItems}>
                            <MdDashboard className={styles.menuIcon}></MdDashboard>
                            <span>Dashboard</span>
                        </span>
                    </Link>
                    <Link to={"/applications"}>
                        <span className={styles.menuItems}>
                            <IoDocumentText className={styles.menuIcon}></IoDocumentText>
                            <span>Applications</span>
                        </span>
                    </Link>
                </div>

                <div className={styles.accountMenu}>
                    <p className={styles.sectionName}>GENERAL</p>
                    <Link>
                        <span className={styles.menuItems}>
                            <MdAccountCircle className={styles.menuIcon}></MdAccountCircle>
                            <span>Account</span>
                        </span>
                    </Link>
                    <Link href="#">
                        <span className={styles.menuItems}>
                            <IoLogOut className={styles.menuIcon}></IoLogOut>
                            <span>Log out</span>
                        </span>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Sidebar