import styles from './Application.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../../components/NavBar/NavBar.jsx";

function ApplicationDetails(){
    const {id} = useParams();
    const[job, setJob] = useState([]);
    const navigate = useNavigate();
    const[showConfirm, setShowConfirm] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications/${id}`,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`}
        })
            .then(res => res.json())
            .then(data => setJob(data));
    },[id])

    function goBack(){
        navigate('/dashboard');
    }

    function handleEdit(){
        navigate('/add-application', {state : job})
    }

    function handleDelete() {
        setShowConfirm(true);
    }

    async function confirmDelete(){
        try{
            const response =
                await fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications/${id}`,{
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                });

            if(!response.ok){
                throw new Error("Delete Failed");
            }
            navigate('/dashboard');
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            {showConfirm && (
                <div className={styles.modal}>
                    <div className={styles.modalBox}>
                        <p>Are you sure?</p>
                        <div className={styles.bttns}>
                            <button onClick={confirmDelete}>Yes</button>
                            <button onClick={() => setShowConfirm(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}


            <div className={styles.flexContainer}>


            </div>
        </>
    )
}
export default ApplicationDetails