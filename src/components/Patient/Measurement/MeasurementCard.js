import React from 'react'
import MeasurementLastRecording from './MeasurementLastRecording'
import MeasurementResult from './MeasurementResult'
import MeasurementStatus from './MeasurementStatus'
import MeasurementTitle from './MeasurementTitle'

export default function MeasurementCard() {
  return (
    <>
        <div className='measurment-card'>
            <MeasurementStatus/>
            <MeasurementTitle/>
            <MeasurementResult/>
            <MeasurementLastRecording/>
        </div>
    </>
  )
}
