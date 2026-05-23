import {Link} from "react-router-dom";
import styles from "./NavBar.module.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavBar } from "../../context/NavBarContext.jsx";


function NavBar() {
    const {navConfig, filter, setFilter} = useNavBar();

    return (
        <>
            <nav className={styles.navbar}>


                {navConfig.showSearch && navConfig.showFilter && (
                    <div className={styles.flexContainer}>

                        <div className={styles.searchBar}>
                            <FaMagnifyingGlass />
                            <input type="text" placeholder="Search Application"/>
                        </div>

                        <div className={styles.filters}>
                            <label className={styles.inputLabel}>Status Filters</label>
                            <select value={filter} onChange={(e) =>
                                setFilter(e.target.value)}>
                                <option value="ALL">ALL</option>
                                <option value="SUBMITTED">Submitted</option>
                                <option value="UNDER_REVIEW">Under Review</option>
                                <option value="INTERVIEW_SCHEDULED">Interview Scheduled</option>
                                <option value="OFFER_EXTENDED">Offer Extended</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="HIRED">Hired</option>
                            </select>
                        </div>
                    </div>
                )}

                <div className={styles.appBttns}>
                    <Link to={"/add-application"}>
                        <label>Add Application +</label>
                    </Link>
                </div>

            </nav>

        </>
    );
}
export default NavBar