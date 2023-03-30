import { Box, Tab, Tabs } from '@mui/material';

import React, { useEffect, useState } from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import { TabPanel } from '../../common/Tabs';
import { a11yProps, GetDate } from '../../../Utility/functions';
import { GetUserTodayHeartRate } from '../../../services/HelthData';
import { ChartResultRange } from '../../../Utility/Skeleton';

  

export default function HeartRateChartNavTabs(Props) {
    const [value, setValue] = React.useState(0);
    const [Date,setDate] = useState(GetDate);
    const handleChange = (event, newValue) => {
    const valueType=newValue===0?'hourly':newValue===1?'daily':newValue===2?'weekly':newValue===3?'monthly':"";

        Props?.setTimeType(valueType)
        setValue(newValue);
    };
    const [Heartrate,SetHeartRate] = useState();
     useEffect(() => {
        SetHeartRate()
        GetUserTodayHeartRate(Date).then((Data) => {
            SetHeartRate(Data) } );
    },[Date])


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
                {Heartrate ?  <ChartTitle Date={Date} ChangeDate={ChangeDate} HeartData = {Heartrate}/> : <ChartResultRange/> }
                
            </Box>
            <TabPanel value={value} index={0}>
                {/* temp commit */}
                {/* {Heartrate ? <HeartRateChart  ChangeDate={ChangeDate} HeartData = {Heartrate}/>: <ChartSkeleton /> } */}
            </TabPanel>
           
        </Box>
        </>
    )
}
