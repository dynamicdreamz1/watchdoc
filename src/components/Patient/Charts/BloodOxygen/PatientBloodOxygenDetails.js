import React from 'react'
import AlertTriggerCard from '../../DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../DetailCards/ShowAllDataCard'
import BloodOxygenChartNavTabs from './BloodOxygenChartNavTabs'

export default function PatientBloodOxygenDetails() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard/>
            <MainDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
        </div>
        <div className='chart-wrapper'>
            <BloodOxygenChartNavTabs/>
        </div>
    </div>
    </>
  )
}
