import React from 'react'
import DateTime from './DateTime'

export default function Bo(props) {
  const {value}=props;
  
  return (
    <>
    <div className='bo table-data'>
        <span className='digit'>{props?.el?.bo}</span>
        <DateTime props={props?.el} value={value}/>
    </div>
    </>
  )
}
