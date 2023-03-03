import { Box, Tab, Tabs } from '@mui/material';

import React from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import { TabPanel } from '../../common/Tabs';
import HeartRateChart from '../../common/Chart/HeartRateChart';
import { a11yProps } from '../../../Utility/functions';
  

export default function HeartRateChartNavTabs(Props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {Hartrate} =Props
    console.log(Hartrate);


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
                <ChartTitle/>
            </Box>
            <TabPanel value={value} index={0}>
                <HeartRateChart/>
            </TabPanel>
           
        </Box>
        </>
    )
}
