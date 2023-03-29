import React from 'react'
import DateTime from './DateTime'

export default function Status(props) {
  return (
    <>
    <div className='wt table-data'>
        <span className="text color-light-blue">{props?.el?.status}</span>
        <DateTime props={props?.el}/>

    </div>
    </>
  )
}
