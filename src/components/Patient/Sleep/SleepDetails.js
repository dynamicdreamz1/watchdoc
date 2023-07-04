import React, { useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import moment from 'moment'
import MainDetailsCardForSleep from '../../common/DetailCards/MainDetailsCardForSleep';
// import AlertTriggerCardSleep from '../../common/DetailCards/AlertTriggerCardSleep'
// import { defaultSleepAlertTrigger } from '../../../Utility/DefaultObject'
import { DefaultChartSkeleton } from '../../../Utility/Skeleton';
// import SleepChartNavTabs from './SleepChartNavTabs';

export default function PatientSleepDetails({ terraId, latestData }) {
  const start = moment().format('YYYY-MM-DD');
  const [timeType, setTimeType] = useState('daily')
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [isSleepSkeleton,setIsSleepSkeleton]=useState(false);
  const [SleepData, setSleepData] = useState()


  const fetchData = async () => {
    setIsSleepSkeleton(true)
    if (timeType && FinalDate) {
    const result = await GetUserBloodOxyenData(timeType, terraId, FinalDate)
    setSleepData(result);
    setIsSleepSkeleton(false)
    }
  }

  useEffect(() => {
    if (terraId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, FinalDate]);

  return (
    <>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          <MainDetailsCardForSleep HeartRateAvg={SleepData?.data?.summary} latestData={latestData} />
          <ShowAllDataCard />
        </div>
        <div className='chart-wrapper'>
          <DefaultChartSkeleton />
        </div>
      </div>
    </>
  )
}
