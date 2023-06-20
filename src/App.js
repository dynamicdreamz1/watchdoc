/*

Bgit sthavik
*/
import React, { useEffect, useState } from 'react'
import './css/App.css'
import { Routes, Route } from 'react-router-dom';
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
import ForgotPassword from '../src/pages/ForgotPassword'
import VerificationForPassword from './pages/VerificationForPassword';
import NewPassword from './pages/NewPassword';
import AllClinician from './pages/AllClinician';
import PrivateRoute from './routes/PrivateRoute';
import RedircetRoute from './routes/RedircetRoute';
import AdminPatients from './pages/AdminPatient';
function App() {

  // const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserData, setCurrentUserData] = useState(undefined);
  const user = getCurrentUser();


  useEffect(() => {
    const role = getCurrentUserRole();
    const IsActive = getCurrentUserIsActive();
    if (user) {
      const userData = getCurrentUserData();
      setCurrentUserData({ userData, role, IsActive });
    }
  }, [user]);


  return (
    <UserContext.Provider value={{ currentUserData, setCurrentUserData}}>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route path='/verification/:emailId' element={<VerificationEmail />} />
        <Route path='/twofactoreverification/:emailId' element={<TwoFactor />} />
        <Route path='/signupsuccess' element={<SignupSuccess />} />
        <Route path='/forgetpassword' element={<ForgotPassword />} />
        <Route path='/verificationforgetpassword' element={<VerificationForPassword />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path="/" element={<RedircetRoute Component={SignIn} redirectComponent='dashboard' />} />
        <Route path="/patiententry" element={<RedircetRoute Component={PatientEntry} redirectComponent='dashboard' />} />
        <Route path="/signin" element={<RedircetRoute Component={SignIn} redirectComponent='dashboard' />} />
        <Route path='dashboard' element={<PrivateRoute Component={Dashboard} />} />
        <Route path='edit-profile' element={<PrivateRoute Component={EditProfileInner} />} />
        <Route path='editclinician' element={<PrivateRoute Component={AddClinicianInner} />} />
        <Route path='editlinkdevice' element={<PrivateRoute Component={LinkDeviceInner} />} />
        <Route path='patients' element={<PrivateRoute Component={Patients} />} />
        <Route path='adminpatient' element={<PrivateRoute Component={AdminPatients} />} />
        <Route path='clinicians' element={<PrivateRoute Component={Clinicians} />} /> 
        <Route path='staffusers' element={<PrivateRoute Component={StaffUsers} />} />
        <Route path='/profile-settings' element={<PrivateRoute Component={ProfileSettings} />} />
        <Route path='/patientdetails' element={<PrivateRoute Component={PatientsDetails} />} />
        <Route path='/cliniciandetails' element={<PrivateRoute Component={ClinicianDetails} />} />
        <Route path='/alluserclinician' element={<PrivateRoute Component={AllClinician} />} />
        <Route path='/userConsent' element={<PrivateRoute Component={UserConsent} />} />
        <Route path='/thankyou' element={<PrivateRoute Component={Thankyou} />} />
        <Route path='/contactdetails' element={<PrivateRoute Component={ContactDetails} />} />
        <Route path='/verifymobile/:mobileN' element={<PrivateRoute Component={VerifyMobile} />} />
        <Route path='/create-profile' element={<PrivateRoute Component={CreateProfileOuter} />} />
        <Route path='/addclinician' element={<PrivateRoute Component={AddClinicianOuter} />} />
        <Route path='/link-device' element={<PrivateRoute Component={LinkDeviceOuter} />} />
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