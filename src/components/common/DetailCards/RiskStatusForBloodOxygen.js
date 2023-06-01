
import React from 'react'
import MeasurementStatusForBloodOxygen from '../../Patient/Measurement/MeasurementStatusForBloodOxygen'

export default function RiskStatusForBloodOxygen() {
  return (
    <>
    <div className='r-status d-flex align-items-center'>
    <MeasurementStatusForBloodOxygen  />       
        <span className='text'>Good</span>
    </div>
    </>
  )
}
