import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import ChartTitle from '../../common/Chart/ChartTitle';
import { TabPanel } from '../../common/Tabs';
import { a11yProps, GetDate } from '../../../Utility/functions';
import { ChartSkeleton } from '../../../Utility/Skeleton';
import HeartRateChart from '../../common/Chart/HeartRateChart';


export default function HeartRateChartNavTabs({action}) {
    const {isHeartrateSkeleton,setTimeType,HeartRateAvg,setDate,setFinalDate,Date}=action;
    const [value, setValue] = React.useState(0);
    // const [Date,setDate] = useState(GetDate);
    const handleChange = (event, newValue) => {
        const valueType = newValue === 0 ? 'daily' : newValue === 1 ? 'weekly' : newValue === 2 ? 'monthly' : "";

        setTimeType(valueType)
        setValue(newValue);
    };
    // const [Heartrate, SetHeartRate] = useState();


    // useEffect(() => {
    //     SetHeartRate()
    //     // GetUserTodayHeartRate(Date).then((Data) => {
    //     //     SetHeartRate(Data) } );
    //     const fetchData = async () => {

    //         await getLatestMeasurement().then(response => response.data).then(response => {
    //             SetHeartRate(response);
    //         })
    //     }
    //     fetchData()
    // }, [Date])

    const ChangeDate = (NewDate) => {
        setDate(GetDate(NewDate));
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
                    {/* {Heartrate ?  */}
                    <ChartTitle value={value} Date={Date} ChangeDate={ChangeDate} HeartData={HeartRateAvg?.data?.summary} setFinalDate={setFinalDate} dataKey="heartrate" />
                    {/* : <ChartResultRange />} */}

                </Box>
                <TabPanel value={value} index={0}>
                {HeartRateAvg?.data?.details?.length===0 || isHeartrateSkeleton? <ChartSkeleton />:<HeartRateChart ChangeDate={ChangeDate} HeartData={HeartRateAvg} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                   {HeartRateAvg?.data?.details?.length===0 || isHeartrateSkeleton ? <ChartSkeleton />: <HeartRateChart ChangeDate={ChangeDate} HeartData={HeartRateAvg} />}
                </TabPanel>
                <TabPanel value={value} index={2}>
                   {HeartRateAvg?.data?.details?.length===0 || isHeartrateSkeleton ? <ChartSkeleton />: <HeartRateChart ChangeDate={ChangeDate} HeartData={HeartRateAvg} />}
                </TabPanel>

            </Box>
        </>
    )
}
