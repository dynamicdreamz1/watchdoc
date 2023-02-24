import React from 'react'
import AlertTriggerCard from '../../DetailCards/AlertTriggerCard'
import BloodPresureChartNavTabs from './BloodPresureChartNavTabs'
import ShowAllDataCard from '../../DetailCards/ShowAllDataCard'
import MainDetailsCard from '../../DetailCards/MainDetailsCard'

export default function PatientBloodPressureDetails() {
  return (
    <>
        <div className='phrd d-flex flex-wrap'>
            <div className='cards-wrapper'>
                <MainDetailsCard/>
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
    </>
  )
}
