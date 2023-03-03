import React, { createContext, useState } from 'react'
import AddClinician from '../components/Patient/AddClinician/AddClinician'

export const AddClincianOuterContext = createContext([]);
export const AddClinicianOuter = () => {
  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])

  // console.log

  return (
    <AddClincianOuterContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData }}>
      <div className='page-wrapper bg-gray'>
        <div className='container'>
          <div className='page-content-wrapper'>
            <AddClinician />
          </div>
        </div>
      </div>
    </AddClincianOuterContext.Provider>
  )
}
