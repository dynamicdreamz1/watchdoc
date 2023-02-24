import React from 'react'
import Header from './Header'
import PatientsTableTabs from '../../patients/PatientsTableTabs'
import CliniciansTableTabs from '../../clinicians/CliniciansTableTabs'
import DashboardTableTabs from '../../dashboard/Clinician/DashboardTableTabs'

export default function Aside() {
  const view = 'patients'
  
  return (
    <div className='aside'>
      <Header />
      {(() => {
        switch (view) {
          case 'patients':
            return <PatientsTableTabs />
          case 'clinicians':
            return <CliniciansTableTabs />
          default:
            return <DashboardTableTabs />
        }
      })()}
    </div>
  )
}
