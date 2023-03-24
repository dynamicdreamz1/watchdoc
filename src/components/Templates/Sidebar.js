import React, { useContext } from 'react'
import AdminSidebar from './AdminSidebar';
import { logout} from '../../services/UserService';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';
import { UserContext } from '../../Store/Context';
import { useTranslation } from 'react-i18next';


export default function Sidebar() {

    const {currentUserData} = useContext(UserContext);
    const logoutHandel=()=>{   
        logout();
        window.location.reload();
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
          case "Admin":
            return <AdminSidebar/>
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
