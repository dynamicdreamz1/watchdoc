import React from 'react'
import DateTime from './DateTime'

export default function Hr(props) {
  const {value,el}=props;
  const hr = el?.metaData?.heart_rate?.count
  return (
    <>
    <div className='hr table-data'>
        <span className='digit'>{hr}</span>
        <DateTime props={props?.el} value={value} />
    </div>
    </>
  )
}
