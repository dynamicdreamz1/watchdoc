import React, { useContext } from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { UserBodyContext } from '../../../Store/Context'

export default function PatientHeartRateDetails() {
  const {heart_data} = useContext(UserBodyContext);
  const {heart_rate_data} = heart_data;

  
  



  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard HeartRateAvg={heart_rate_data?.summary?.avg_hr_bpm}/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
            <AlertTriggerCard/>
        </div>
        <div className="chart-wrapper">
            <HeartRateChartNavTabs Hartrate={heart_rate_data} />
        </div>
    </div>
    </>
  )
}
