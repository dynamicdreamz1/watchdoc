import React from 'react'
import './css/App.css'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import Verification from './pages/Verification';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
// import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import PrivateDashboard from './pages/PrivateRoute';
import Thankyou from './pages/Thankyou';
import UserConsent from './pages/UserConsent';
import PatientDashboard from './pages/PatientDashboard';

// const lngs = {
//   english: { nativeName: 'English', value: 'english' },
//   hindi: { nativeName: 'Hindi', value: 'hindi' },

// };


function App() {


  // const { i18n } = useTranslation();
  // let lang=localStorage.getItem('i18nextLng')



  return (
    <React.Fragment>

      {/* <select onClick={(e) => i18n.changeLanguage(e.target.value)}>
        {Object.keys(lngs).map((lng) =>
          <option  selected={lngs[lng].value===lang ? "selected" : ""} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} key={lng} value={lngs[lng].value} >{lngs[lng].nativeName}</option>
        )}

      </select> */}

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Register />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Verification/:emailId' element={<Verification />} />
          <Route path='/CreateProfile' element={< CreateProfile />} />
          <Route path='/Dashboard' element={<PrivateDashboard Component={Dashboard}  />}/>
          <Route path="*" element={<NoMatch />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/userconsent' element={<UserConsent />} />
          <Route path='/patient-dashboard' element={<PatientDashboard />} />
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