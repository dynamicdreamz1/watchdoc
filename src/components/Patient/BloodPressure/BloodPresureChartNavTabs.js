import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import BloodPressureChart from '../../common/Chart/BloodPressureChart';
import ChartTitle from '../../common/Chart/ChartTitle';
import { ChartSkeleton } from '../../../Utility/Skeleton';

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
        <Box sx={{ p: 4 }}>
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

export default function BloodPresureChartNavTabs({ action }) {
  const { 
    // FinalDate,
    setFinalDate,
    bloodPressureData,
    // setBloodPressureData,
    // timeType,
    // setTimeType,
    handleChange,
    ChangeDate, value } = action

   
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="Chart Tabs" className='chart-tabs'>
            {/* <Tab label="Hourly" {...a11yProps(0)} /> */}
            <Tab label="Daily" {...a11yProps(0)} />
            <Tab label="Weekly" {...a11yProps(1)} />
            <Tab label="Monthly" {...a11yProps(2)} />
          </Tabs>
          <ChartTitle Date={Date} ChangeDate={ChangeDate} HeartData={bloodPressureData?.data?.summary} setFinalDate={setFinalDate} dataKey="bloodPressure" />

        </Box>
        <TabPanel value={value} index={0}>
          {bloodPressureData?.data?.details?.length===0 ? <ChartSkeleton />: <BloodPressureChart bloodPressureData={bloodPressureData} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {bloodPressureData?.data?.details?.length===0 ? <ChartSkeleton />: <BloodPressureChart bloodPressureData={bloodPressureData} />}
    
        </TabPanel>
        <TabPanel value={value} index={2}>
          {bloodPressureData?.data?.details?.length===0 ? <ChartSkeleton />: <BloodPressureChart bloodPressureData={bloodPressureData} />}

        </TabPanel>
        {/* <TabPanel value={value} index={3}>
            {bloodPressureData?.data?.details?.length===0 ? <ChartSkeleton />: <BloodPressureChart bloodPressureData={bloodPressureData}/>}

            </TabPanel> */}
      </Box>
    </>
  )
}
