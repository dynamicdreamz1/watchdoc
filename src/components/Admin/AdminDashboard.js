import React, { useState, useEffect } from 'react'
import { getPendingClinicians} from '../../services/AdminService';
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'
import { getAdminCriticalAlertReviewed, getAdminCriticalAlertunReviewed } from '../../services/AdminService';
import { getCurrentUserData } from '../../services/UserService';


export default function AdminDashboard() {
  const userData = getCurrentUserData()
  const recordsPerPage = 5;
  const [pendingClinicianData, setPendingClinicianData] = useState([])
  const [pendingClinicianCurrentPage, setPendingClinicianCurrentPage] = useState(1)
  const [pendingClinicianTotalPages, setPendingClinicianTotalPages] = useState(0);
  const [pendingClinicianLoading, setPendingClinicianLoading] = useState(false)


  const [criticalAlertReviewedData, setCriticalAlertReviewedData] = useState([])
  const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
  const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
  const [dataLimitCriticalAlertReviewedData] = useState(5)
  const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)



  const [criticalAlertUnreviewedData, setCriticalAlertUnreviewedData] = useState([])
  const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
  const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
  const [dataLimitCriticalAlertUnreviewedData] = useState(5)
  const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)

  const fetchUnreviewedData = async (currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData) => {
    setLoadingCriticalAlertUnreviewedData(true)
    const res = await getAdminCriticalAlertunReviewed(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData);
    setTotalPagesCriticalAlertUnreviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertUnreviewedData))
    if (res.status === 200) {
      setCriticalAlertUnreviewedData(res?.data?.data)
    }
    setLoadingCriticalAlertUnreviewedData(false)
  }

  const fetchReviewedData = async (currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData) => {
    setLoadingCriticalAlertReviewedData(true)
    const res = await getAdminCriticalAlertReviewed(currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData,);
    setTotalPagesCriticalAlertReviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertReviewedData));
    if (res?.status === 200) {
      setCriticalAlertReviewedData(res?.data?.data)
    }
    setLoadingCriticalAlertReviewedData(false)

  }
  const handleChangePageReviewedData = (event, newPage) => {
    setCurrentPageCriticalAlertReviewedData(newPage);
  };
  const handleChangePageUnreviewedData = (event, newPage) => {
    setCurrentPageCriticalAlertUnreviewedData(newPage);
  };

  const handleChangePage=(event,newpage)=>{
    setPendingClinicianCurrentPage(newpage)
  }



  useEffect(() => {
      if (userData &&  userData.roles[0].name === "Admin") {
        fetchUnreviewedData(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData)
      }

    
  }, [currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData])


  useEffect(() => {
    if (userData &&  userData.roles[0].name === "Admin") {
    fetchReviewedData(dataLimitCriticalAlertReviewedData, currentPageCriticalAlertReviewedData)
    }

  }, [currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData])


  const GetPendingClinician = async (recordsPerPage,pendingClinicianCurrentPage) => {
    setPendingClinicianLoading(true)
    let res = await getPendingClinicians(recordsPerPage,pendingClinicianCurrentPage)
    if (res?.status === 200) {
      setPendingClinicianData(res?.data)
    }
    setPendingClinicianTotalPages(Math.ceil(res?.data?.data?.total / recordsPerPage));
    setPendingClinicianLoading(false)
  }

  useEffect(() => {
      if (userData && userData.roles[0].name === "Admin") {
        GetPendingClinician(recordsPerPage,pendingClinicianCurrentPage)
      }
        // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [recordsPerPage,pendingClinicianCurrentPage])

  const action = {
    criticalAlertUnreviewedData,
    criticalAlertReviewedData,
    handleChangePageReviewedData,
    handleChangePageUnreviewedData,
    currentPageCriticalAlertReviewedData,
    currentPageCriticalAlertUnreviewedData,
    dataLimitCriticalAlertUnreviewedData,
    totalPagesCriticalAlertReviewedData,
    totalPagesCriticalAlertUnreviewedData,
    fetchUnreviewedData,
    fetchReviewedData,
    dataLimitCriticalAlertReviewedData,
    loadingCriticalAlertReviewedData,
    loadingCriticalAlertUnreviewedData
  }

  

  return (
    <>
      <CriticalPatientsAlertTableTabs actionData={action} />
      <CliniciansRequestsTable clinicianStaff={pendingClinicianData?.data?.data} handleChangePage={handleChangePage}
       loading={pendingClinicianLoading} recordsPerPage={recordsPerPage} totalPages={pendingClinicianTotalPages}
        currentPage={pendingClinicianCurrentPage}  setCurrentPage={setPendingClinicianCurrentPage} getClinicianData={GetPendingClinician} />
    </>
  )
}
