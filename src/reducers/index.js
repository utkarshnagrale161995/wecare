import {combineReducers} from "redux";
import { sendPatientIdreducer,sendDoctorIdreducer,sendDoctorLoginIdreducer,
sendPatientLoginIdreducer, bookAppointmentIdreducer,
rescheduleAppointmentIdreducer } from "./reducer";

const rootReducers = combineReducers({
sendDoctorIdreducer,
sendPatientIdreducer,
sendDoctorLoginIdreducer,
sendPatientLoginIdreducer,
bookAppointmentIdreducer,
rescheduleAppointmentIdreducer
})
export default rootReducers;