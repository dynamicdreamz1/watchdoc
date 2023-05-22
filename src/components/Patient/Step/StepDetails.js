import React, { useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import moment from 'moment'
import MainDetailsCardForStep from '../../common/DetailCards/MainDetailsCardForStep';
// import AlertTriggerCardSleep from '../../common/DetailCards/AlertTriggerCardSleep'
import { defaultSleepAlertTrigger } from '../../../Utility/DefaultObject'
import { DefaultChartSkeleton } from '../../../Utility/Skeleton';
// import SleepChartNavTabs from './SleepChartNavTabs';

export default function PatientSleepDetails({ terraId, latestData }) {
  const start = moment().format('YYYY-MM-DD');
  const [timeType, setTimeType] = useState('daily')
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [isStepSkeleton,setIsStepSkeleton]=useState(false);
  const [StepData, setStepData] = useState()


  const fetchData = async () => {
    setIsStepSkeleton(true)
    if (timeType && FinalDate) {
    const result = await GetUserBloodOxyenData(timeType, terraId, FinalDate)
    setStepData(result);
    setIsStepSkeleton(false)
    }
  }

  useEffect(() => {
    if (terraId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, FinalDate]);

  const titleAction={
    isStepSkeleton,
    StepData,
    setTimeType,
    setFinalDate,
    setStepData

  }


  return (
    <>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          <MainDetailsCardForStep HeartRateAvg={StepData?.data?.summary} latestData={latestData} />
          <ShowAllDataCard />
          {/* {defaultSleepAlertTrigger && defaultSleepAlertTrigger?.map((el, I) => {
            return (
              // <AlertTriggerCardSleep HeartRateAvg={StepData?.data?.summary} el={el} key={I} />
            )
          })
          } */}
        </div>
        <div className='chart-wrapper'>
          {/* <SleepChartNavTabs  titleAction={titleAction} /> */}
          <DefaultChartSkeleton />
        </div>
      </div>
    </>
  )
}
