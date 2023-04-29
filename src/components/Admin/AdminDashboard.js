import React, { useState, useEffect } from 'react'
import { getPendingPatients } from '../../services/AdminService';
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'


export default function AdminDashboard() {

  const recordsPerPage = 5;
  const [pendingPatientsData, setPendingPatientsData] = useState([])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  const GetData = async () => {
    setLoading(true)
    let res = await getPendingPatients()
    let data = []
    const maxKey = Object.keys(res?.data).reduce((a, b) => {
      return a > b ? a : b;
    });

    for (let i = 0; i <= maxKey; i++) {
      if (res?.data[i.toString()]) {
        data.push(res?.data[i.toString()])
      }
    }

    setPendingPatientsData(data)
    setLoading(false)
  }

  useEffect(() => {
    GetData()
  }, [])




  return (
    <>
      <CriticalPatientsAlertTableTabs />
      <CliniciansRequestsTable clinicianStaff={pendingPatientsData} loading={loading} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}
