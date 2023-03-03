import React from 'react'
import { watchNumerFormeting } from '../../../Utility/functions'
import RiskStatus from './RiskStatus'

export default function MainDetailsCard(Props) {
  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <div className='measurment-title d-flex align-items-center'>
          <span className='icon d-flex'><img src='/images/heart-rate-icon.svg' alt='Heart Rate Icon'/></span>
          <span className='name d-flex'>Heart Rate</span>
        </div>
        <span className='time d-flex align-items-center'>
          1 min ago
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <div className='measurment-result'>
        <span className='digit'>{watchNumerFormeting(Props.HeartRateAvg)}</span>
        <span className='type'>bpm</span>
      </div>
      <RiskStatus/>
    </div>  
    </>
  )
}
