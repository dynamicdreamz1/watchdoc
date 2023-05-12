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
            <MeasurementResult result={props?.block?.key} label={props?.block?.label} data={props?.data}/>
            <MeasurementLastRecording time={props?.block?.time}/>
        </div>
    </>
  )
}
