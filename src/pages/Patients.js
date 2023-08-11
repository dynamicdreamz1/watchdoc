import React, { useEffect, useState } from 'react'
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import CriticalPatientsAlertTableTabs from '../components/Clinician/CriticalPatientsAlertTableTabs';
import { getCriticalAlertReviewed, getCriticalAlertUnreviewed } from '../services/ClinicianService';

const Patients = () => {
  const [criticalAlertReviewedData,setCriticalAlertReviewedData]=useState([])
  const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
  const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
  const [dataLimitCriticalAlertReviewedData] = useState(5)
  const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)
  const [searchData,setSearchData]=useState("")


  const [criticalAlertUnreviewedData,setCriticalAlertUnreviewedData]=useState([])
  const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
  const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
  const [dataLimitCriticalAlertUnreviewedData] = useState(5)
  const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)


  const fetchUnreviewedData=async(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData)=>{
      setLoadingCriticalAlertUnreviewedData(true)
      const res=await getCriticalAlertUnreviewed(currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData,searchData?searchData:"");
      setTotalPagesCriticalAlertUnreviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertUnreviewedData))
      if(res.status===200){
      setCriticalAlertUnreviewedData(res?.data?.data)
      }
      setLoadingCriticalAlertUnreviewedData(false)
  }


  const fetchReviewedData=async(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData,searchData)=>{
      const res=await getCriticalAlertReviewed(dataLimitCriticalAlertReviewedData,searchData?1:currentPageCriticalAlertReviewedData,searchData?searchData:"");
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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentPageCriticalAlertUnreviewedData,dataLimitCriticalAlertUnreviewedData])


  useEffect(()=>{
      fetchReviewedData(dataLimitCriticalAlertReviewedData,currentPageCriticalAlertReviewedData,searchData)
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData,searchData])

  const action={
    criticalAlertUnreviewedData,
    criticalAlertReviewedData,
    handleChangePageReviewedData,
    handleChangePageUnreviewedData,
    currentPageCriticalAlertReviewedData,
    totalPagesCriticalAlertReviewedData,
    totalPagesCriticalAlertUnreviewedData,
    fetchUnreviewedData,
    currentPageCriticalAlertUnreviewedData,
    dataLimitCriticalAlertUnreviewedData,
    loadingCriticalAlertReviewedData,
    loadingCriticalAlertUnreviewedData,
    fetchReviewedData
}


  return (
    <React.Fragment>
        <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header setSearchData={setSearchData} searchData={searchData}/>
          <CriticalPatientsAlertTableTabs actionData={action}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Patients;
