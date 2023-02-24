import React from 'react'
import { useTranslation } from 'react-i18next'
import { logout } from '../../services/UserService';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';


export default function Sidebar() {

    const {t}=useTranslation();

    const logoutHandel=()=>{
        logout();
        window.location.reload();
    }

  return (
    <>
    <div className='sidebar'>
        <div className='logo'>
            <img src='images/WatchDoc-text-logo.svg' alt='WatchDoc Logo' />
        </div>
        <nav aria-label="main mailbox folders">
            <ClinicianSidebar/> 
            <PatientSidebar/>
        </nav>
        <div className='logout'>
            <button type='button' onClick={(e)=>logoutHandel()} >
                <span className='icon'>
                    <img src='/images/Logout-icon.png' alt='Logout Icon' />
                </span>
                <span className='text'>Logout</span>
            </button>
        </div>
    </div>
    </>
  )
}
