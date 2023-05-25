import React from 'react'

export default function Temp(props) {

  const {value,el}=props;
  const temp = el?.metaData?.temperature?.count
  return (
    <>
        <div className='bg table-data'>
            <span className='digit'>{temp}</span>
        </div>
    </>
  )
}
