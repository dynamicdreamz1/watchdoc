import React from 'react'
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'

export default function AdminDashboard() {
  return (
    <>
        <CriticalPatientsAlertTableTabs/>
        <CliniciansRequestsTable/>
    </>
  )
}
