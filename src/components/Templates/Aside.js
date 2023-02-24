import React from 'react'
import Header from './Header'
import PatientsTableTabs from '../Clinician/PatientsTableTabs'
import CliniciansTableTabs from '../Clinician/CliniciansTableTabs'
import DashboardTableTabs from '../Clinician/DashboardTableTabs'

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
