import React from 'react'
import CliniciansRequestsTable from './CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from './CriticalPatientsAlertTableTabs'

export default function ClinicianDashboard() {
  return (
    <>
        <CriticalPatientsAlertTableTabs/>
        <CliniciansRequestsTable/>
    </>
  )
}
