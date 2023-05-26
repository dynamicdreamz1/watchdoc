/* eslint-disable no-restricted-globals */
import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableShorting from './TableShorting';
import CriticalPatients from './Tables/CriticalPatients';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePickerInput from '../common/Table/DatePickerInput';
import { GetDate } from '../../Utility/functions';
import { useTranslation } from 'react-i18next';
import PatientRequestAndApprove from "../../pages/PatientRequestAndApprove"
import { ClinicianGetApprovePatientsRequest, ClinicianGetPatientsRequest } from '../../services/ClinicianService';


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

export default function CriticalPatientsAlertTableTabs() {
    const { t } = useTranslation()
    const location = useLocation();
    const [date, setDate] = useState(GetDate);
    const [value, setValue] = useState(0);
    const [viewAll, setViewAll] = useState(true)
    const [PatientRequestData, setPatientRequestData] = useState([])
    const [PatientApproveData, setPatientApproveData] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);



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

    const [reviewData, setReviewData] = useState(
        [
            {
                "id": 1,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "Reviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 2,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "Reviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 3,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "Reviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 4,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "Reviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 5,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "Reviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },

        ])

    const [patientData, setPatientData] = useState(
        [
            {
                "id": 1,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 2,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 3,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 4,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 5,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },
            {
                "id": 6,
                "name": "sanjay patel",
                "first_name": "sanjay",
                "last_name": "patel",
                "age": "No recording",
                "gender": "male",
                "status": "unreviewed",
                "metaData": {
                    "heart_rate": {
                        "date": "11-05-23 05:50:21",
                        "count": 74
                    },
                    "blood_pressure": {
                        "date": "11-05-23 01:00:09",
                        "count": "110/90"
                    },
                    "blood_oxygen": {
                        "date": "11-05-23 01:00:09",
                        "count": 96
                    },
                    "sleep": {
                        "date": "11-05-23 12:21:31",
                        "count": 28080
                    },
                    "weight": {
                        "date": "11-05-23 01:00:09",
                        "count": 65
                    },
                    "step": {
                        "date": "16-05-23 12:00:00",
                        "count": 0
                    },
                    "temperature": {
                        "date": "11-05-23 12:16:22",
                        "count": 39
                    }
                }
            },


        ]
    )





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

        if (option === "View All") {

            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View Less"
            ]);

            setViewAll(!viewAll);
        }

        if (option === "Newest to Oldest") {
            if (value === 0) {
                const sortedData = [...patientData].sort((a, b) => b.date - a.date);
                setPatientData(sortedData)
            }
            if (value === 1) {
                const sortedData = [...reviewData].sort((a, b) => b.date - a.date)
                setReviewData(sortedData)
            }
        }
        if (option === "Oldest to Newest") {
            if (value === 0) {
                const sortedData = [...patientData].sort((a, b) => (a.date - b.date))
                setPatientData(sortedData)
            }
            if (value === 1) {
                const sortedData = [...reviewData].sort((a, b) => (a.date - b.date))
                setReviewData(sortedData)
            }
        }

        if (option === "View Less") {
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View All"
            ]);

            setViewAll(!viewAll);
        }
        setAnchorEl(null);
        setSelectedOption(option);
    };

    const handleButtonClick = (e) => {

        if (e.target.name === "View All") {
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View Less"
            ]);
            setViewAll(!viewAll);
        }

        if (e.target.name === "View Less") {
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View All"
            ]);
            setViewAll(!viewAll);
        }
    }
    const handleClickReview = async (id, status) => {

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
        loadingPendingPatient

    }


    return (
        <>

            <Box sx={{ width: '100%' }}>
                <Box className="table-header-block">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                        <Tab label={`Critical Alerts - Unreviewed (${patientData.length})`}  {...a11yProps(0)} />
                        <Tab label={`Critical Alerts - Reviewed (${reviewData.length})`} {...a11yProps(1)} />
                        {location?.pathname === "/patients" ?
                            <Tab label={`View All Patients (${PatientApproveData?.patients?.total ? PatientApproveData?.patients?.total : 0})`} {...a11yProps(2)} />
                            : ""}
                    </Tabs>
                    {location.pathname === "/dashboard" ?
                        <TableShorting patientData={patientData} setPatientData={setPatientData}
                            reviewData={reviewData} setReviewData={setReviewData}
                            setViewAll={setViewAll} viewAll={viewAll} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={handleClose} options={options} selectedOption={selectedOption} />
                        : location.pathname === "/patients" ?
                            <DatePickerInput ChangeDate={ChangeDate} Date={date} />
                            : ""
                    }
                </Box>

                <>
                    <TabPanel value={value} index={0} className="table-nav-tabs-content">
                        <CriticalPatients value={value} patientData={patientData} viewAll={viewAll} handleClickStatus={handleClickReview} />
                    </TabPanel>
                    <TabPanel value={value} index={1} className="table-nav-tabs-content">
                        <CriticalPatients value={value} patientData={reviewData} viewAll={viewAll} handleClickStatus={handleClickReview} />
                    </TabPanel>
                    <TabPanel value={value} index={2} className="table-nav-tabs-content">
                        {/* <CriticalPatients value={value} loading={loading} patientData={PatientRequestData?.data} viewAll={viewAll} /> */}
                        <PatientRequestAndApprove action={action} />
                    </TabPanel>

                </>
            </Box>

            {location.pathname === "/dashboard" ?
                <button name={viewAll ? 'View Less' : "View All"} className='view-all' onClick={(e) => { handleButtonClick(e) }
                }>{viewAll ? 'View Less' : "View All"}</button>
                : ""}

        </>

    )
}


