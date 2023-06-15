import React  from 'react'
import Header from './Header'
import PatientDashboard from '../Patient/PatientDashboard'
import ClinicianDashboard from '../Clinician/ClinicianDashboard'
import AdminDashboard from '../Admin/AdminDashboard'
import { getCurrentUserData } from '../../services/UserService'

export default function Aside() {
  const userData = getCurrentUserData()


  return (
    <div className='aside'>

      <Header />
      {(() => {
        switch (userData?.roles[0].name) {
          case 'User':
            return <PatientDashboard />
          case 'Clinician':
            return <ClinicianDashboard />
          default:
            return <AdminDashboard />
        }
      })()}
    </div>
  )
}
