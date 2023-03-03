import React from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
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
