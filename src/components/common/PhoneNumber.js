import React from 'react'

export default function PhoneNumber({Number}) {
  return (
    <>
    <a href={`tel:${Number}`} className='phone-number d-flex align-items-center'>
        <span className="icon">
            <img src='/images/Phone-Icon.svg' alt='Phone Icon' />
        </span>
        <span className='text d-flex'>{Number}</span>
    </a>
    </>
  )
}
