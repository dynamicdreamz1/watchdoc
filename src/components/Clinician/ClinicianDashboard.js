import React, { useState } from 'react'
import CliniciansRequestsTable from './CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from './CriticalPatientsAlertTableTabs'
import { useEffect } from 'react';
import { getCriticalAlertReviewed, getCriticalAlertUnreviewed } from '../../services/ClinicianService';

export default function ClinicianDashboard() {

 
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage=5

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
        <>
            <CriticalPatientsAlertTableTabs actionData={action}/>
            {/* <CliniciansRequestsTable clinicianStaff={clinicianStaff} currentPage={currentPage} setCurrentPage={setCurrentPage} recordsPerPage={recordsPerPage} /> */}
        </>
    )
}
