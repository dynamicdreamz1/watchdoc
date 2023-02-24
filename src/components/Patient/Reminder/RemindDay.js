import React from 'react'

export default function RemindDay() {
  return (
    <>
    <div className='days'>
        <button type="button" className='day'>M</button>
        <button type="button" className='day'>T</button>
        <button type="button" className='day active'>W</button>
        <button type="button" className='day'>T</button>
        <button type="button" className='day'>F</button>
        <button type="button" className='day'>S</button>
        <button type="button" className='day'>S</button>
    </div>
    </>
  )
}
