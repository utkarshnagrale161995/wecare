import React, {useState} from "react";
import {useDispatch} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./JoinDoctor.css";
import { useNavigate } from "react-router-dom";
import { sendDoctorId } from '../actions/action';

export default function JoinDoctor(){
    const navigate=useNavigate();
    const dispatch = useDispatch()

    const[state,setState]=useState({
        name:"",
        password:"",
        dateOfBirth:"",
        gender:"",
        mobileNo:"",
        speciality:""
    })

    const [errors,setErrors]=useState(
        {
           name:"",
           password:"",
           dateOfBirth:"",
           gender:"",
           mobileNo:"",
           speciality:"" 
        }
    )

    const [valid,setValid]=useState(false);
    const [mandatory,setMandatory]=useState(true);
    const [successMessage,setSuccessMessage]=useState("");
    const [errorMessage,setErrorMessage]=useState("")
   

    function handleClick(event){
        event.preventDefault();
        axios.post("https://wecare2-data.onrender.com/doctors",state)
        .then((response)=>{
            console.log(response.data)
            setSuccessMessage(`Your Doctor id is ${response.data.id}`)
            let doctorid=response.data.id;
            console.log(doctorid)
            dispatch(sendDoctorId(doctorid))
            navigate("/doctorGroup")
          })
        .catch((error)=>{
            console.log(error)
             setErrorMessage("Something went wrong..")})
    }

    function handleChange(event){
        let fieldName=event.target.name;
        let val=event.target.value;
        let validMsg=errors;
        switch(fieldName){
            case "name":
                    if(val.length<3 || val.lenght>50)
                    {
                        validMsg.name="Name should have 3 to 50 characters";
                    }
                    else{
                        validMsg.name="";
                    }
                 break;

            case "password":
                if(val.length<=5 || val.length>=10)
                {
                   validMsg.password="Password should have 5 to 10 characters";
                }
                else{
                    validMsg.password="";
                }
                break;

            case "dateOfBirth":
                let today= new Date();
                let birthDate= new Date(val)
                let age=today.getFullYear()-birthDate.getFullYear();
                if(age<20 || age>100)
                {
                  validMsg.dateOfBirth="Age should be between 20 and 100 years";
                }
                else{
                    validMsg.dateOfBirth="";
                }
                break;

            case "mobileNo" :
            if(val.length!==10)
            {
                validMsg.mobileNo="Mobile should have 10 digits";
            }
            else{
                validMsg.mobileNo="";
            }
            break;

            case "speciality" :
                if(val.length<10  || val.length>50)
                {
                    validMsg.speciality="Speciality should have 10 to 50 character";
                }
                else{
                    validMsg.speciality="";
                }
                break;

            default :
            break;
        }

        setErrors(validMsg)
        setState({...state,[event.target.name]:event.target.value})
        
        if(errors.name=="" && errors.password=="" &&
         errors.dateOfBirth=="" && errors.mobileNo==""
         && errors.speciality=="")
           {
            setValid(true);
           }
           else{
            setValid(false);
              }

        if(state.name==""||state.password=="" || state.mobileNo==""
         || state.dateOfBirth=="" || state.speciality=="")
            {
            setMandatory(true);
            }
            else{
            setMandatory(false)
            }
    }

    return(
        <>
         <header className={"bg-black text-light"}>
                    <h2>WeCare
                    <span className="call">Call Us: 7028288465</span>
                    </h2>
        </header>
        <div className="container" >
            <div className="row ">
                <div className="col-md-6 offset-3 mt-5">
                    <form>
                          <div className="card bg-black text-light mt-40">
                                <div className="card-header text-center">
                                     <img src="doctor.jpg" alt="coach" width="10%" height="10%"/>
                                     <span className="display-6 mt-20">Life Doctor Profile</span>
                                </div>
                                <div className="card-body">
                                     <div className="row">
                                           <div className="col-md-6">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control"
                                                       name="name" value={state.name}
                                                       onChange={(event)=>handleChange(event)}
                                                />
                                                {(errors.name) ? <div style={{color:"red"}}>{errors.name}</div>:null}
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control"
                                                       name="password" value={state.password}
                                                       onChange={(event)=>handleChange(event)}
                                                />
                                                {(errors.password) ? <div style={{color:"red"}}>{errors.password}</div>:null}
                                            </div>
                                      </div>

                                       <div className="row">
                                             <div className="col-md-6">
                                                  <label className="form-label">Date of Birth</label>
                                                  <input type="date" className="form-control"
                                                         name="dateOfBirth" value={state.dateOfBirth}
                                                        onChange={(event)=>handleChange(event)}
                                                  />
                                                  {(errors.dateOfBirth!="") ? <div style={{color:"red"}}>{errors.dateOfBirth}</div>:null}
                                             </div>
                                             <div className="col-md-6" value={state.gender}>
                                                   <h6 style={{"color":"white"}}>Gender</h6>
                                                   <div  className="form-check-inline">
                                                         <label className="form-check-label" >
                                                         <input className="form-check-input" type="radio"
                                                                name="gender" value="male" 
                                                                onChange={(event)=>handleChange(event)}/>Male
                                                        </label>
                                                    </div>

                                                   <div className="form-check-inline">
                                                        <label className="form-check-label" >
                                                        <input className="form-check-input" type="radio"
                                                               name="gender" value="female" 
                                                               onChange={(event)=>handleChange(event)}/>Female
                                                        </label>
                                                   </div>
                                              </div>
                                       </div>


                                      <div className="row">
                                               <div className="col-md-6">
                                                    <label className="form-label">Mobile No</label>
                                                    <input type="text" className="form-control" 
                                                           name="mobileNo" value={state.mobileNo}
                                                           onChange={(event)=>handleChange(event)}
                                                    />
                                                    {(errors.mobileNo) ? <div style={{color:"red"}}>{errors.mobileNo}</div>:null}
                                                </div>
                                                <div className="col-md-6">
                                                     <label className="form-label">Speciality</label>
                                                     <input type="text" className="form-control" 
                                                            name="speciality" value={state.speciality}
                                                            onChange={(event)=>handleChange(event)}
                                                    />
                                                    {(errors.speciality) ? <div style={{color:"red"}}>{errors.speciality}</div>:null}
                                                </div>
                                        </div>
                                   </div>
                                   <div className="card-footer">
                                        <button className="btn btn-success" onClick={handleClick} disabled={!valid}>Register</button>
                                          {(mandatory) ? <div>Please enter all mandatory field</div> : null}
                                          {(successMessage) ? <div style={{color:"white"}}>{successMessage}</div>:null}
                                          {(errorMessage) ? <div style={{color:"red"}}>{errorMessage}</div>:null}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>Copyright @ WeCare All rights are reserved</footer>
        </>
    )
}
