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
import { getCurrentUser, getCurrentUserData } from './services/UserService';

function App() {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserData, setCurrentUserData] = useState(undefined);
  


  useEffect(() => {
    const user = getCurrentUser();
    
    
    if (user) {
      setCurrentUser(user);
      const userData = getCurrentUserData();
      setCurrentUserData(userData);

      
    }
   
  }, []);
  
  

  return (
    <UserContext.Provider value={{currentUserData,setCurrentUserData}}>
      
        <Routes>
          <Route exact path="/" element={ currentUser ? <Navigate replace to="/dashboard" /> :<Register />} />
            <Route exact path="/register" element={currentUser ? <Navigate replace to="/dashboard" /> : <Register />} />
            <Route path='/dashboard' element={currentUser ? <Dashboard /> : <Navigate replace to="/register" />}/>


           <Route path='/verification/:emailId' element={currentUser ? <Navigate replace to="/dashboard" /> : <VerificationEmail />} />
          {/*<Route path='/createprofile' element={currentUser ? < CreateProfile /> : <Navigate replace to="/dashboard" /> } />

          
          
          <Route path='/thankyou' element={currentUser ? <Thankyou /> : <Navigate replace to="/" />} />
          <Route path='/userconsent' element={currentUser ? <UserConsent /> : <Navigate replace to="/" />} />
          <Route path='/add-clinicians' element={currentUser ? <PatientDashboard />: <Navigate replace to="/" />} />
          <Route path='/contactdetails' element={<ContactDetails />} />
          <Route path='/verifymobile/:mobileN' element={<VerifyMobile />} />
         
          <Route path="*" element={<NoMatch />} /> */}

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