import React from 'react'
import MeasurmentResult from '../../../patients/MeasurmentResult'
import MeasurmentTitle from '../../../patients/MeasurmentTitle'

export default function HeartRateDetailsCrad() {
  return (
    <>
    <div className='hrd-card'>
        <MeasurmentTitle/>
        <MeasurmentResult/>
    </div>
    </>
  )
}
