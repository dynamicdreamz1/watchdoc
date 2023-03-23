import React from 'react'

export default function Bg(props) {
  return (
    <>
        <div className='bg table-data'>
            <span className='dash'>-</span>
            <span className='time'>{props?.el?.bg}</span>
        </div>
    </>
  )
}
