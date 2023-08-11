import React  from 'react'
import AdminSidebar from './AdminSidebar';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';
import { getCurrentUserData } from '../../services/UserService';

export default function Sidebar() {
  const userData = getCurrentUserData()

  return (
    <>
    <div className='sidebar'>
        <div className='logo'>
            <img src='/images/WatchDoc-text-logo.svg' alt='WatchDoc Logo' />
        </div>
        <nav aria-label="main mailbox folders">
          {(() => {
          switch (userData && userData?.roles[0]?.name) {
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
