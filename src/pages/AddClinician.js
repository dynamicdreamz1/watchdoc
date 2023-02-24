import React, { useState } from 'react'
import AddClinician from '../components/Patient/AddClinician/AddClinician'
import AddClinicianButton from '../components/Patient/AddClinician/AddClinicianButton'
import ConnectingClinician from '../components/Patient/AddClinician/ConnectingClinician'
import PractitionersCard from '../components/Patient/AddClinician/PractitionersCard'

export default function AddClinicianPage() {
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
