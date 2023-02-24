import React, { useEffect, useState } from 'react'
import './css/App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import VerificationEmail from './pages/VerificationEmail';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import { Suspense } from 'react';
import PrivateDashboard from './pages/PrivateRoute';
import Thankyou from './pages/Thankyou';
import UserConsent from './pages/UserConsent';
// import AddClinician from './pages/AddClinician';
import AddClinicianPage from './pages/AddClinician';
import ContactDetails from './pages/ContactDetails';
import VerifyMobile from './pages/VerifyMobile';
import { UserContext } from './Store/Context';
import { getCurrentUser, getCurrentUserData, getCurrentUserIsActive, getCurrentUserRole } from './services/UserService';
import PatientDashboard from './components/Patient/PatientDashboard';
import EditProfile from './pages/edit-profile';

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

              {/* After Login Router */}

            <Route path='/createprofile' element={currentUser ? <CreateProfile /> :  <Register />} />
            <Route path='/dashboard' element={currentUser ? <Dashboard /> : <Register />} />
            <Route path='/editprofile' element={currentUser ? <EditProfile /> :<Register /> } />
            <Route path='/addclinician' element={currentUser ? <AddClinicianPage /> : <Register /> } />
      

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