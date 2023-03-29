/* eslint-disable no-restricted-globals */
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableShorting from './TableShorting';
import CriticalPatients from './Tables/CriticalPatients';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


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
    const location=useLocation();

    const [value, setValue] = React.useState(0);
    const [viewAll, setViewAll] = useState(false)
    

    const handleChange = (event, newValue) => {
        setViewAll(false)
        setValue(newValue);
    };
    const [reviewData, setReviewData] = useState([])
    const [patientData, setPatientData] = useState([
        {
            "id": 1,
            "name": "Randerson, Michael",
            "age": "46 Year",
            "gender": "Male",
            "bp": "180/80",
            "date": new Date('2023-01-16T09:10:00'),
            "hr": "80bpm",
            "bo": "97%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "83.2Kg",
            "status": "Unreviewed"
        },
        {
            "id": 2,
            "name": "johnson",
            "age": "23 Year",
            "gender": "Male",
            "bp": "170/70",
            "date": new Date('2023-01-25T10:10:00'),
            "hr": "70bpm",
            "bo": "77%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Unreviewed"
        },
        {
            "id": 3,
            "name": "batitsta",
            "age": "12 Year",
            "gender": "Male",
            "bp": "160/60",
            "date": new Date('2023-02-01T12:10:00'),
            "hr": "60bpm",
            "bo": "67%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "33.2Kg",
            "status": "Unreviewed"
        },
        {
            "id": 4,
            "name": "loosy",
            "age": "35 Year",
            "gender": "Female",
            "bp": "150/50",
            "date": new Date('2023-03-15T08:10:00'),
            "hr": "50bpm",
            "bo": "57%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "53.2Kg",
            "status": "Unreviewed"
        },
        {
            "id": 5,
            "name": "Georgia",
            "age": "55 Year",
            "gender": "Female",
            "bp": "155/50",
            "date": new Date('2023-03-24T09:20:00'),
            "hr": "56bpm",
            "bo": "69%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "93.2Kg",
            "status": "Unreviewed"
        },
        {
            "id": 6,
            "name": "Perry",
            "age": "33 Year",
            "gender": "Female",
            "bp": "159/40",
            "date": new Date('2023-03-18T06:30:00'),
            "hr": "51bpm",
            "bo": "58%",
            "bg": "No recording",
            "temp": "No recording",
            "wt": "43.2Kg",
            "status": "Unreviewed"
        }
    ]
    )
         let finalData=[];
    if(reviewData !== undefined){
        finalData=[...patientData,...reviewData]
    }
    const handleClickReview = (data) => {
        const filterData = patientData?.filter((el) => el?.id === data?.id)
        const finalData = patientData?.filter((el) => el?.id !== data?.id)
        setPatientData(finalData)
        const tempData = filterData.map((el) => {
            el.status = "Reviewed"
            return el;
        })

        const mulitReviewData = [...reviewData, ...tempData]
        setReviewData(mulitReviewData)
    }

    const handleClickUnReview = (data) => {
        const filterData = reviewData?.filter((el) => el?.id !== data?.id)
        const tempData = [{ ...data, "status": "UnReviewed" }]
        setPatientData(patientData.concat(tempData))
        setReviewData(filterData)

    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box className="table-header-block">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                        <Tab label={`Critical Alerts - Unreviewed (${patientData.length})`}  {...a11yProps(0)} />
                        <Tab label={`Critical Alerts - Unreviewed (${reviewData.length})`} {...a11yProps(1)} />
                       {location?.pathname==="/patients" ? 
                        <Tab label={`View All Patients (${patientData.length})`} {...a11yProps(2)} /> 
                        : "" }
                    </Tabs>
                    <TableShorting patientData={patientData} setPatientData={setPatientData} 
                    reviewData={reviewData} setReviewData={setReviewData}
                      setViewAll={setViewAll} viewAll={viewAll} />
                </Box>
                <TabPanel value={value} index={0} className="table-nav-tabs-content">
                    <CriticalPatients patientData={patientData} handleClickStatus={handleClickReview} viewAll={viewAll} />
                </TabPanel>
                <TabPanel value={value} index={1} className="table-nav-tabs-content">
                    <CriticalPatients patientData={reviewData} handleClickStatus={handleClickUnReview} viewAll={viewAll} />
                </TabPanel>
                <TabPanel value={value} index={2} className="table-nav-tabs-content">
                    <CriticalPatients patientData={patientData} reviewData={reviewData} mergeAllData={finalData} handleClickStatus={handleClickUnReview} viewAll={viewAll} />
                </TabPanel>
            </Box>
        </>
    )
}
