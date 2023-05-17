import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import BloodOxygenChart from '../../common/Chart/BloodOxygenChart';
import { GetDate } from '../../../Utility/functions';
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

export default function BloodOxygenChartNavTabs({titleAction}) {
  // const { bloodOxygenData, Date, setDate, setFinalDate } = props
  const{isBloodOxygenSkeleton,bloodOxygenData, setTimeType,setDate,Date,setFinalDate}=titleAction
  const [value, setValue] = useState(0);
  // const [Date,setDate] = useState(GetDate);
  const handleChange = (event, newValue) => {
    const valueType = newValue === 0 ? 'daily' : newValue === 1 ? 'weekly' : newValue === 2 ? 'monthly' : "";
    setTimeType(valueType)
    setValue(newValue);
  };


  const ChangeDate = (NewDate) => {
    setDate(GetDate(NewDate));
  }
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
          <ChartTitle  value={value} Date={Date} ChangeDate={ChangeDate} HeartData={bloodOxygenData?.data?.summary} setFinalDate={setFinalDate} dataKey="bloodOxygen" />
        </Box>
        <TabPanel value={value} index={0}>
          {bloodOxygenData?.data?.details?.length===0 || isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {bloodOxygenData?.data?.details?.length===0 || isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}

        </TabPanel>
        <TabPanel value={value} index={2}>
          {bloodOxygenData?.data?.details?.length===0 || isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}

        </TabPanel>
        {/* <TabPanel value={value} index={3}>
            {bloodOxygenData?.data?.details?.length===0 ? <ChartSkeleton />: <BloodOxygenChart bloodOxygenData={bloodOxygenData}/>}

            </TabPanel> */}
      </Box>
    </>
  )
}
