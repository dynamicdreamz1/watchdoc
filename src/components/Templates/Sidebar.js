import React, { useContext } from 'react'

import { logout} from '../../services/UserService';
import ClinicianSidebar from './ClinicianSidebar';
import PatientSidebar from './PatientSidebar';
import { UserContext } from '../../Store/Context';


export default function Sidebar() {

    const {currentUserData} = useContext(UserContext);

    

    const logoutHandel=()=>{
        logout();
        window.location.reload();
    }

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
          case 'clinicians':
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
                <span className='text'>Logout</span>
            </button>
        </div>
    </div>
    </>
  )
}
