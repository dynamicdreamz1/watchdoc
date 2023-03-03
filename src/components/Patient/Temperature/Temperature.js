import React from 'react'
import NoDataRecorded from '../../common/NoData/NoDataRecorded'

export default function Temperature() {
  return (
    <>
    <div className='mt-22'>
        <div className='section-title'>
            <h5>Temperature</h5>
        </div>
        <NoDataRecorded/>
    </div>
    </>
  )
}
