import React from 'react'

export default function AddClinician() {
  return (
    <>
    <div className='add-clinician-box'>
        <div className='title'>
            <p>Find and add your clinician to your WatchDoc account.</p>
        </div>
        <form method='post'>
            <div className='form-box'>
                <input type="text" placeholder="Clinician’s Name" value="" id="" class="name" />
                <input type="text" placeholder="Practice Name or Provider Number" value="" id="" class="number" />
                <input type="text" placeholder="Suburb or Postcode" value="" id="" class="postcode" />
                <input type="submit" value="Search" />
            </div>
        </form>
    </div>
    </>
  )
}
