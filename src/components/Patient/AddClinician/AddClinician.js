import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { UserContext } from '../../../pages/AddClinicianInner'
import { AddClincianOuterContext } from '../../../pages/AddClinicianOuter'
import { searchClinician } from '../../../services/ClinicianService'
import AddClinicianButton from './AddClinicianButton'
import ConnectingClinician from './ConnectingClinician'
import PractitionersCard from './PractitionersCard'

export default function AddClinician({ status, setStatus }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false)
  const [defaultStatus, setDefaultStatus] = useState(false)

  const { addData, setAddData, setClinicianData } = useContext(window.location.pathname === "/editclinician" ? UserContext : AddClincianOuterContext)
  console.log(addData, setAddData, "provided")



  const handleSubmit = (e) => {

    e.preventDefault()

    const data = {
      clinician_name: addData?.clinicianName,
      practice_name: addData?.practitionerName,
      zip: addData?.code
    }

    searchClinician(data)
      .then((response) => {
        console.log('response.data')
        setClinicianData(response)

      })

      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
  
      {window.location.pathname === "/addclinician" ?
        <>
          <ConnectingClinician defaultStatus={defaultStatus} setDefaultStatus={setDefaultStatus} />
          <div>
            {defaultStatus === true ?
              <AddClinicianButton show={show} setShow={setShow} /> : ""}
          </div>
          {show ?
            <>



              <div className='add-clinician-box'>
                <div className='title'>
                  <p> {t('AddClinician.p1')}</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className='form-box'>
                    <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={addData?.clinicianName} onChange={(e) => setAddData({ ...addData, clinicianName: e.target.value })} id="" className="name" />
                    <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={addData?.practitionerName} onChange={(e) => setAddData({ ...addData, practitionerName: e.target.value })} className="number" />
                    <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={addData?.code} onChange={(e) => setAddData({ ...addData, code: e.target.value })} className="postcode" />
                    <input type="submit" value={t('AddClinician.form.b1')} />
                  </div>
                </form>
              </div>

              <PractitionersCard  status={status} setStatus={setStatus} />
            </>
            : ""

          }
        </>
        :
        <>
          <div className='add-clinician-box'>
            <div className='title'>
              <p> {t('AddClinician.p1')}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-box'>
                <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={addData?.clinicianName} onChange={(e) => setAddData({ ...addData, clinicianName: e.target.value })} id="" className="name" />
                <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={addData?.practitionerName} onChange={(e) => setAddData({ ...addData, practitionerName: e.target.value })} className="number" />
                <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={addData?.code} onChange={(e) => setAddData({ ...addData, code: e.target.value })} className="postcode" />
                <input type="submit" value={t('AddClinician.form.b1')} />
              </div>
            </form>
          </div>

          <PractitionersCard  status={status} setStatus={setStatus} />
        </>}

      
    </>
  )
}
