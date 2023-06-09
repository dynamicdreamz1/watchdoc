import React, { createContext, useState } from 'react'
import AddClinician from '../components/Patient/AddClinician/AddClinician'

export const AddClincianOuterContext = createContext([]);

export const AddClinicianOuter = () => {
  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])
  const [status, setStatus] = useState(false)
  const [nextBtn,setNextBtn]=useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <AddClincianOuterContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData,nextBtn,setNextBtn,currentPage, setCurrentPage }}>
      <div className='page-wrapper bg-gray add-clinician-inner'>
        <div className='container'>
          <div className='page-content-wrapper'>
            <AddClinician status={status} setStatus={setStatus} />
          </div>
        </div>
      </div>
    </AddClincianOuterContext.Provider>
  )
}
