import React from 'react'

export default function Phone({number,data}) {
  
  return (
    <>
    <div className='phone'><span>{data?.contact_number}</span></div>
    </>
  )
}
