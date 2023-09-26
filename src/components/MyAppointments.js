import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import './DoctorHome.css'
import { useSelector,useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import { rescheduleAppointmentId } from "../actions/action";
import { sendPatientLoginId } from "../actions/action";


export default function MyAppointments(){
    
    const [appointmentDetails,setAppointmentDetails]=useState([]);
    const [details,setDetails]=useState([])
    //const [errorMessage,setErrorMessage]=useState("")
    //const [successMessage,setSuccessMessage]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate();

    const patientId = useSelector(state=>state.sendPatientLoginIdreducer.loginid)
    console.log(patientId,'patientId')
   
    useEffect(
        ()=>{
            getPatientDetails()
        },[]
    )
    
    
    function getPatientDetails(){ 
        axios.get("https://wecare2-data.onrender.com/bookings")
        .then((response)=>{
            setDetails(response.data)
            console.log(details)
            console.log(details.length)  
            let schedule=details.filter(function(e){
                return e.patientId===patientId
            })
            console.log(schedule);
            setAppointmentDetails(schedule);
            console.log(appointmentDetails)

        })
        .catch((error)=>{
            console.log(error)
        })
       }
      

    function handleReschedule(event,id){
        event.preventDefault()
        dispatch(rescheduleAppointmentId(id))
        navigate('/rescheduleAppointment')
    }
    function handleDelete(event,id){
        event.preventDefault();
        axios.delete("https://wecare2-data.onrender.com/bookings/"+id)
        .then((response)=>{
           
            /*setSuccessMessage("Deleted Successfully")
            let detailscopy=[...details];
            detailscopy=detailscopy.filter((e)=>{return e.userId===userId})
            setAppointmentDetails(detailscopy)
            console.log(appointmentDetails)
            alert("Deleted Successfully")
            */
           console.log(response);
           navigate('/deleteAppointment')
        })
        .catch((error)=>{
            console.log(error)
            //setErrorMessage("Some thing went wrong!")
        })
    }

    function handleLogout(event){
        event.preventDefault();
        dispatch(sendPatientLoginId(0))
        navigate('/')
       }

    return(
        <>
         
                   
                    <div className="navbar bg-dark navbar-dark navbar-expand-sm">
                    <ul className="navbar-nav">

                       <li className="nav-item"><Link className="nav-link" to='/home'>We Care</Link></li>
                       <span className="head"></span>


                                <span className='head1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68   10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg></span>
                       <li className="nav-item"><Link className="nav-link" to='/viewPatientProfile'>View Profile</Link></li>

                            <span className="head1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg></span>
                       <li className="nav-item"><Link className="nav-link">Call Us: 7028288465</Link></li>


                           <span className="head1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                           <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                           </svg></span>
                       <li className="nav-item"><Link className="nav-link" onClick={(event)=>{handleLogout(event)}}>Logout</Link></li>
                    </ul>
                    </div>
                  <button className="btn btn-secondary" onClick={(event)=>getPatientDetails(event)}>Show Appointments</button>
                  &nbsp;&nbsp;<span>Press Button See Appointments </span>
                  
                <br></br>
                <br></br>
                {(appointmentDetails.length!==0) ?
                 <div>
                    {
                    appointmentDetails.map((detail) => { 
                     return (
                          <div className="card" > 
                                  <div className="card-header">Appointment Date: {detail.appointmentDate}</div> 
                                  <div className="card-body"> 
                                        <p>Slot: {detail.slot}</p>
                                         <p>Booking Id: {detail.id}</p> 
                                         <p>Doctor Id: {detail.doctorId}</p> 
                                         <p>Patiend Id: {detail.patientId}</p>
                                         <button className="btn btn-secondary" onClick={(event)=>{handleReschedule(event,detail.id)}}>Reschedule Appointment</button> 
                                         <button className="btn btn-secondary" onClick={(event)=>{handleDelete(event,detail.id)}}>Cancel Appointment</button> 
                                  </div> 
                          </div> 
                         ); 
                         })
                        }
                     </div>:<div className="noSchedule"><p>No Appointments </p></div>}                                
         </>
    )
}
