import React, { useState } from 'react'
import CriticalPatientsAlertTableTabs from './CriticalPatientsAlertTableTabs'
import { useEffect } from 'react';
import { getCriticalAlertReviewed, getCriticalAlertUnreviewed } from '../../services/ClinicianService';
import { toast } from 'react-toastify';

export default function ClinicianDashboard({ searchData }) {
    const [criticalAlertReviewedData, setCriticalAlertReviewedData] = useState([])
    const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
    const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
    const [dataLimitCriticalAlertReviewedData] = useState(1)
    const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)



    const [criticalAlertUnreviewedData, setCriticalAlertUnreviewedData] = useState([])
    const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
    const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
    const [dataLimitCriticalAlertUnreviewedData] = useState(5)
    const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)


    const fetchUnreviewedData = async (currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData, searchData) => {
        try {
            setLoadingCriticalAlertUnreviewedData(true);
            const res = await getCriticalAlertUnreviewed(searchData ? 1 : currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData, searchData ? searchData : '');
            setTotalPagesCriticalAlertUnreviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertUnreviewedData));
            if (res.status === 200) {
                setCriticalAlertUnreviewedData(res?.data?.data);
            }
            setLoadingCriticalAlertUnreviewedData(false);
        } catch (error) {
            toast.error(error, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };



    const fetchReviewedData = async (dataLimitCriticalAlertReviewedData, currentPageCriticalAlertReviewedData, searchData) => {
        try {
            setLoadingCriticalAlertReviewedData(true)
            const res = await getCriticalAlertReviewed(dataLimitCriticalAlertReviewedData, searchData ? 1 : currentPageCriticalAlertReviewedData, searchData ? searchData : '');
            setTotalPagesCriticalAlertReviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertReviewedData));
            if (res?.status === 200) {
                setCriticalAlertReviewedData(res?.data?.data)
            }
            setLoadingCriticalAlertReviewedData(false)
        }
        catch (error) {
            toast.error(error, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }

    }
    const handleChangePageReviewedData = (event, newPage) => {
        setCurrentPageCriticalAlertReviewedData(newPage);
    };
    const handleChangePageUnreviewedData = (event, newPage) => {
        setCurrentPageCriticalAlertUnreviewedData(newPage);
    };



    useEffect(() => {
        fetchUnreviewedData(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData, searchData)
    }, [currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData, searchData])


    useEffect(() => {
        fetchReviewedData(dataLimitCriticalAlertReviewedData, currentPageCriticalAlertReviewedData, searchData)
    }, [currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData, searchData])

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
            {/* <CliniciansRequestsTable clinicianStaff={clinicianStaff} currentPage={currentPage} setCurrentPage={setCurrentPage} recordsPerPage={recordsPerPage} /> */}
        </>
    )
}
