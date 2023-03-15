import React from 'react'
import CliniciansRequestsTable from './CliniciansRequestsTable'
import CliniciansTableTabs from './CliniciansTableTabs'
import CriticalPatientsAlertTableTabs from './CriticalPatientsAlertTableTabs'
import DashboardTableTabs from './DashboardTableTabs'
import PatientsTableTabs from './PatientsTableTabs'
import PendingPatientsTable from './PendingPatientsTable'
import RedAlertReviewed from './RedAlertReviewed'
import RedAlertUnreviewed from './RedAlertUnreviewed'

export default function ClinicianDashboard() {
  return (
    <>
        <CriticalPatientsAlertTableTabs/>
        <CliniciansRequestsTable/>

        
        <CliniciansTableTabs/>
        <DashboardTableTabs/>
        <PatientsTableTabs/>
        <PendingPatientsTable/>
        <RedAlertReviewed/>
        <RedAlertUnreviewed/>
    </>
  )
}
