import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import BloodOxygenChart from '../../common/Chart/BloodOxygenChart';
import { ChartSkeleton, DefaultChartSkeleton } from '../../../Utility/Skeleton';

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
  const{isBloodOxygenSkeleton,bloodOxygenData, setTimeType,setFinalDate,setBloodOxygenData}=titleAction
  const [value, setValue] = useState(0);
  const HeartData=bloodOxygenData?.data?.summary
  const handleChange = (event, newValue) => {
    setBloodOxygenData()
    const valueType = newValue === 0 ? 'daily' : newValue === 1 ? 'weekly' : newValue === 2 ? 'monthly' : "";
    setTimeType(valueType)
    setValue(newValue);
  };
  const chartTitleAction={
    value,
    HeartData,
    setFinalDate,
    dataKey:"bloodOxygen"
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
          <ChartTitle titleAction={chartTitleAction} setData={setBloodOxygenData} />
        </Box>        
        <TabPanel value={value} index={0}>
          {bloodOxygenData?.data?.details?.length===0 ? <DefaultChartSkeleton /> : isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {bloodOxygenData?.data?.details?.length===0 ? <DefaultChartSkeleton /> : isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {bloodOxygenData?.data?.details?.length===0 ? <DefaultChartSkeleton /> : isBloodOxygenSkeleton ? <ChartSkeleton />:<BloodOxygenChart bloodOxygenData={bloodOxygenData} />}
        </TabPanel>
      </Box>
    </>
  )
}
