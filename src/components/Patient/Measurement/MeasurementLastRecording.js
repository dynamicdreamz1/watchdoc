import React from 'react'

export default function MeasurementLastRecording(props) {
  return (
    <>
    <div className='mlr'>
        <span className='text'>Last recording</span>
        <span className='time'>{props.time}</span>
    </div>
    </>
  )
}
