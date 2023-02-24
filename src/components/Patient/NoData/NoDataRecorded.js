import React from 'react'

export default function NoDataRecorded() {
  return (
    <>
    <div className='no-data-recorded d-flex align-items-center'>
        <span className='icon d-flex'>
            <img src='/images/BloodGlucose-icon.svg' alt='BloodGlucose Icon' />
        </span>
        <span className='text'>No data recorded</span>
    </div>
    </>
  )
}
