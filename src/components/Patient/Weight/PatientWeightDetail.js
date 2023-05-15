import React from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import WeightChartNavTabs from './WeightChartNavTabs'
import MainDetailsCardForWeight from '../../common/DetailCards/MainDetailsCardForWeight'

export default function PatientWeightDetail() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCardForWeight />
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
