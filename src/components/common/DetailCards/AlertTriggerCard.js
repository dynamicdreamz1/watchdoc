import React from 'react'

export default function AlertTriggerCard(props) {
  const {el}=props;
  return (
    <>
    <div className='alert-trigger-card d-flex align-items-center justify-content-between'>
        <span className='text'>
            {el?.title}
        </span>
        <span className='number'>
            {el?.result} {el?.lable}
            <img src='/images/angle-right.svg' alt='Angle Right'/>
        </span>
    </div>
    </>
  )
}
