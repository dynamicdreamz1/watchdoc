import React from 'react'

export default function AlertTriggerCard() {
  return (
    <>
    <div className='alert-trigger-card d-flex align-items-center justify-content-between'>
        <span className='text'>
            Low Heart Rate Alert Trigger
        </span>
        <span className='number'>
            40 bpm
            <img src='/images/angle-right.svg' alt='Angle Right'/>
        </span>
    </div>
    </>
  )
}
