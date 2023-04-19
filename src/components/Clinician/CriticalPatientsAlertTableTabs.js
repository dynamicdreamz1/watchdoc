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
import { getAllPatients } from '../../services/AdminService';


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
    const [length, setLength] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allPatientData, setAllPatientData] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

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

    const [reviewData, setReviewData] = useState([
        {
            "id": 1,
            "name": "Randerson",
            "first_name": "Randerson",
            "last_name":"Michael",
            "age": "46 Year",
            "gender": "male",
            "bp": "180/80",
            "date": new Date('2023-01-16T09:10:00'),
            "hr": "80bpm",
            "bo": "97%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "83.2Kg",
            "status": "Reviewed",
            "dob":"1999-08-06",
            "height":"98",
            "email":"randerson@gmail.com",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 2,
            "name": "johnson",
            "first_name":"johnson",
            "last_name":"mike",

            "age": "23 Year",
            "gender": "male",
            "bp": "170/70",
            "date": new Date('2023-01-25T10:10:00'),
            "hr": "70bpm",
            "bo": "77%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Reviewed",
            "email":"johnson@gmail.com",
            "dob":"1999-08-06",
            "height":"102",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 3,
            "name": "batitsta",
            "first_name":"batitsta",
            "last_name":"remy",

            "age": "12 Year",
            "gender": "male",
            "bp": "160/60",
            "date": new Date('2023-02-01T12:10:00'),
            "hr": "60bpm",
            "bo": "67%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "33.2Kg",
            "status": "Reviewed",
            "email":"batitsta@gmail.com",
            "dob":"1999-08-06",
            "height":"155",
            
            "contact_number":"+91 9428137843"
        },
        {
            "id": 4,
            "name": "loosy",
            "first_name":"loosy",
            "last_name":"bella",

            "age": "35 Year",
            "gender": "female",
            "bp": "150/50",
            "date": new Date('2023-03-15T08:10:00'),
            "hr": "50bpm",
            "bo": "57%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Reviewed",
            "email":"loosy@gmail.com",
            "dob":"1999-08-06",
            "height":"145",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 5,
            "name": "Georgia",
            "first_name":"Georgia",
            "last_name":"Tella",

            "age": "55 Year",
            "gender": "female",
            "bp": "155/50",
            "date": new Date('2023-03-24T09:20:00'),
            "hr": "56bpm",
            "bo": "69%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "93.2Kg",
            "status": "Reviewed",
            "email":"Georgia@gmail.com",
            "dob":"1999-08-06",
            "height":"135",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 6,
            "name": "Perry",
            "first_name":"Perry",
            "last_name":"John",

            "age": "33 Year",
            "gender": "female",
            "bp": "159/40",
            "date": new Date('2023-03-18T06:30:00'),
            "hr": "51bpm",
            "bo": "58%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "43.2Kg",
            "status": "Reviewed",
            "dob":"1999-08-06",
            "height":"125",
            "email":"Perry@gmail.com",
            "contact_number":"+91 9428137843"
        }
    ])

    const [patientData, setPatientData] = useState([
        {
            "id": 1,
            "name": "Randerson",
            "first_name":"Randerson",
            "last_name":"Michael",
            "age": "46 Year",
            "gender": "male",
            "bp": "180/80",
            "date": new Date('2023-01-16T09:10:00'),
            "hr": "80bpm",
            "bo": "97%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "83.2Kg",
            "status": "Unreviewed",
            "dob":"1999-08-06",
            "height":"98",
            "email":"randerson@gmail.com",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 2,
            "name": "johnson",
            "first_name":"johnson",
            "last_name":"mike",
            "age": "23 Year",
            "gender": "male",
            "bp": "170/70",
            "date": new Date('2023-01-25T10:10:00'),
            "hr": "70bpm",
            "bo": "77%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Unreviewed",
            "email":"johnson@gmail.com",
            "dob":"1999-08-06",
            "height":"102",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 3,
            "name": "batitsta",
            "first_name":"batitsta",
            "last_name":"remy",
            "age": "12 Year",
            "gender": "male",
            "bp": "160/60",
            "date": new Date('2023-02-01T12:10:00'),
            "hr": "60bpm",
            "bo": "67%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "33.2Kg",
            "status": "Unreviewed",
            "email":"batitsta@gmail.com",
            "dob":"1999-08-06",
            "height":"155",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 4,
            "name": "loosy",
            "first_name":"loosy",
            "last_name":"bella",
            "age": "35 Year",
            "gender": "female",
            "bp": "150/50",
            "date": new Date('2023-03-15T08:10:00'),
            "hr": "50bpm",
            "bo": "57%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Unreviewed",
            "email":"loosy@gmail.com",
            "dob":"1999-08-06",
            "height":"145",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 5,
            "name": "Georgia",
            "first_name":"Georgia",
            "last_name":"Tella",
            "age": "55 Year",
            "gender": "female",
            "bp": "155/50",
            "date": new Date('2023-03-24T09:20:00'),
            "hr": "56bpm",
            "bo": "69%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "93.2Kg",
            "status": "Unreviewed",
            "email":"Georgia@gmail.com",
            "dob":"1999-08-06",
            "height":"135",
            "contact_number":"+91 9428137843"
        },
        {
            "id": 6,
            "name": "Perry",
            "first_name":"Perry",
            "last_name":"John",
            "age": "33 Year",
            "gender": "female",
            "bp": "159/40",
            "date": new Date('2023-03-18T06:30:00'),
            "hr": "51bpm",
            "bo": "58%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "43.2Kg",
            "status": "Unreviewed",
            "email":"Perry@gmail.com",
            "dob":"1999-08-06",
            "height":"125",
            "contact_number":"+91 9428137843"
        }
    ]
    )



    const getPatient = async () => {
        setLoading(true)
        setLength(true)
        let res = await getAllPatients()
        setLength(false)
        setLoading(false)
        setAllPatientData(res?.data)
    }

    useEffect(() => {
        getPatient()
    }, [])

 

   


    

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

    return (
        <>

            <Box sx={{ width: '100%' }}>
                <Box className="table-header-block">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                        <Tab label={`Critical Alerts - Unreviewed (${patientData.length})`}  {...a11yProps(0)} />
                       <Tab label={`Critical Alerts - Reviewed (${reviewData.length})`} {...a11yProps(1)} /> 
                        {location?.pathname === "/patients" ?
                            <Tab label={`View All Patients (${length ? 0 : allPatientData?.data?.length})`} {...a11yProps(2)} />
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
                            <CriticalPatients value={value} patientData={patientData} viewAll={viewAll} />
                        </TabPanel>
                         <TabPanel value={value} index={1} className="table-nav-tabs-content">
                            <CriticalPatients value={value}  patientData={reviewData} viewAll={viewAll} />
                        </TabPanel> 
                        <TabPanel value={value} index={2} className="table-nav-tabs-content">
                            <CriticalPatients value={value} loading={loading} patientData={allPatientData?.data} viewAll={viewAll} />
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


