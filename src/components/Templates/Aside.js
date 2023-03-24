import React, { useContext } from 'react'
import Header from './Header'
import PatientDashboard from '../Patient/PatientDashboard'
import { UserContext } from '../../Store/Context'
import ClinicianDashboard from '../Clinician/ClinicianDashboard'
import AdminDashboard from '../Admin/AdminDashboard'

export default function Aside() {
  const {currentUserData} = useContext(UserContext);

  
  return (
    <div className='aside'>
    
      <Header />
      {(() => {
        switch (currentUserData?.role) {
          case 'User':
            return <PatientDashboard/>
          case 'Clinician':
            return <ClinicianDashboard/>
          default:
            return <AdminDashboard/>
        }
      })()}
    </div>
  )
}
