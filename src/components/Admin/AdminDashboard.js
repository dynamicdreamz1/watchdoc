import React, { useState, useEffect } from 'react'
import { getPendingPatients } from '../../services/AdminService';
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'
import { getAdminCriticalAlertReviewed,getAdminCriticalAlertunReviewed } from '../../services/AdminService';


export default function AdminDashboard() {
  const recordsPerPage = 5;
  const [pendingPatientsData, setPendingPatientsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [criticalAlertReviewedData,setCriticalAlertReviewedData]=useState([])
  const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
  const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
  const [dataLimitCriticalAlertReviewedData] = useState(5)
  const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)



  const [criticalAlertUnreviewedData,setCriticalAlertUnreviewedData]=useState([])
  const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
  const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
  const [dataLimitCriticalAlertUnreviewedData] = useState(5)
  const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)


  console.log("totalPagesCriticalAlertReviewedData",totalPagesCriticalAlertReviewedData);
  const fetchUnreviewedData=async(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData)=>{
      setLoadingCriticalAlertUnreviewedData(true)
      const res=await getAdminCriticalAlertunReviewed(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData);
    setTotalPagesCriticalAlertUnreviewedData(Math.ceil(res?.data?.data?.total  / dataLimitCriticalAlertUnreviewedData))
      if(res.status===200){
      setCriticalAlertUnreviewedData(res?.data?.data)
      }
      setLoadingCriticalAlertUnreviewedData(false)
  }


  const fetchReviewedData=async(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData)=>{
      setLoadingCriticalAlertReviewedData(true)
      const res=await getAdminCriticalAlertReviewed(currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData,);
      console.log("res",res);
      setTotalPagesCriticalAlertReviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertReviewedData));
      if(res?.status===200){
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
  


  useEffect(()=>{
      fetchUnreviewedData(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData)
  },[currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData])


  useEffect(()=>{
      fetchReviewedData(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData)
  },[currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData])

 
  const GetData = async () => {
    setLoading(true)
    let res = await getPendingPatients()
    let data = []
    const maxKey = Object.keys(res?.data)?.reduce((a, b) => {
      return a > b ? a : b;
    });

    for (let i = 0; i <= maxKey; i++) {
      if (res?.data[i.toString()]) {
        data?.push(res?.data[i.toString()])
      }
    }
    setPendingPatientsData(data)
    setLoading(false)
  }

  useEffect(() => {
    GetData()
  }, [])

  const action={
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
    currentPageCriticalAlertReviewedData,
    loadingCriticalAlertReviewedData,
    loadingCriticalAlertUnreviewedData
    }
  

  return (
    <>
      <CriticalPatientsAlertTableTabs actionData={action} />
      {/* <CliniciansRequestsTable clinicianStaff={pendingPatientsData} loading={loading} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
    </>
  )
}
