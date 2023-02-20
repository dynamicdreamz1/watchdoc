import React from 'react'

export default function PhoneNumber() {
  return (
    <>
    <a href='tel:07 3519 6963' className='phone-number d-flex align-items-center'>
        <span className="icon">
            <img src='/images/Phone-Icon.svg' alt='Phone Icon' />
        </span>
        <span className='text d-flex'>07 3519 6963</span>
    </a>
    </>
  )
}
