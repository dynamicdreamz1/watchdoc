import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function AddClinician({setClinicianData}) {

  const [clinicianName, setClinicianName] = useState('')
  const [data, setData] = useState('')
  const [code, setCode] = useState('')
  const {t}=useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault()
    .then((response) => {
      console.log(response)
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
            <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={data} onChange={(e) => setData(e.target.value)} class="number" />
            <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={code} onChange={(e) => setCode(e.target.value)} class="postcode" />
            <input type="submit" value={t('AddClinician.form.b1')}  />
          </div>
        </form>
      </div>
    </>
  )
}
