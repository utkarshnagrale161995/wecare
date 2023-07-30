import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { sendDoctorLoginId } from "../actions/action";
import {useDispatch} from "react-redux"

export default function LoginDoctor(){

    const navigate=useNavigate();
    const dispatch = useDispatch();

    const[state,setState]=useState({
        id:"",
        password:""
    })

    const [errors,setErrors]=useState(
        {
           id:" ",
           password:" "
        }
    )
    const [valid,setValid]=useState(false);
    const [mandatory,setMandatory]=useState(true);
    const [errorMessage,setErrorMessage]=useState("")

    function handleClick(event){
        event.preventDefault();
        
        axios.get("http://localhost:4000/doctors")
        .then((response)=>{
            let value=response.data
            console.log(response.data)
            let result=value.find(val => val.id==state.id && val.password==state.password)
            if(result){
                let loginid=Number(state.id)
                console.log(loginid)
                console.log(typeof loginid)
                dispatch(sendDoctorLoginId(loginid))
                 navigate("/doctorHome")  
            }else{
                setErrorMessage("please enter valid credentials")
            }          
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
            case "id":
                if(val.length==0)
                {
                    validMsg.id="enter id";
                }
                else{
                    validMsg.id="";
                }
                break;

            case "password":
                if(val.length<5 || val.length>10)
                {
                   validMsg.password="Password should have 5 to 10 characters";
                }
                else{
                    validMsg.password="";
                }
                break;  

            default :
            break;
        }
        setState({...state,[event.target.name]:event.target.value})
        setErrors(validMsg);
        console.log(errors)
        if(errors.id=="" && errors.password=="")
         {
            setValid(true);
        }
        else{
            setValid(false);
        }
        if(state.id===""||state.password==="")
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
        <div className="container-fluid mx-auto" >
            <div className="row ">
                <div className="col-md-6 offset-3">
        <form>
            <div className="card bg-black text-light mt-5">
                <div className="card-header text-center">
                    <img src="doctor.jpg" alt="doctor" width="7%" height="7%"/>
                    <span className="display-6 mt-20">Login As Life Doctor</span>
                </div>
                <div className="card-body">
                      <div className="row">
                             <input type="text"
                                    name="id" value={state.id}
                                    required placeholder="Doctor id"
                                    className="form-control"
                                    onChange={(event)=>{handleChange(event)}}
                                    />
                                    {(errors.id) ? <div style={{color:"red"}}>{errors.id}</div>:null}
                        </div>
                        <br></br>
                        <div className="row">
                             <input type="password"
                                     name="password" value={state.password}
                                     required placeholder="Password"
                                     className="form-control"
                                     onChange={(event)=>handleChange(event)} 
                                     />
                                      {(errors.password) ? <div style={{color:"red"}}>{errors.password}</div>:null}
                        </div>
                </div>
                <div className="card-footer">
                        <button className="btn btn-success" onClick={(event)=>handleClick(event)} disabled={!valid}>Login</button>
                        {(mandatory) ? <div>Please enter all mandatory field</div> : null}
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
