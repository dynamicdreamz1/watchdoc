import React from 'react'
import DateTime from './DateTime'

export default function Status(props) {
  const {value}=props
  return (
    <>
    <div className='wt table-data'>
        <span className={props?.el?.status==="Reviewed"?"text color-light-green":"text color-light-blue"}>{props?.el?.status}</span>
        {props?.el?.status==="Unreviewed" || props?.el?.status==="Pending" ? "" :  <DateTime props={props?.el} value={value} /> }

    </div>
    </>
  )
}
