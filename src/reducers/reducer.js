import {SendDoctorLoginId, SendPatientLoginId, SendDoctorId, SendPatientId,
    BookAppointmentId,RescheduleAppointmentId} from "../constants/constant";
    const initialState1={
    doctorid:0
    }
    
    const initialState2={
    patientid:0
    }
    
    const initialState3={
    loginid:0
    }
    
    const initialState4={
    loginid:0
    }
    
    const initialState5={
    doctorid:0
    }
    
    const initialState6={
    bookingid:0
    }
    
    export function sendDoctorIdreducer(state=initialState1,action){
         console.log(action,'action')
         switch(action.type){
         case SendDoctorId:
           return {
             ...state,
             doctorid:action.id
            }
    
           default:
           return state;
         }
    }
    
    export function sendPatientIdreducer(state=initialState2,action){
            console.log(action,'action')
             switch(action.type){
               case SendPatientId:
                  return {
                        ...state,
                       patientid:action.id
               }
              default:
             return state;
           }
    }
    
    export function sendDoctorLoginIdreducer(state=initialState3,action){
           console.log(action,'action')
              switch(action.type){
                case SendDoctorLoginId:
                     return {
                          ...state,
                          loginid:action.id
                        }
                default:
                return state;
            }
    }
    
    export function sendPatientLoginIdreducer(state=initialState4,action){
            console.log(action,'action')
              switch(action.type){
                case SendPatientLoginId:
                      return {
                          ...state,
                         loginid:action.id
                    }
                default:
                return state;
            }
    }
    
    export function bookAppointmentIdreducer(state=initialState5,action){
              console.log(action,'action')
                switch(action.type){
                   case BookAppointmentId:
                       return {
                          ...state,
                          doctorid:action.id
                        }
                default:
                return state;
            }
    }
    
    export function rescheduleAppointmentIdreducer(state=initialState6,action){
                console.log(action,'action')
                   switch(action.type){
                      case RescheduleAppointmentId:
                        return {
                           ...state,
                           bookingid:action.id
                        }
                    default:
                    return state;
            }
    }