import React from 'react'
import './css/App.css'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import VerificationEmail from './pages/VerificationEmail';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import { Suspense } from 'react';
import PrivateDashboard from './pages/PrivateRoute';
import Thankyou from './pages/Thankyou';
import UserConsent from './pages/UserConsent';
import PatientDashboard from './pages/PatientDashboard';
import ContactDetails from './pages/ContactDetails';
import VerifyMobile from './pages/VerifyMobile';

function App() {

  return (
    <React.Fragment>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verification/:emailId' element={<VerificationEmail />} />
          <Route path='/createprofile' element={< CreateProfile />} />
          <Route path='/dashboard' element={<PrivateDashboard Component={Dashboard}  />}/>
          <Route path="*" element={<NoMatch />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/userconsent' element={<UserConsent />} />
          <Route path='/patient-dashboard' element={<PatientDashboard />} />
          <Route path='/contactdetails' element={<ContactDetails />} />
          <Route path='/verifymobile/:mobileN' element={<VerifyMobile />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
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