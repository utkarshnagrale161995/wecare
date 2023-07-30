import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
 function DeleteAppointment(){

    const navigate=useNavigate();

    function handleBack(event){
        event.preventDefault();
        navigate('/patientHome');
    }

    return(
        <>
        <div className="container-fluid" >
            <div className="row ">
                  <div className="col-md-6 offset-3 mt-5">
                  <div className="card">
                            <div className="card-header">Appointment Deleted Successfully</div>
                           <div className="card-body">
                              <button onClick={(event)=>handleBack(event)} className="btn btn-secondary">Go Back!</button>
                            </div>
                   </div>
                </div>
            </div>
        </div>
        </>
    )

 }
 export default DeleteAppointment;
