
import React from 'react'

export default function AlertTriggerCardForBloodPressure(props) {
  const {el ,openTriggerModel}=props;
  var convertedString = el?.criteria_title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

  return (
    <>
    <div onClick={()=>openTriggerModel(el?.criteria_title)} className='alert-trigger-card d-flex align-items-center justify-content-between'>
        <span className='text'>
        {convertedString} Alert Trigger
        </span>
        <span className='number'>
            {/* {props?.HeartRateAvg?.min_hr_bpm} {`bpm`} */}
            {el?.criteria_limit} bpm
            <img src='/images/angle-right.svg' alt='Angle Right'/>
        </span>
    </div>
    </>
  )
}
