/*

Bgit sthavik
*/


import React, { useEffect, useState } from 'react'
import './css/App.css'
import { Routes, Route} from 'react-router-dom';
import VerificationEmail from './pages/VerificationEmail';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { Suspense } from 'react';
import Thankyou from './pages/Thankyou';
import UserConsent from './pages/UserConsent';
import ContactDetails from './pages/ContactDetails';
import VerifyMobile from './pages/VerifyMobile';
import { UserContext } from './Store/Context';
import { getCurrentUser, getCurrentUserData, getCurrentUserIsActive, getCurrentUserRole } from './services/UserService';
import AddClinicianInner from './pages/AddClinicianInner';
import { AddClinicianOuter } from './pages/AddClinicianOuter';
import EditProfileInner from './pages/EditProfileInner';
import LinkDeviceInner from './pages/LinkDeviceInner';
import LinkDeviceOuter from './pages/LinkDeviceOuter';
import CreateProfileOuter from './pages/CreateProfileOuter';
import Patients from './pages/Patients'
import Clinicians from './pages/Clinicians';
import SignUp from './pages/SignUp';
import PatientEntry from './pages/PatientEntry';
import TwoFactor from './pages/TwoFactor';
import SignupSuccess from './pages/SignupSuccess';
import ProfileSettings from './pages/ProfileSettings';
import PatientsDetails from './pages/PatientsDetails';
import StaffUsers from './pages/StaffUsers';
import ClinicianDetails from './pages/ClinicianDetails';


function App() {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserData, setCurrentUserData] = useState(undefined);
  const user = getCurrentUser();


  useEffect(() => {

    const role = getCurrentUserRole();
    const IsActive = getCurrentUserIsActive();
    if (user) {
      setCurrentUser(user);
      const userData = getCurrentUserData();
      setCurrentUserData({ userData, role, IsActive });
    }
  
  }, [user]);

  return (
    <UserContext.Provider value={{ currentUserData, setCurrentUserData, setCurrentUser }}>

     <Routes>

        <Route exact path="/" element={currentUser ? <Dashboard /> : <SignIn />} />
        <Route exact path="/signin" element={currentUser ? <Dashboard /> : <SignIn />} />
        <Route exact path="/patiententry" element={currentUser ? <Dashboard /> : <PatientEntry />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route path='/verification/:emailId' element={currentUser ? <Dashboard /> : <VerificationEmail />} />
        <Route path='/twofactoreverification/:emailId' element={<TwoFactor/>} />
        <Route path='/signupsuccess' element={<SignupSuccess/>} />

        <Route path='/profile-settings' element={<ProfileSettings/>} />
        <Route path='/patientdetails' element={currentUser ? <PatientsDetails /> : <SignIn />} />
        <Route path='/cliniciandetails' element={currentUser ? <ClinicianDetails /> : <SignIn />} />


        

        
        

        <Route path='/userConsent' element={currentUser ? <UserConsent /> : <SignIn />} />

        <Route path='/thankyou' element={currentUser ? <Thankyou /> : <SignIn />} />
        <Route path='/contactdetails' element={currentUser ? <ContactDetails /> : <SignIn />} />
        <Route path='/verifymobile/:mobileN' element={currentUser ? <VerifyMobile /> : <SignIn />} />
        <Route path='/create-profile' element={currentUser ? <CreateProfileOuter /> : <SignIn />} />
        <Route path='/addclinician' element={currentUser ? <AddClinicianOuter /> : <SignIn />} />
        <Route path='/link-device' element={currentUser ? <LinkDeviceOuter /> : <SignIn />} />

        {/* After Login Router */}

        <Route path='dashboard' element={currentUser ? <Dashboard /> : <SignIn />} />
        <Route path='edit-profile' element={currentUser ? <EditProfileInner /> : <SignIn />} />
        <Route path='editclinician' element={currentUser ? <AddClinicianInner /> : <SignIn />} />
        <Route path='editlinkdevice' element={currentUser ? <LinkDeviceInner /> : <SignIn />} />
        <Route path='patients' element={currentUser ? < Patients/> : <SignIn />} />
        <Route path='clinicians' element={currentUser ? <Clinicians /> : <SignIn />} />
        <Route path='staffusers' element={currentUser ? <StaffUsers/> : <SignIn />} />

      </Routes>

    </UserContext.Provider>

  );
}


export default App;

// here app catches the suspense from page in case translations are not yet loaded
export function WrappedApp() {
  return (
    <Suspense fallback='Loading...'>
      <App />
    </Suspense>
  )
}