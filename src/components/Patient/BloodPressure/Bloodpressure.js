import React from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import BloodPresureChartNavTabs from './BloodPresureChartNavTabs'

export default function Bloodpressure() {
  return (
    <div className='mt-22'>
      <div className='section-title'>
        <h5>Blood Pressure</h5>
      </div>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
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
    </div>
  )
}
