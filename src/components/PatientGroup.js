import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

export default function UserGroup(){
       
    const navigate=useNavigate();
    const receivedId = useSelector(state=>state.sendPatientIdreducer.userid)
    console.log(receivedId,'receivedId')
    function handleClick(){
        navigate("/loginPatient")
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
              <img src="patient.jpg" alt="patient" width="200px" height="200px"/>
            </div>
            <div className="text-center">
                <h4>Account Created Successfully</h4>
            </div>
            <div className="text-center">
               <h5>Your Patient Id is {receivedId}</h5>
            </div>
            <div className="text-center">
                <button className="btn btn-success" onClick={handleClick}>Login Now</button>
            </div>
        </div>

        <footer>Copyright @ WeCare All rights are reserved</footer>
        </>
    )
}
