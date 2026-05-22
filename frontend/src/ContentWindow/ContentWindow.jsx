import styles from './ContentWindow.module.css'
import Sidebar from "../Sidebar/Sidebar.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import {NavBarProvider} from "../Context/NavBarContext.jsx";
import {Outlet} from "react-router-dom";

function ContentWindow(){

    return(
        <>
            <NavBarProvider>
                <div className={styles.dashboard}>
                    <Sidebar/>
                    <div className={styles.rightContainer}>
                        <div class={styles.navContainer}>
                            <NavBar></NavBar>
                        </div>
                        <div className={styles.dashboardContent}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </NavBarProvider>
        </>
    )
}
export default ContentWindow