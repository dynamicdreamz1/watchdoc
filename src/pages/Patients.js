import React, { useEffect, useState } from 'react'
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import CriticalPatientsAlertTableTabs from '../components/Clinician/CriticalPatientsAlertTableTabs';
import { getCriticalAlertReviewed, getCriticalAlertUnreviewed } from '../services/ClinicianService';

const Patients = () => {
  const [criticalAlertReviewedData,setCriticalAlertReviewedData]=useState([])
  const [recordsPerPageCriticalAlertReviewedData] = useState(10);
  const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
  const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
  const [dataLimitCriticalAlertReviewedData] = useState(5)
  const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)



  const [criticalAlertUnreviewedData,setCriticalAlertUnreviewedData]=useState([])
  const [recordsPerPageCriticalAlertUnreviewedData] = useState(10);
  const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
  const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
  const [dataLimitCriticalAlertUnreviewedData] = useState(5)
  const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)


  const fetchUnreviewedData=async(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData)=>{
      setLoadingCriticalAlertUnreviewedData(true)
      const res=await getCriticalAlertUnreviewed(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData);
      if(res.status===200){
      setCriticalAlertUnreviewedData(res?.data?.data)
      }
      setLoadingCriticalAlertUnreviewedData(false)
  }


  const fetchReviewedData=async(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData)=>{
      const res=await getCriticalAlertReviewed(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData);
      if(res?.status===200){
      setCriticalAlertReviewedData(res?.data?.data)
      }
      setLoadingCriticalAlertReviewedData(false)

  }


  useEffect(()=>{
      fetchUnreviewedData(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData)
  },[currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData])


  useEffect(()=>{
      fetchReviewedData(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData)
  },[currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData])

  const action={
    criticalAlertUnreviewedData,
    criticalAlertReviewedData
}


  return (
    <React.Fragment>
        <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <CriticalPatientsAlertTableTabs actionData={action}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Patients;
