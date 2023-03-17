import React, { useContext } from 'react'

import { logout} from '../../services/UserService';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';
import { UserContext } from '../../Store/Context';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {

    const {currentUserData} = useContext(UserContext);
    let navigate = useNavigate()
    const logoutHandel=()=>{
        logout(currentUserData?.role,navigate);
        currentUserData?.role==="User"?navigate('/patiententry'):navigate('/signin')
    }

    const {t}=useTranslation()

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
          default:
            return  ''
        }
      })()}

        </nav>

            
            
        <div className='logout'>
            <button type='button' onClick={(e)=>logoutHandel()} >
                <span className='icon'>
                    <img src='/images/Logout-icon.png' alt='Logout Icon' />
                </span>
                <span className='text'>{t('DashboardPage.SideBar.d4')}</span>
            </button>
        </div>
    </div>
    </>
  )
}
