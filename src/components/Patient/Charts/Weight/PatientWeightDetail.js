import React from 'react'
import AlertTriggerCard from '../../DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../DetailCards/ShowAllDataCard'
import WeightChartNavTabs from './WeightChartNavTabs'

export default function PatientWeightDetail() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
            <AlertTriggerCard/>
        </div>
        <div className='chart-wrapper'>
            <WeightChartNavTabs/>
        </div>
    </div>
    </>
  )
}
