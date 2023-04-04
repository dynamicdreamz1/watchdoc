import React from 'react'

export default function ConnectedPatients({data}) {
  
  return (
    <>
    <div className='cp'><span>{data?.connected_patients_count}</span></div>
    </>
  )
}
