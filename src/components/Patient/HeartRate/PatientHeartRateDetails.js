import React from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'

export default function PatientHeartRateDetails(props) {

  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
            <AlertTriggerCard/>
        </div>
        <div className="chart-wrapper">
            <HeartRateChartNavTabs/>
        </div>
    </div>
    </>
  )
}
