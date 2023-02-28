import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {searchClinician} from '../../../services/ClinicianService'
import { TableSkeleton } from '../../../Utility/Skeleton'
import AddClinicianButton from './AddClinicianButton'
import ConnectingClinician from './ConnectingClinician'
import PractitionersCard from './PractitionersCard'

export default function AddClinician() {

  const [clinicianName, setClinicianName] = useState('')
  const [practitionerName, setPractitionerName] = useState('')
  const [code, setCode] = useState('')
  const {t}=useTranslation();

  const [clinicianData,setClinicianData]=useState([])
  const [show,setShow]=useState(false)
 
  const handleSubmit = (e) => {
    e.preventDefault()

    const data={
      clinician_name:clinicianName,
      practice_name:practitionerName,
      zip:code
    }

     searchClinician(data)
    .then((response) => {
      console.log(response)
      setClinicianData(response)
    })

    .catch((error) => {
      console.log(error)

    })
  }

  return (
    <>
      <ConnectingClinician/>
      <div onClick={()=>setShow(!show)}> 
      <AddClinicianButton/>
      </div>
      {show ? 
      <>
      
      
        
      <div className='add-clinician-box'>
        <div className='title'>
          <p> {t('AddClinician.p1')}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-box'>
            <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={clinicianName} onChange={(e) => setClinicianName(e.target.value)} id="" className="name" />
            <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={practitionerName} onChange={(e) => setPractitionerName(e.target.value)} className="number" />
            <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={code} onChange={(e) => setCode(e.target.value)} className="postcode" />
            <input type="submit" value={t('AddClinician.form.b1')}  />
          </div>
        </form>
      </div>
      <PractitionersCard clinicianData={clinicianData}/>
      </>
          : ""
      
        }  
    </>
  )
}
