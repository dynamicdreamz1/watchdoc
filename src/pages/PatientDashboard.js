import React, { useState } from 'react'
import AddClinician from '../components/patients/AddClinician'
import AddClinicianButton from '../components/patients/AddClinicianButton'
import ConnectingClinician from '../components/patients/ConnectingClinician'
import PractitionersCard from '../components/patients/PractitionersCard'

export default function PatientDashboard() {
  const [clinicianData,setClinicianData]=useState([])
  const [show,setShow]=useState(false)

  return (
    <>
    <div className='page-wrapper bg-gray'>
        <div className='container'>
            <div className='page-content-wrapper'>
                <ConnectingClinician/>
                <div onClick={()=>setShow(!show)}> 
                <AddClinicianButton/>
                </div>

                {show ? 
                <>
                <AddClinician setClinicianData={setClinicianData} />
                <PractitionersCard clinicianData={clinicianData}/>
                </>
                 : "" 
                
                }
            </div>
        </div>
    </div>
    </>
  )
}
