import React from 'react'
import AlertTriggerCard from './AlertTriggerCard'
import BloodPresureChartNavTabs from './BloodPresureChartNavTabs'
import ChartDetailsCard from './ChartDetailsCard'
import ShowAllDataCard from './ShowAllDataCard'

export default function PatientBloodPressureDetails() {
  return (
    <div>
        <div className='phrd d-flex flex-wrap'>
            <div className='cards-wrapper'>
                <ChartDetailsCard/>
                <ShowAllDataCard/>
                <AlertTriggerCard/>
                <AlertTriggerCard/>
                <AlertTriggerCard/>
                <AlertTriggerCard/>
            </div>
            <div className='chart-wrapper'>
                <BloodPresureChartNavTabs/>
            </div>
        </div>
    </div>
  )
}
