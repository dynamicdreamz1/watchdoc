import React,{useState} from 'react'
import Header from './Header'
import PatientsTableTabs from '../patients/PatientsTableTabs'
import CliniciansTableTabs from '../clinicians/CliniciansTableTabs'
import DashboardTableTabs from '../dashboard/Clinician/DashboardTableTabs'

export default function Aside() {
  const [view, setView] = useState('patients')
  
  // create a handleClick function
  const handleClick = (gameState) => {
    setView(gameState)
  }

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
