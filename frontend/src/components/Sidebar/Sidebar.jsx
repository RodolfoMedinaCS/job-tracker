import styles from "./Sidebar.module.css"
import {Link, useNavigate} from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import logo from '../../assets/images/801639-200.png'
import { NavLink } from "react-router-dom";







function Sidebar(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <>
            <div className={styles.sidebar}>


                <div className={styles.logo}>
                    <IoDocumentText className={styles.logoIcon}></IoDocumentText>
                    <label className={styles.logoIcon}> JobApps</label>
                </div>

                <div className={styles.menu}>
                    <p className={styles.sectionName}>MENU</p>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.activeLink : ""}>
                        <span className={styles.menuItems}>
                            <MdDashboard className={styles.menuIcon}></MdDashboard>
                            <span>Dashboard</span>
                        </span>
                    </NavLink>
                    <NavLink to={"/applications"} className={({ isActive }) => isActive ? styles.activeLink : ""}>
                        <span className={styles.menuItems}>
                            <IoDocumentText className={styles.menuIcon}></IoDocumentText>
                            <span>Applications</span>
                        </span>
                    </NavLink>
                </div>

                <div className={styles.accountMenu}>
                    <p className={styles.sectionName}>GENERAL</p>
                    <NavLink to={"/Account"} className={({ isActive }) => isActive ? styles.activeLink : "" }>
                        <span className={styles.menuItems}>
                            <MdAccountCircle className={styles.menuIcon}></MdAccountCircle>
                            <span>Account</span>
                        </span>
                    </NavLink>
                    <Link onClick={handleLogout} href="#">
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