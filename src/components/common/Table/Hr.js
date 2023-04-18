import React from 'react'
import DateTime from './DateTime'

export default function Hr(props) {
  return (
    <>
    <div className='hr table-data'>
        <span className='digit'>{props?.el?.hr}</span>
        <DateTime props={props?.el}/>
    </div>
    </>
  )
}
