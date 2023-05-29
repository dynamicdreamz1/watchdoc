import React from 'react'

export default function Phone({number,data}) {
  
  return (
    <>
    <div className='phone'><span>{number?number:data?.contact_number}</span></div>
    </>
  )
}
