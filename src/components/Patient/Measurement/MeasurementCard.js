import React from 'react'
import MeasurementLastRecording from './MeasurementLastRecording'
import MeasurementResult from './MeasurementResult'
import MeasurementStatus from './MeasurementStatus'
import MeasurementTitle from './MeasurementTitle'

export default function MeasurementCard(props) {
  return (
    <>
        <div className='measurment-card'>
            <MeasurementStatus status={props?.block?.status}/>
            <MeasurementTitle icon={props?.block?.icon} type={props?.block?.type}/>
            <MeasurementResult result={props?.block?.result} label={props?.block?.label}/>
            <MeasurementLastRecording time={props?.block?.time}/>
        </div>
    </>
  )
}
