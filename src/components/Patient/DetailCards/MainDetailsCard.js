import React from 'react'
import MeasurmentResult from '../Measurement/MeasurementResult'
import MeasurmentTitle from '../Measurement/MeasurementTitle'
import RiskStatus from './RiskStatus'

export default function MainDetailsCard() {
  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <MeasurmentTitle/>
        <span className='time d-flex align-items-center'>
          1 min ago
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <MeasurmentResult/>
      <RiskStatus/>
    </div>  
    </>
  )
}
