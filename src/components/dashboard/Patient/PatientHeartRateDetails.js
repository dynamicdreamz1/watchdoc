import React from 'react'
import AlertTriggerCard from './AlertTriggerCard'
import ChartDetailsCard from './ChartDetailsCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import ShowAllDataCard from './ShowAllDataCard'

export default function PatientHeartRateDetails() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper'>
            <ChartDetailsCard/>
            <ChartDetailsCard/>
            <ChartDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
            <AlertTriggerCard/>
        </div>
        <div class="chart-wrapper">
            <HeartRateChartNavTabs/>
        </div>
    </div>
    </>
  )
}
