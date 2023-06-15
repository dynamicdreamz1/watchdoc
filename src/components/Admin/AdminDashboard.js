import React, { useState, useEffect } from 'react'
import { getPendingPatients } from '../../services/AdminService';
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'
import { getAdminCriticalAlertReviewed,getAdminCriticalAlertunReviewed } from '../../services/AdminService';
import CliniciansTableTabs from '../Clinician/CliniciansTableTabs';


export default function AdminDashboard() {

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
      <CliniciansRequestsTable  /> 
    </>
  )
}
