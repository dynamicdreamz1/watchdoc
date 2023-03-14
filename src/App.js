/*

Bgit sthavik
*/


import React, { useEffect, useState } from 'react'
import './css/App.css'
import { Routes, Route} from 'react-router-dom';
import VerificationEmail from './pages/VerificationEmail';
import Register from './pages/Register';
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

        <Route exact path="/" element={currentUser ? <Dashboard /> : <Register />} />
        <Route exact path="/register" element={currentUser ? <Dashboard /> : <Register />} />
        <Route path='/verification/:emailId' element={currentUser ? <Dashboard /> : <VerificationEmail />} />

        <Route path='/userConsent' element={currentUser ? <UserConsent /> : <Register />} />

        <Route path='/thankyou' element={currentUser ? <Thankyou /> : <Register />} />
        <Route path='/contactdetails' element={currentUser ? <ContactDetails /> : <Register />} />
        <Route path='/verifymobile/:mobileN' element={currentUser ? <VerifyMobile /> : <Register />} />
        <Route path='/create-profile' element={currentUser ? <CreateProfileOuter /> : <Register />} />
        <Route path='/addclinician' element={currentUser ? <AddClinicianOuter /> : <Register />} />
        <Route path='/link-device' element={currentUser ? <LinkDeviceOuter /> : <Register />} />

        {/* After Login Router */}

        <Route path='dashboard' element={currentUser ? <Dashboard /> : <Register />} />
        <Route path='edit-profile' element={currentUser ? <EditProfileInner /> : <Register />} />
        <Route path='editclinician' element={currentUser ? <AddClinicianInner /> : <Register />} />
        <Route path='editlinkdevice' element={currentUser ? <LinkDeviceInner /> : <Register />} />
        <Route path='patients' element={currentUser ? < Patients/> : <Register />} />
        <Route path='clinicians' element={currentUser ? <Clinicians /> : <Register />} />

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