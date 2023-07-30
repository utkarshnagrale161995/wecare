import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
import "./Home.css"

export default function Home()
{
    const navigate=useNavigate();



    function joinPatient(event){
        event.preventDefault();
        navigate("/joinPatient")

    }

    function loginPatient(event){
        event.preventDefault();
        navigate("/loginPatient")

    }

    function joinDoctor(event){
        event.preventDefault();
        navigate("/joinDoctor")

    }

    function loginDoctor(event){
        event.preventDefault();
        navigate("/loginDoctor")
    }


    return(
        <>
        <navbar className="navbar bg-dark">
            <a className="navbar-brand text-light mx-3" href="/">WeCare</a>
            <ul className="navbar-nav text-light mx-3"><li className="nav-item">Call Us: 7028288465</li></ul>
        </navbar>
        <div className={"display-4"}><p style={{"text-align":"center"}}><strong>We are the heart of appropriate care</strong></p></div>
        <div className="row">
            <div className="col-md-3 offset-3 mt-5" >
                <div className="card-body bg-dark">
                    <div style={{"padding":"20px"}}>
                        <div>
                        <img className="card-img-top ima" src="doctor.jpg" alt="Doctor"/>
                        </div>
                   
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-primary" onClick={loginDoctor}>Login as a Doctor</button>
                        <button type="button" className="btn btn-primary" onClick={joinDoctor}>Join as a Doctor</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mt-5" >
                <div className="card-body bg-dark">
                <div style={{"padding":"20px"}}>
                    <div>
                    <img className="card-img-top ima" src="patient.jpg" alt="patient"/>
                    </div>
                    
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-primary" onClick={loginPatient}>Login as a Patient</button>
                        <button type="button" className="btn btn-primary" onClick={joinPatient}>Join as a Patient</button>
                    </div>
                </div>
            </div>
        </div>

        <footer>Copyright @ WeCare All rights are reserved</footer>

        </>
    )

}

