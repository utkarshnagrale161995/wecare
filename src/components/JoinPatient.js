import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { sendPatientId } from "../actions/action";

export default function JoinPatient(){
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const[state,setState]=useState({
        name:"",
        password:"",
        mobileNo:"",
        emailId:"",
        dateOfBirth:"",
        gender:"",
        pincode:"",
        city:"",
        state:"",
        country:""
    })

    const [errors,setErrors]=useState(
        {
        name:" ",
        password:" ",
        mobileNo:" ",
        emailId:" ",
        dateOfBirth:" ",
        pincode:" ",
        city:" ",
        state:" ",
        country:" "
        }
    )

    const [valid,setValid]=useState(false);
    const [mandatory,setMandatory]=useState(true);
    const [successMessage,setSuccessMessage]=useState("");
    const [errorMessage,setErrorMessage]=useState("")

    function handleClick(event){
        event.preventDefault();
        axios.post("http://localhost:4000/patients",state)
        .then((response)=>{
            console.log(response.data)
            setSuccessMessage(`Your Patient id is ${response.data.id}`)
            let patientid=response.data.id;
            console.log(patientid)
            dispatch(sendPatientId(patientid))
            navigate("/patientGroup")
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
                let birthDate=new Date(val)
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
            if(val.length!=10)
            {
                validMsg.mobileNo="Mobile should have 10 digits";
            }
            else{
                validMsg.mobileNo="";
            }
            break;

            case "emailId" :
                if(val.lenght==0)
                {
                    validMsg.emailId="Email is required";
                }
                else{
                    validMsg.emailId="";
                }
                break;


                    case "pincode" :
                if(val.length!=6)
                {
                    validMsg.pincode="Should have 6 digit";
                }
                else{
                    validMsg.pincode="";
                }
                break;
                
                case "city" :
                    if(val.length<3  || val.length>20)
                    {
                        validMsg.city="City should have 6 to 20 character";
                    }
                    else{
                        validMsg.city="";
                    }
                    break;

                    case "state" :
                        if(val.length<3  || val.length>20)
                        {
                            validMsg.state="State should have 6 to 20 character";
                        }
                        else{
                            validMsg.state="";
                        }
                        break;

                        case "country" :
                            if(val.length<3  || val.length>20)
                            {
                                validMsg.country="Country should have 6 to 20 character";
                            }
                            else{
                                validMsg.country="";
                            }
                            break;
                        
                        default :
                        break;
        }
        setState({...state,[event.target.name]:event.target.value})
        setErrors(validMsg)
        console.log(validMsg)
        if(errors.name=="" && errors.password=="" &&
         errors.dateOfBirth=="" && errors.mobileNo=="" &&
         errors.emailId=="" && errors.pincode=="" && errors.state==""  
         && errors.city=="" && errors.country=="" )
         {
            setValid(true);
        }
        else{
            setValid(false);
        }
        if(state.name==""||state.password=="" || state.mobileNo==""
         || state.dateOfBirth=="" || state.email==""
         || state.gender=="" || state.pincode==""
         || state.city=="" || state.state==""|| state.country=="")
        {
            setMandatory(true);
        }else{
        setMandatory(false);
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
                <div className="col-md-6 offset-3">
        <form>
            <div className="card bg-black text-light mt-40">
                <div className="card-header text-center">
                    <img src="patient.jpg" alt="patient" width="10%" height="10%"/>
                    <span className="display-6 mt-20">Patient Profile</span>
                </div>
                <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                             <label className="form-label">Name</label>
                             <input type="text" className="form-control"
                                    name="name" value={state.name}
                                    onChange={(event)=>handleChange(event)}/>
                                    {(errors.name) ? <div style={{color:"red"}}>{errors.name}</div>:null}
                        </div>
                        <div className="col-md-6">
                             <label className="form-label">Password</label>
                             <input type="password" className="form-control"
                                     name="password" value={state.password}
                                     onChange={(event)=>{handleChange(event)}}/>
                                      {(errors.password) ? <div style={{color:"red"}}>{errors.password}</div>:null}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                             <label className="form-label">Mobile Number</label>
                             <input type="number" className="form-control"
                                     name="mobileNo" value={state.mobileNo}
                                     onChange={(event)=>{handleChange(event)}}/>
                                      {(errors.mobileNo) ? <div style={{color:"red"}}>{errors.mobileNo}</div>:null}
                        </div>

                        <div className="col-md-6">
                             <label className="form-label">Email Id</label>
                             <input type="text" className="form-control"
                                     name="emailId" value={state.emailId}
                                     onChange={(event)=>{handleChange(event)}}/>
                                      {(errors.emailId) ? <div style={{color:"red"}}>{errors.emailId}</div>:null}
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6">
                             <label className="form-label">Date of Birth</label>
                             <input type="date" className="form-control" 
                             name="dateOfBirth" value={state.dateOfBirth}
                             onChange={(event)=>{handleChange(event)}}/>
                             {(errors.dateOfBirth) ? <div style={{color:"red"}}>{errors.dateOfBirth}</div>:null}
                        </div>
                        <div className="col-md-6" value={state.gender}>
                                <h6 style={{color:"white"}}>Gender</h6>
                                <div  className="form-check-inline">
                                    <label className="form-check-label" >
                                        <input className="form-check-input" type="radio"
                                        name="gender" value="male" 
                                        onChange={(event)=>{handleChange(event)}}/>Male
                                    </label>
                                </div>

                                <div  className="form-check-inline">
                                    <label className="form-check-label" >
                                        <input className="form-check-input" type="radio"
                                        name="gender" value="female" 
                                        onChange={(event)=>{handleChange(event)}}/>Female
                                    </label>
                                </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                             <label className="form-label">City</label>
                             <input type="text" className="form-control"
                                    name="city" value={state.city}
                                    onChange={(event)=>{handleChange(event)}}/>
                                    {(errors.city) ? <div style={{color:"red"}}>{errors.city}</div>:null}
                        </div>
                        <div className="col-md-6">
                             <label className="form-label">Pincode</label>
                             <input type="text" className="form-control"
                                     name="pincode" value={state.pincode}
                                     onChange={(event)=>{handleChange(event)}}/>
                                      {(errors.pincode) ? <div style={{color:"red"}}>{errors.pincode}</div>:null}
                        </div>
                      </div>

                        <div className="row">
                        <div className="col-md-6">
                             <label className="form-label">State</label>
                             <input type="text" className="form-control"
                                    name="state" value={state.state}
                                    onChange={(event)=>{handleChange(event)}}/>
                                    {(errors.state) ? <div style={{color:"red"}}>{errors.state}</div>:null}
                        </div>
                        <div className="col-md-6">
                             <label className="form-label">Country</label>
                             <input type="text" className="form-control"
                                     name="country" value={state.country}
                                     onChange={(event)=>{handleChange(event)}}/>
                                      {(errors.country) ? <div style={{color:"red"}}>{errors.country}</div>:null}
                        </div>
                      </div>
                        
                    </div>
                </div>
                <div className="card-footer">
                        <button className="btn btn-success" onClick={(event)=>handleClick(event)} disabled={!valid}>Register</button>
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
