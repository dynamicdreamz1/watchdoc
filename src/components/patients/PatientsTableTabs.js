import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
import RedAlertUnreviewed from '../dashboard/RedAlertUnreviewed';
import MeasurmentCard from './MeasurmentCard';
import ReminderCard from './ReminderCard';
import AlertCard from './AlertCard';
import ClinicianProfileBar from '../clinicians/ClinicianProfileBar';
import PatientProfileBar from './PatientProfileBar';

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
            <Typography>{children}</Typography>
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

export default function PatientsTableTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
        <PatientProfileBar/>
        <div className='alert-cards-wrapper mt-22'>
          <div className='section-title d-flex align-items-center justify-content-between'>
            <h4>Critical Alerts</h4>
            <button type='button' className='view-all-btn'>View All Alerts (41)</button>
          </div>
          <div className='wrapper'>
            <AlertCard/>
            <AlertCard/>
            <AlertCard/>
          </div>
        </div>
        <div className='measurment-cards-wrapper mt-22'>
          <div className='section-title'>
            <h4>Lastest Measurements</h4>
          </div>
          <div className='wrapper d-flex flex-wrap'>
            <MeasurmentCard/>
            <MeasurmentCard/>
            <MeasurmentCard/>
            <MeasurmentCard/>
            <MeasurmentCard/>
            <MeasurmentCard/>
          </div>
        </div>
        <div className='reminder-cards-wrapper mt-22'>
          <div className='section-title'>
            <h4>Reminders</h4>

          </div>
          <div className='d-flex flex-wrap'>
            <ReminderCard/>
            <ReminderCard/>
            <ReminderCard/>
          </div>
        </div>
        <Box sx={{ width: '100%' }}>
          <Box className="table-header-block">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                  <Tab label="Red Alerts - Unreviewed (12)" {...a11yProps(0)} />
                  <Tab label="Red Alerts - Reviewed (6)" {...a11yProps(1)} />
                  <Tab label="View All Patients (229)" {...a11yProps(2)} />
              </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="table-nav-tabs-content">
              <RedAlertUnreviewed/>
          </TabPanel>
          <TabPanel value={value} index={1}>
              Test
          </TabPanel>
          <TabPanel value={value} index={2}>
              Test
          </TabPanel>
        </Box>
        </>
    )
}
