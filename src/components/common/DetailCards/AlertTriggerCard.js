import React from 'react'

export default function AlertTriggerCard(props) {
 
  return (
    <>
    <div className='alert-trigger-card d-flex align-items-center justify-content-between'>
        <span className='text'>
            Low Heart Rate Alert Trigger
        </span>
        <span className='number'>
            {props?.HeartRateAvg?.min_hr_bpm} {`bpm`}
            <img src='/images/angle-right.svg' alt='Angle Right'/>
        </span>
    </div>
    </>
  )
}
