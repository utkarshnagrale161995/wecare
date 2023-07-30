import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


export default function DoctorGroup(){
    const receivedId = useSelector(state=>state.sendDoctorIdreducer.doctorid)
    console.log(receivedId,'receivedId')
    const navigate=useNavigate();
    function handleClick(){
        navigate("/loginDoctor")
    }

    return(
        <>
        <header className={"bg-black text-light"}>
                    <h2>WeCare
                    <span className="call">Call Us: 7028288465</span>
                    </h2>
        </header>
        <div className="container">
            <br></br>
            <br></br>
            <div className="text-center">
              <img src="doctor.jpg" alt="doctor" width="200px" height="200px"/>
            </div>
            <div className="text-center">
                <h4>You are a Doctor now !</h4>
            </div>
            <div className="text-center">
               <h5>Your Doctor Id is {receivedId} </h5>
            </div>
            <div className="text-center">
                <button className="btn btn-success" onClick={(event)=>{handleClick(event)}}>Login Now</button>
            </div>
        </div>

        <footer>Copyright @ WeCare All rights are reserved</footer>
        </>
    )

}

