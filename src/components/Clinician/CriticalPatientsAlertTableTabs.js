/* eslint-disable no-restricted-globals */
import { Box, Pagination, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableShorting from './TableShorting';
import CriticalPatients from './Tables/CriticalPatients';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePickerInput from '../common/Table/DatePickerInput';
import { GetDate, requestAndApprovePatient, reviewedUnReviwedCommon } from '../../Utility/functions';
import { useTranslation } from 'react-i18next';
import PatientRequestAndApprove from "../../pages/PatientRequestAndApprove"
import { ClinicianGetApprovePatientsRequest, ClinicianGetPatientsRequest } from '../../services/ClinicianService';
import { UnreviewedToReviewedAlerts } from '../../services/ClinicianService';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { getCurrentUserData } from '../../services/UserService';
import { DefaultChartAlertSkeleton, TableSkeleton } from '../../Utility/Skeleton';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {

    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CriticalPatientsAlertTableTabs({ actionData }) {
    const userData = getCurrentUserData();
    const { criticalAlertUnreviewedData, criticalAlertReviewedData,
        handleChangePageReviewedData, handleChangePageUnreviewedData, totalPagesCriticalAlertReviewedData,
        totalPagesCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData,
        currentPageCriticalAlertUnreviewedData, fetchUnreviewedData, fetchReviewedData,
        dataLimitCriticalAlertReviewedData,loadingCriticalAlertReviewedData,
        loadingCriticalAlertUnreviewedData,currentPageCriticalAlertReviewedData } = actionData || [];
    const { t } = useTranslation()
    const location = useLocation();
    const [date, setDate] = useState(GetDate);
    const [value, setValue] = useState(0);
    const [viewAll, setViewAll] = useState(true)
    const [PatientRequestData, setPatientRequestData] = useState([])
    const [PatientApproveData, setPatientApproveData] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);



    const reviewedData = reviewedUnReviwedCommon(criticalAlertReviewedData?.data)
    const unReviewedData = reviewedUnReviwedCommon(criticalAlertUnreviewedData?.data)


    const [recordsPerPagePendingPatient] = useState(10);
    const [currentPagePendingPatient, setCurrentPagePendingPatient] = useState(1);
    const [totalPagesPendingPatient, setTotalPagesPendingPatient] = useState(0);
    const [dataLimitPendingPatient] = useState(5)
    const [loadingPendingPatient, setLoadingPendingPatient] = useState(false)

    const [recordsPerPageApprovePatient] = useState(10);
    const [currentPageApprovePatient, setCurrentPageApprovePatient] = useState(1);
    const [totalPagesApprovePatient, setTotalPagesApprovePatient] = useState(0);
    const [dataLimitApprovePatient] = useState(5)
    const [loadingApprovePatient, setLoadingApprovePatient] = useState(false)

    const defaultOption = [
        t('DashboardPage.SideButton.d1'),
        t('DashboardPage.SideButton.d2'),
        t('DashboardPage.SideButton.d3')

    ];
    const specificOption = [
        t('DashboardPage.SideButton.d1'),
        t('DashboardPage.SideButton.d2'),
        "Alphabetical"
    ]
    let [options, setOptions] = useState(location?.pathname === "/clinicians" ? specificOption : defaultOption)


    const ChangeDate = (NewDate) => {
        setDate(GetDate(NewDate));
    }

    const handleChange = (event, newValue) => {
        setViewAll(true)
        setValue(newValue);
    };
    // const [reviewData, setReviewData] = useState(criticalAlertReviewedData)     

    // const [patientData, setPatientData] = useState(criticalAlertUnreviewedData)

    const getPendingPatient = async (dataLimitPendingPatient, currentPagePendingPatient) => {
        setLoadingPendingPatient(true)
        let response = await ClinicianGetPatientsRequest(dataLimitPendingPatient, currentPagePendingPatient)
        setTotalPagesPendingPatient(Math.ceil(response?.data?.pending_request?.total / dataLimitPendingPatient));
        setPatientRequestData(response?.data)
        setLoadingPendingPatient(false)

    }
    const getApproveRequest = async (dataLimitPendingPatient, currentPage) => {
        setLoadingApprovePatient(true)
        let response = await ClinicianGetApprovePatientsRequest(dataLimitPendingPatient, currentPage)
        setTotalPagesApprovePatient(Math.ceil(response?.data?.patients?.total / dataLimitPendingPatient))
        setPatientApproveData(response.data)
        setLoadingApprovePatient(false)

    }
    useEffect(() => {
        getApproveRequest(dataLimitApprovePatient, currentPageApprovePatient)
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [currentPageApprovePatient, dataLimitApprovePatient])

    useEffect(() => {
        getPendingPatient(dataLimitPendingPatient, currentPagePendingPatient)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPagePendingPatient, dataLimitPendingPatient])


    const handleChangePagePendingPatient = (event, newPage) => {
        setCurrentPagePendingPatient(newPage);
    };
    const handleChangePageApprovePatient = (event, newPage) => {
        setCurrentPageApprovePatient(newPage);
    };

    useEffect(() => {
        handleClose(event, "View Less")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])


    const handleClose = (event, option) => {

        // if (option === "View All") {

        //     setOptions(prevOptions => [
        //         ...prevOptions.slice(0, prevOptions.length - 1),
        //         "View Less"
        //     ]);

        //     setViewAll(!viewAll);
        // }

        // if (option === "Newest to Oldest") {
        //     if (value === 0) {
        //         const sortedData = [...patientData].sort((a, b) => b.date - a.date);
        //         setPatientData(sortedData)
        //     }
        //     if (value === 1) {
        //         const sortedData = [...reviewData].sort((a, b) => b.date - a.date)
        //         setReviewData(sortedData)
        //     }
        // }
        // if (option === "Oldest to Newest") {
        //     if (value === 0) {
        //         const sortedData = [...patientData].sort((a, b) => (a.date - b.date))
        //         setPatientData(sortedData)
        //     }
        //     if (value === 1) {
        //         const sortedData = [...reviewData].sort((a, b) => (a.date - b.date))
        //         setReviewData(sortedData)
        //     }
        // }

        // if (option === "View Less") {
        //     setOptions(prevOptions => [
        //         ...prevOptions.slice(0, prevOptions.length - 1),
        //         "View All"
        //     ]);

        //     setViewAll(!viewAll);
        // }
        // setAnchorEl(null);
        // setSelectedOption(option);
    };

    const handleButtonClick = (e) => {

        // if (e.target.name === "View All") {
        //     setOptions(prevOptions => [
        //         ...prevOptions.slice(0, prevOptions.length - 1),
        //         "View Less"
        //     ]);
        //     setViewAll(!viewAll);
        // }

        // if (e.target.name === "View Less") {
        //     setOptions(prevOptions => [
        //         ...prevOptions.slice(0, prevOptions.length - 1),
        //         "View All"
        //     ]);
        //     setViewAll(!viewAll);
        // }
    }
    const handleClickReviewAndUnReviewed = async (id, status) => {
        const formData = new FormData();
        formData.append('critical_alert_id', id)
        const res = await UnreviewedToReviewedAlerts(formData);
        fetchUnreviewedData(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData)
        fetchReviewedData(currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData)
        if (res?.status === 200) {
            toast.success(res?.data?.message, {
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

    const action = {
        recordsPerPagePendingPatient,
        currentPagePendingPatient,
        totalPagesPendingPatient,
        dataLimitPendingPatient,
        recordsPerPageApprovePatient,
        currentPageApprovePatient,
        totalPagesApprovePatient,
        dataLimitApprovePatient,
        PatientRequestData,
        PatientApproveData,
        getPendingPatient,
        getApproveRequest,
        handleChangePageApprovePatient,
        handleChangePagePendingPatient,
        loadingApprovePatient,
        loadingPendingPatient,

    }
    return (
        <>
            <ToastContainer />
            <Box sx={{ width: '100%' }}>
                <Box className="table-header-block">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">

            {userData?.roles[0]?.name === "Admin" && location.pathname === '/adminpatient' ? "" :
                <Tab label={`Critical Alerts - Unreviewed (${criticalAlertUnreviewedData?.total ? criticalAlertUnreviewedData?.total : 0})`}  {...a11yProps(0)} />}
            {userData?.roles[0]?.name === "Admin" && location.pathname === '/adminpatient' ? "" :
                <Tab label={`Critical Alerts - Reviewed (${criticalAlertReviewedData?.total ? criticalAlertReviewedData?.total : 0})`} {...a11yProps(1)} />}
            {location?.pathname === "/patients" || location?.pathname==='/adminpatient' ?
                <Tab label={`View All Patients (${PatientApproveData?.patients?.total ? PatientApproveData?.patients?.total : 0})`} {...a11yProps(2)} />
             : ""}
                    </Tabs>
                    {/* {location.pathname === "/dashboard" ?
                        <TableShorting patientData={patientData} setPatientData={setPatientData}
                            reviewData={reviewData} setReviewData={setReviewData}
                            setViewAll={setViewAll} viewAll={viewAll} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={handleClose} options={options} selectedOption={selectedOption} />
                        : location.pathname === "/patients" ?
                            <DatePickerInput ChangeDate={ChangeDate} Date={date} />
                            : ""
                    } */}
                </Box>
               
                <>
                    <TabPanel value={value} index={0} className="table-nav-tabs-content">
        { loadingCriticalAlertUnreviewedData?<TableSkeleton />:unReviewedData?.length===0?<DefaultChartAlertSkeleton />:<CriticalPatients value={value} patientData={unReviewedData} viewAll={viewAll} handleClickStatus={handleClickReviewAndUnReviewed} />}
                    </TabPanel>
                    <TabPanel value={value} index={1} className="table-nav-tabs-content">
         {loadingCriticalAlertReviewedData?<TableSkeleton /> :reviewedData?.length===0?<DefaultChartAlertSkeleton />:<CriticalPatients value={value} patientData={reviewedData} viewAll={viewAll} handleClickStatus={handleClickReviewAndUnReviewed} />}
                    </TabPanel>
                    <TabPanel value={value} index={2} className="table-nav-tabs-content">
                        <PatientRequestAndApprove action={action} value={value} />
                    </TabPanel>

                </>
            </Box>
            {
                value === 0 && criticalAlertUnreviewedData?.data?.length !== 0 ?
                    <Pagination page={currentPageCriticalAlertUnreviewedData} onChange={handleChangePageUnreviewedData} count={totalPagesCriticalAlertUnreviewedData} variant="outlined" shape="rounded" className='table-pagination' />
                    :
                    value === 1 && criticalAlertReviewedData?.data?.length !== 0 ?
                        <Pagination page={currentPageCriticalAlertReviewedData} onChange={handleChangePageReviewedData} count={totalPagesCriticalAlertReviewedData} variant="outlined" shape="rounded" className='table-pagination' />

                        : ""


            }

            {/* {location.pathname === "/dashboard" ?
                <button name={viewAll ? 'View Less' : "View All"} className='view-all' onClick={(e) => { handleButtonClick(e) }
                }>{viewAll ? 'View Less' : "View All"}</button>
                : ""} */}

        </>

    )
}


