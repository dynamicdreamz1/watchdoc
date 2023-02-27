import React from 'react'

export default function MeasurementTitle(props) {
  return (
    <>
    <div className='measurment-title d-flex align-items-center'>
        <span className='icon d-flex'><img src='/images/heart-rate-icon.svg' alt='Heart Rate Icon'/></span>
        <span className='name d-flex'>{props.type}</span>
    </div>
    </>
  )
}
