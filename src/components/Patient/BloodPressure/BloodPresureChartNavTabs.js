import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
import { GetDate } from '../../../Utility/functions';
import BloodPressureChart from '../../common/Chart/BloodPressureChart';
import ChartTitle from '../../common/Chart/ChartTitle';

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

export default function     BloodPresureChartNavTabs() {

    const [value, setValue] = React.useState(0);
    const [Date,setDate] = useState(GetDate);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ChangeDate=(NewDate)=>{
      setDate(GetDate(NewDate));
  }

    return (
        <>
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="Chart Tabs" className='chart-tabs'>
                    <Tab label="Hourly" {...a11yProps(0)} />
                    <Tab label="Daily" {...a11yProps(1)} />
                    <Tab label="Weekly" {...a11yProps(2)} />
                    <Tab label="Monthly" {...a11yProps(3)} />
                </Tabs>
                <ChartTitle Date={Date} ChangeDate={ChangeDate}/>
                
            </Box>
            <TabPanel value={value} index={0}>
              <BloodPressureChart/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              <BloodPressureChart/>
            </TabPanel>
        </Box>
        </>
    )
}
