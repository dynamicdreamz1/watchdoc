import React from 'react'

export default function MeasurementResult(props) {
  return (
    <>
    <div className='measurment-result'>
        <span className='digit'>{props.result}</span>
        <span className='type'>{props.label}</span>
    </div>
    </>
  )
}
