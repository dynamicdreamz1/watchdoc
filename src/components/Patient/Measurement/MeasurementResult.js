import React from 'react'

export default function MeasurementResult(props) {
  const {latest}=props?.data
  
  return (
    <>
    <div className='measurment-result'>
        <span className='digit'>{latest?.[props?.result]?.count}</span>
        <span className='type'>{props.label}</span>
    </div>
    </>
  )
}
