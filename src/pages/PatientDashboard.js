import React from 'react'
import AddClinician from '../components/patients/AddClinician'
import AddClinicianButton from '../components/patients/AddClinicianButton'
import ConnectingClinician from '../components/patients/ConnectingClinician'
import PractitionersCard from '../components/patients/PractitionersCard'

export default function PatientDashboard() {
  return (
    <>
    <div className='page-wrapper bg-gray'>
        <div className='container'>
            <div className='page-content-wrapper'>
                <ConnectingClinician/>
                <AddClinicianButton/>
                <AddClinician/>
                <PractitionersCard/>
            </div>
        </div>
    </div>
    </>
  )
}
