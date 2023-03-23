import React from 'react'
import DateTime from './DateTime'

export default function Bp(props) {
  return (
    <>
        <div className='bp table-data'>
            <span className='digit color-red'>{props?.el?.bp}</span>
            <DateTime props={props?.el}/>
        </div>
    </>
  )
}
