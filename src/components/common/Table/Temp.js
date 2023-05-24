import React from 'react'

export default function Temp(props) {
  return (
    <>
        <div className='temp table-data'>
            {/* <span className='dash'>-</span> */}
            <span className='time'>{props?.el?.temp}</span>
        </div>
    </>
  )
}
