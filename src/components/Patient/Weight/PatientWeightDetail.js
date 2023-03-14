import React from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import WeightChartNavTabs from './WeightChartNavTabs'

export default function PatientWeightDetail() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
        </div>
        <div className='chart-wrapper'>
            {<WeightChartNavTabs/>}
        </div>
    </div>
    </>
  )
}
