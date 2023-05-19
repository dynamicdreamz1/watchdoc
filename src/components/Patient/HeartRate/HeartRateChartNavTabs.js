import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import { TabPanel } from '../../common/Tabs';
import { a11yProps } from '../../../Utility/functions';
import { ChartSkeleton, DefaultChartSkeleton } from '../../../Utility/Skeleton';
import HeartRateChart from '../../common/Chart/HeartRateChart';

export default function HeartRateChartNavTabs({ action }) {
    const { isHeartrateSkeleton, setTimeType, HeartRateAvg, setFinalDate, setHeartRateValue } = action;
    const [value, setValue] = React.useState(0);
    const HeartData = HeartRateAvg?.data?.summary;

    const handleChange = (event, newValue) => {
        const valueType = newValue === 0 ? 'daily' : newValue === 1 ? 'weekly' : newValue === 2 ? 'monthly' : "";
        setHeartRateValue()
        setTimeType(valueType)
        setValue(newValue);
    };

    const titleAction = {
        setHeartRateValue,
        value,
        HeartData,
        setFinalDate,
        dataKey: "heartrate"
    }


    return (
        <>

            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="Chart Tabs" className='chart-tabs'>
                        {/* <Tab label="" {...a11yProps(0)} /> */}
                        <Tab label="Daily" {...a11yProps(0)} />
                        <Tab label="Weekly" {...a11yProps(1)} />
                        <Tab label="Monthly" {...a11yProps(2)} />
                    </Tabs>

                    <ChartTitle setHeartRateValue titleAction={titleAction} />
                    {/* : <ChartResultRange />} */}

                </Box>
                <TabPanel value={value} index={0}>
                    {HeartRateAvg?.data?.details?.length === 0 ? <DefaultChartSkeleton /> :
                        isHeartrateSkeleton ? <ChartSkeleton /> :
                            <HeartRateChart HeartData={HeartRateAvg} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {HeartRateAvg?.data?.details?.length === 0 ? <DefaultChartSkeleton /> :
                        isHeartrateSkeleton ? <ChartSkeleton /> :
                            <HeartRateChart HeartData={HeartRateAvg} />}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {HeartRateAvg?.data?.details?.length === 0 ? <DefaultChartSkeleton /> :
                        isHeartrateSkeleton ? <ChartSkeleton /> :
                            <HeartRateChart HeartData={HeartRateAvg} />}
                </TabPanel>

            </Box>
        </>
    )
}
