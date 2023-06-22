import React, { useState }  from 'react'
import Header from './Header'
import PatientDashboard from '../Patient/PatientDashboard'
import ClinicianDashboard from '../Clinician/ClinicianDashboard'
import AdminDashboard from '../Admin/AdminDashboard'
import { getCurrentUserData } from '../../services/UserService'

export default function Aside() {
  const userData = getCurrentUserData()
  const [searchData,setSearchData]=useState("")


  return (
    <div className='aside'>

      <Header setSearchData={setSearchData} searchData={searchData}/>
      {(() => {
        switch (userData?.roles[0].name) {
          case 'User':
            return <PatientDashboard />
          case 'Clinician':
            return <ClinicianDashboard searchData={searchData} setSearchData={setSearchData}/>
          default:
            return <AdminDashboard />
        }
      })()}
    </div>
  )
}
