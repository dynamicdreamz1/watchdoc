import React from 'react'
import DateTime from './DateTime'

export default function Bp(props) {

  const {value}=props;
  return (
    <>
        <div className='bp table-data'>
            <span className='digit color-red'>{props?.el?.bp}</span>
            <DateTime props={props?.el} value={value} />
        </div>
    </>
  )
}
