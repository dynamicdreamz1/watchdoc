import React from 'react'
import DateTime from './DateTime'

export default function Bo(props) {
  const {value,el}=props;
  const bo = el?.metaData?.heart_rate?.count
  
  return (
    <>
    <div className='bo table-data'>
        <span className='digit'>{bo}</span>
        <DateTime props={props?.el} value={value}/>
    </div>
    </>
  )
}
