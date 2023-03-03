import React, { useContext } from 'react'
import Header from './Header'
import CliniciansTableTabs from '../Clinician/CliniciansTableTabs'
import DashboardTableTabs from '../Clinician/DashboardTableTabs'
import PatientDashboard from '../Patient/PatientDashboard'
import { UserContext } from '../../Store/Context'

export default function Aside() {
  const {currentUserData} = useContext(UserContext);

  
  return (
    <div className='aside'>
    
      <Header />
      {(() => {
        switch (currentUserData?.role) {
          case 'User':
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
