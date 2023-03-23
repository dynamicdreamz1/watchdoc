import React from 'react'
import DateTime from './DateTime'

export default function Wt(props) {
  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{props?.el?.wt}</span>
            <DateTime/>
        </div>
    </>
  )
}
