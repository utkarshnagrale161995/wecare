import {SendPatientLoginId,SendDoctorLoginId,SendDoctorId,
        SendPatientId,BookAppointmentId,RescheduleAppointmentId} from "../constants/constant";
    export const sendDoctorId =(id)=>{
         return{
             type:SendDoctorId,
             id
              }
       }
    export const sendDoctorLoginId = (id)=>{
         return{
              type:SendDoctorLoginId,
              id
              }
        }
    export const sendPatientId =(id)=>{
          return{
          type:SendPatientId,
          id
               }
         }
    export const sendPatientLoginId =(id)=>{
          return{
           type:SendPatientLoginId,
           id
            }
        }
    export const bookAppointmentId =(id)=>{
          return{
            type:BookAppointmentId,
            id
           }
        }
    export const rescheduleAppointmentId =(id)=>{
           return{
               type:RescheduleAppointmentId,
               id
            }
        }