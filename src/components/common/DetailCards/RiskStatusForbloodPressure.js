
import React from 'react'

export default function RiskStatusForbloodPressure({el}) {
  return (
    <>
    <div className='r-status d-flex align-items-center'>
       {el?.status && <span className='icon'></span>}
        <span className='text'>High</span>
    </div>
    </>
  )
}
