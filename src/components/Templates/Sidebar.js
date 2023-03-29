import React, { useContext } from 'react'
import AdminSidebar from './AdminSidebar';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';
import { UserContext } from '../../Store/Context';

export default function Sidebar() {

  const {currentUserData} = useContext(UserContext);
  
  return (
    <>
    <div className='sidebar'>
        <div className='logo'>
            <img src='/images/WatchDoc-text-logo.svg' alt='WatchDoc Logo' />
        </div>
        <nav aria-label="main mailbox folders">
          {(() => {
          switch (currentUserData?.role) {
            case "User":
              return <PatientSidebar/>
            case 'Clinician':
              return <ClinicianSidebar/> 
            case "Admin":
              return <AdminSidebar/>
            default:
              return  ''
          }
          })()}
        </nav>
    </div>
    </>
  )
}
