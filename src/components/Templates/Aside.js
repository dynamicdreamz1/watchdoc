import React from 'react'
import Header from './Header'
import CliniciansTableTabs from '../Clinician/CliniciansTableTabs'
import DashboardTableTabs from '../Clinician/DashboardTableTabs'
import PatientDashboard from '../Patient/PatientDashboard'

export default function Aside() {
  const view = 'patients'
  
  return (
    <div className='aside'>
      <Header />
      {(() => {
        switch (view) {
          case 'patients':
            return <PatientDashboard/>
          case 'clinicians':
            return <CliniciansTableTabs />
          default:
            return <DashboardTableTabs />
        }
      })()}
    </div>
  )
}
