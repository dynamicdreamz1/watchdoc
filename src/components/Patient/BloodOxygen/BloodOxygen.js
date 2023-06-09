import React from 'react'
import { useTranslation } from 'react-i18next'
import PatientBloodOxygenDetails from './PatientBloodOxygenDetails'

export default function BloodOxygen({terraId,latestData}) {
  const {t}=useTranslation()
  
  return (
    <>
    <div className='mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.BloodOxygen.title')}</h5>
        </div>
        <PatientBloodOxygenDetails terraId={terraId} latestData={latestData}/>
    </div>
    </>
  )
}
