/* eslint-disable no-restricted-globals */
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import AdminPatientRequestAnd from '../../../pages/AdminPatientRequestAndApprove';



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

export default function AdminCriticalPatientsAlertTableTabs({ action }) {
    const {adminAllPatientsData,adminPatientCurrentPage,AdminPatientdataLimit,fetchAllPatient,adminPatientloading,
        handleChangeAdminPagination,adminPatientTotalPages}=action;
    const { t } = useTranslation()   
    const [value,setValue]=useState(2)


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
    // let [options, setOptions] = useState(location?.pathname === "/clinicians" ? specificOption : defaultOption)


   

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleChangePagePendingPatient = (event, newPage) => {
        // setCurrentPagePendingPatient(newPage);
    };
    const handleChangePageApprovePatient = (event, newPage) => {
        // setCurrentPageApprovePatient(newPage);
    };


   
    // const handleClickReviewAndUnReviewed = async (id, status) => {
    //     const formData = new FormData();
    //     formData.append('critical_alert_id', id)
    //     const res = await UnreviewedToReviewedAlerts(formData);
    //     fetchUnreviewedData(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData)
    //     fetchReviewedData(currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData)
    //     if (res?.status === 200) {
    //         toast.success(res?.data?.message, {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "colored",
    //         });
    //     }

    // }

    const actionData = {
        adminAllPatientsData,
        adminPatientCurrentPage,
        AdminPatientdataLimit,
        fetchAllPatient,
        adminPatientloading,
        handleChangeAdminPagination,
        adminPatientTotalPages

    }
    return (
        <>
            <ToastContainer />
            <Box sx={{ width: '100%' }}>
                <Box className="table-header-block">
                    <Tabs value={value} aria-label="basic tabs example" className="table-nav-tabs">

            
                <Tab label={`All-patients (${adminAllPatientsData?.total?adminAllPatientsData?.total:0})`}  {...a11yProps(2)} />           
                    </Tabs>
                   
                </Box>
               
                <>
                    
                    <TabPanel value={value} index={2} className="table-nav-tabs-content">
                        <AdminPatientRequestAnd action={actionData} value={value} />
                    </TabPanel>

                </>
            </Box>
            
  {/* <Pagination page={currentPageCriticalAlertUnreviewedData} onChange={handleChangePageUnreviewedData} count={totalPagesCriticalAlertUnreviewedData} variant="outlined" shape="rounded" className='table-pagination' /> */}
                   


            

          

        </>

    )
}


