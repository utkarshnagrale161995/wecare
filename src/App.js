import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import Home from './components/Home';

import JoinDoctor from './components/JoinDoctor';
import LoginDoctor from './components/LoginDoctor';
import DoctorGroup from'./components/DoctorGroup';
import DoctorHome from './components/DoctorHome';

import JoinPatient from './components/JoinPatient';
import LoginPatient from './components/LoginPatient';
import PatientGroup from './components/PatientGroup';
import PatientHome from './components/PatientHome';

import store from './stores/store';
import ViewProfile from './components/ViewProfile';
import MyAppointments from './components/MyAppointments';
import ViewPatientProfile from './components/ViewPatientProfile';

import BookAppointment from './components/BookAppointment';
import RescheduleAppointment from './components/RescheduleAppointment';
import DeleteAppointment from './components/DeleteAppointment';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>

       <Route path="/joinDoctor"   element={<JoinDoctor/>}/>
       <Route path="/loginDoctor"  element={<LoginDoctor/>}/>
       <Route path="/doctorGroup"  element={<DoctorGroup/>}/>
       <Route path="/doctorHome"   element={<DoctorHome/>}/>

       <Route path="/joinPatient"   element={<JoinPatient/>}/>
       <Route path="/loginPatient"  element={<LoginPatient/>}/>
       <Route path="/patientGroup"  element={<PatientGroup/>}/>
       <Route path="/patientHome"   element={<PatientHome/>}/>

       <Route path="/viewProfile"      element={<ViewProfile/>}/>
       <Route path="/viewPatientProfile"  element={<ViewPatientProfile/>}/>
       <Route path="/myAppointments"   element={<MyAppointments/>}/>
      

       <Route path="/bookAppointment"       element={<BookAppointment/>}/>
       <Route path="/rescheduleAppointment" element={<RescheduleAppointment/>}/>
       <Route path="/deleteAppointment"  element={<DeleteAppointment/>}/>
       
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;

