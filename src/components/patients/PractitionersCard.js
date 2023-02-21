import React from 'react'

export default function PractitionersCard() {
  return (
    <>
    <div className='practitioners-card'>
        <h5>Practitioners</h5>
        <div className='card'>
            <div className='user-image'>
                <img src='/images/user-image-big.png' alt='User Image' />
            </div>
            <div className='text-block'>
                <h5>Dr Sarah McDonnell</h5>
                <p>Neighbourhood Medical<br></br>
                   1a Stuartholme Rd<br></br>
                   Bardon, QLD 4065
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
