import React from 'react'
import {GetdayHourMin} from "../../../Utility/functions"

export default function MeasurementLastRecording(props) {
  const {latest}=props?.data
  const  date = GetdayHourMin(latest?.[props?.result]?.date)
  return (
    <>
    <div className='mlr'>
        <span className='text'>Last recording</span>
        <span className='time'>{date.data} {date.lable} ago</span>
    </div>
    </>
  )
}
