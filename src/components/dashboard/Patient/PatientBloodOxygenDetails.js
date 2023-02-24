import React from 'react'
import AlertTriggerCard from './AlertTriggerCard'
import ChartDetailsCard from './ChartDetailsCard'
import ShowAllDataCard from './ShowAllDataCard'

export default function PatientBloodOxygenDetails() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper'>
            <ChartDetailsCard/>
            <ChartDetailsCard/>
            <ShowAllDataCard/>
            <AlertTriggerCard/>
        </div>
        <div className='chart-wrapper'>
            
        </div>
    </div>
    </>
  )
}
