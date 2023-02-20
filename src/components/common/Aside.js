import React, { useState } from 'react'
import Header from './Header'
import DashboardTableTabs from '../dashboard/DashboardTableTabs'
import PatientsTableTabs from '../patients/PatientsTableTabs'
import CliniciansTableTabs from '../clinicians/CliniciansTableTabs'

export default function Aside() {
  const [view, setView] = useState('patients')
  
  // create a handleClick function
  const handleClick = (gameState) => {
    setView(gameState)
  }

  return (
    <div className='aside'>
      <Header/>

      {/* IIFE function */}
        
      {(() => {
        switch (view) {
          case 'patients':
            return <PatientsTableTabs/>
          case 'clinicians':
            return <CliniciansTableTabs/>
          default:
            return <DashboardTableTabs/>
        }
      })()}
    </div>
  )
}
