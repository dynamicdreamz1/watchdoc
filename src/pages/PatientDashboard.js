import React from 'react'
import AddClinician from '../components/patients/AddClinician'
import ConnectingClinician from '../components/patients/ConnectingClinician'
import PractitionersCard from '../components/patients/PractitionersCard'

export default function PatientDashboard() {
  return (
    <>
    <div className='varification-page-wrapper thankyou-page-wrapper'>
        <div className='container'>
            <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
            </div>
            <div className='page-content-wrapper'>
                <ConnectingClinician/>
                <AddClinician/>
                <PractitionersCard/>
            </div>
        </div>
    </div>
    </>
  )
}
