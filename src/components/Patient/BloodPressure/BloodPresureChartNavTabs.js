import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import { GetDate } from '../../../Utility/functions';
import BloodPressureChart from '../../common/Chart/BloodPressureChart';
import ChartTitle from '../../common/Chart/ChartTitle';
import moment from 'moment';
import { GetUserBloodPressureData } from '../../../services/HelthData';
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

export default function BloodPresureChartNavTabs({ terraId }) {
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const defaultEndDate = moment().format('YYYY-MM-DD');
  const [FinalDate, setFinalDate] = useState({ start: defaultStartDate, end: defaultEndDate });
  const [bloodPressureData, setBloodPressureData] = useState()
  const [timeType, setTimeType] = useState('daily')

  const [value, setValue] = React.useState(0);
  const [Date, setDate] = useState(GetDate);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ChangeDate = (NewDate) => {
    setDate(GetDate(NewDate));
  }



  const fetchData = async () => {

    const result = await GetUserBloodPressureData(timeType, terraId, FinalDate)
    setBloodPressureData(result);
  }

  useEffect(() => {
    if (terraId) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, timeType, FinalDate]);



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
          {bloodPressureData ? <BloodPressureChart bloodPressureData={bloodPressureData} /> : <ChartSkeleton />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {bloodPressureData ? <BloodPressureChart bloodPressureData={bloodPressureData} /> : <ChartSkeleton />}

        </TabPanel>
        <TabPanel value={value} index={2}>
          {bloodPressureData ? <BloodPressureChart bloodPressureData={bloodPressureData} /> : <ChartSkeleton />}

        </TabPanel>
        {/* <TabPanel value={value} index={3}>
            {bloodPressureData ? <BloodPressureChart bloodPressureData={bloodPressureData}/>:<ChartSkeleton />}

            </TabPanel> */}
      </Box>
    </>
  )
}
