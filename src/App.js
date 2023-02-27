import React, { useEffect, useState } from 'react'
import './css/App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import VerificationEmail from './pages/VerificationEmail';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { Suspense } from 'react';
import Thankyou from './pages/Thankyou';
import UserConsent from './pages/UserConsent';
// import AddClinician from './pages/AddClinician';
import ContactDetails from './pages/ContactDetails';
import VerifyMobile from './pages/VerifyMobile';
import { UserContext } from './Store/Context';
import { getCurrentUser, getCurrentUserData, getCurrentUserIsActive, getCurrentUserRole } from './services/UserService';
import AddClinicianInner from './pages/AddClinicianInner';
import { AddClinicianOuter } from './pages/AddClinicianOuter';

import EditProfileInner from './pages/EditProfileInner';
import EditProfileOuter from './pages/EditProfileOuter';
import LinkDeviceInner from './pages/LinkDeviceInner';
import LinkDeviceOuter from './pages/LinkDeviceOuter';

function App() {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserData, setCurrentUserData] = useState(undefined);
  useEffect(() => {
    const user = getCurrentUser();
    const role = getCurrentUserRole();
    const IsActive = getCurrentUserIsActive();
    if (user) {
      setCurrentUser(user);
      const userData = getCurrentUserData();
      setCurrentUserData({userData,role,IsActive});
    }
   
  }, []);

  console.log(currentUser);
  

  return (
    <UserContext.Provider value={{currentUserData,setCurrentUserData}}>
      
        <Routes>
            <Route exact path="/" element={ currentUser ? <Navigate replace to="/dashboard" /> :<Register />} />
            <Route exact path="/register" element={currentUser ? <Navigate replace to="/dashboard" /> : <Register />} />
            <Route path='/verification/:emailId' element={currentUser ? <Navigate replace to="/dashboard" /> : <VerificationEmail />} />
            
            <Route path='/userConsent' element={currentUser ? <UserConsent /> : <Register />}/>
            <Route path='/thankyou' element={currentUser ? <Thankyou /> : <Register />} />
            <Route path='/contactdetails' element={currentUser ? <ContactDetails /> : <Register />} />
            <Route path='/verifymobile/:mobileN' element={currentUser ? <VerifyMobile /> : <Register />} />
            <Route path='/createprofile' element={currentUser ? <EditProfileOuter /> :<Register /> } />
            <Route path='/addclinician' element={currentUser ? <AddClinicianOuter /> : <Register /> } />
            <Route path='/link-device' element={currentUser ? <LinkDeviceOuter /> : <Register /> } />
            
              {/* After Login Router */}

              <Route path='dashboard' element={currentUser ? <Dashboard /> : <Register />} />
              <Route path='edit-profile' element={currentUser ? <EditProfileInner /> :<Register /> } />
              <Route path='editclinician' element={currentUser ? <AddClinicianInner /> : <Register /> } />
              <Route path='editlinkdevice' element={currentUser ? <LinkDeviceInner /> : <Register /> } />
            
            
      

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