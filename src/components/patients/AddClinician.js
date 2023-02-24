import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {searchClinician} from '../../services/ClinicianService'

export default function AddClinician({setClinicianData}) {

  const [clinicianName, setClinicianName] = useState('')
  const [practitionerName, setPractitionerName] = useState('')
  const [code, setCode] = useState('')
  const {t}=useTranslation();
 
  const handleSubmit = (e) => {
    e.preventDefault()

    const data={
      clinician_name:clinicianName,
      practice_name:practitionerName,
      zip:code
    }

     searchClinician(data)
    .then((response) => {
      console.log(response.data.data)
      setClinicianData(response)
    })

    .catch((error) => {
      console.log(error)

    })
  }

  return (
    <>
      <div className='add-clinician-box'>
        <div className='title'>
          <p> {t('AddClinician.p1')}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-box'>
            <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={clinicianName} onChange={(e) => setClinicianName(e.target.value)} id="" class="name" />
            <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={practitionerName} onChange={(e) => setPractitionerName(e.target.value)} class="number" />
            <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={code} onChange={(e) => setCode(e.target.value)} class="postcode" />
            <input type="submit" value={t('AddClinician.form.b1')}  />
          </div>
        </form>
      </div>
    </>
  )
}
