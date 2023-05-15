import React, { useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
// import { UserContext } from '../../../Store/Context'
// import { GetDate } from '../../../Utility/functions'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import BloodOxygenChartNavTabs from './BloodOxygenChartNavTabs'
import moment from 'moment'
import MainDetailsCardForBloodOxygen from '../../common/DetailCards/MainDetailsCardForBloodOxygen';

export default function PatientBloodOxygenDetails({ terraId }) {
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const defaultEndDate = moment().format('YYYY-MM-DD');
  const [Date, setDate] = useState("2023-03-21");
  const [timeType, setTimeType] = useState('daily')
  const [FinalDate, setFinalDate] = useState({ start: defaultStartDate, end: defaultEndDate });

  const [bloodOxygenData, setBloodOxygenData] = useState()


  const fetchData = async () => {
    const result = await GetUserBloodOxyenData(timeType, terraId, FinalDate)
    setBloodOxygenData(result);
  }




  useEffect(() => {
    if(terraId){
    fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, timeType, FinalDate]);



  return (
    <>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          <MainDetailsCardForBloodOxygen HeartRateAvg={bloodOxygenData?.data?.summary}/>
          {/* <MainDetailsCard HeartRateAvg={bloodOxygenData?.data?.summary?.avg_saturation_percentage} /> */}
          {/* <MainDetailsCard HeartRateAvg={bloodOxygenData?.data?.summary?.avg_saturation_percentage} /> */}
          <ShowAllDataCard HeartRateAvg={bloodOxygenData?.data?.summary} />
          <AlertTriggerCard HeartRateAvg={bloodOxygenData?.data?.summary} />
        </div>
        <div className='chart-wrapper'>
          <BloodOxygenChartNavTabs bloodOxygenData={bloodOxygenData} setTimeType={setTimeType} setDate={setDate} Date={Date} setFinalDate={setFinalDate} />
        </div>
      </div>
    </>
  )
}
