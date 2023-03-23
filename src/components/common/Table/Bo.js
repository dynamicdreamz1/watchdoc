import React from 'react'
import DateTime from './DateTime'

export default function Bo(props) {
  return (
    <>
    <div className='bo table-data'>
        <span className='digit'>{props?.el?.bo}</span>
        <DateTime/>
    </div>
    </>
  )
}
