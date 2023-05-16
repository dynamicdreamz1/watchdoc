
import React from 'react'

export default function AlertTriggerCardForBloodPressure(props) {
  const {el}=props;
  return (
    <>
    <div className='alert-trigger-card d-flex align-items-center justify-content-between'>
        <span className='text'>
            {el?.title}
        </span>
        <span className='number'>
            {/* {props?.HeartRateAvg?.min_hr_bpm} {`bpm`} */}
            {el?.result} {el?.lable}
            <img src='/images/angle-right.svg' alt='Angle Right'/>
        </span>
    </div>
    </>
  )
}
