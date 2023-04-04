import React from 'react'

export default function PendingPatients({data}) {
  
  return (
    <>
    <div className='pp'><span>{data?.pending_patients_count}</span></div>
    </>
  )
}
