import React from 'react'
import HeartRateChart from './HeartRateChart'
import HeartRateDetailsCrad from './HeartRateDetailsCrad'

export default function PatientHeartRateDetails() {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper'>
            <HeartRateDetailsCrad/>
            <HeartRateDetailsCrad/>
            <HeartRateDetailsCrad/>
            <HeartRateDetailsCrad/>
            <HeartRateDetailsCrad/>
        </div>
        <div class="chart-wrapper">
            <HeartRateChart/>
        </div>
    </div>
    </>
  )
}
