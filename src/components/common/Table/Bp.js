import React from 'react'
import DateTime from './DateTime'

export default function Bp(props) {

  const {value ,el}=props;
  const bp = el?.metaData?.blood_pressure?.count

  return (
    <>
        <div className='bp table-data'>
            <span className='digit color-red'>{bp}</span>
            <DateTime props={props?.el} value={value} />
        </div>
    </>
  )
}
