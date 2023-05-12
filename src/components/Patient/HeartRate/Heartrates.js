import React from 'react'
import { useTranslation } from 'react-i18next'
import PatientHeartRateDetails from './PatientHeartRateDetails'

export default function Heartrates({terraId}) {
  const {t}=useTranslation()

  return (
    <div className='mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.HeartRate.title')}</h5>
        </div>
        <PatientHeartRateDetails terraId={terraId}/>
    </div>
  )
}
