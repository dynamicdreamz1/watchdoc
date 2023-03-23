import React from 'react'

export default function Status(props) {
  return (
    <>
    <div className='status table-data'>
        <span className="text color-light-blue">{props?.el?.status}</span>
    </div>
    </>
  )
}
