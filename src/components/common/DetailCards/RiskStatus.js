import React from 'react'

export default function RiskStatus({el}) {
  return (
    <>
    <div className='r-status d-flex align-items-center'>
       {el?.status && <span className='icon'></span>}
        <span className='text'>{el?.status}</span>
    </div>
    </>
  )
}
