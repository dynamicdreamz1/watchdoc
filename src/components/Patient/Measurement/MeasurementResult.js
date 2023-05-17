import React from 'react'

export default function MeasurementResult(props) {
  const {latest}=props?.data
  const lableName = [props?.result]
  const colorRed = lableName[0] === "heart_rate" || lableName[0] === "blood_pressure" ?'red' : ""

  return (
    <>
    <div className='measurment-result'>
        <span className='digit' style={{color:colorRed}}>{latest?.[props?.result]?.count}</span>
        <span className='type'>{props.label}</span>
    </div>
    </>
  )
}
