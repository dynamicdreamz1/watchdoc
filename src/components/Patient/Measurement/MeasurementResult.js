import React from 'react'
import { convertDecimalToPercentage } from '../../../Utility/functions'

export default function MeasurementResult(props) {
  const {latest}=props?.data
  const lableName = [props?.result]
  const colorRed = lableName[0] === "heart_rate" || lableName[0] === "blood_pressure" ?'red' : ""


  const result=typeof latest?.[props?.result]?.count === 'number' &&
                latest?.[props?.result]?.count % 1 !== 0?convertDecimalToPercentage(latest?.[props?.result]?.count,0):
                latest?.[props?.result]?.count;
  return (
    <>
    <div className='measurment-result'>
        <span className='digit' style={{color:colorRed}}>{result}</span>
        <span className='type'>{props.label}</span>
    </div>
    </>
  )
}
