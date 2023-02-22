import React, { useState } from 'react'
import { searchClinician } from '../../services/ClinicianService'

export default function AddClinician({setClinicianData}) {

  const [clinicianName, setClinicianName] = useState('')
  const [data, setData] = useState('')
  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchClinician()
    .then((response) => {
      console.log(response)
      setClinicianData(response.data)

    })

    .catch((error) => {
      console.log(error)

    })
  }

  return (
    <>
      <div className='add-clinician-box'>
        <div className='title'>
          <p>Find and add your clinician to your WatchDoc account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-box'>
            <input type="text" placeholder="Clinician’s Name" value={clinicianName} onChange={(e) => setClinicianName(e.target.value)} id="" class="name" />
            <input type="text" placeholder="Practice Name or Provider Number" value={data} onChange={(e) => setData(e.target.value)} class="number" />
            <input type="text" placeholder="Suburb or Postcode" value={code} onChange={(e) => setCode(e.target.value)} class="postcode" />
            <input type="submit" value="Search"  />
          </div>
        </form>
      </div>
    </>
  )
}
