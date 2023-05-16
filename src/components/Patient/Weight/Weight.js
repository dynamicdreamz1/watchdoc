import React from 'react'
import { useTranslation } from 'react-i18next'
import PatientWeightDetail from './PatientWeightDetail'

export default function Weight({latestData}) {
  const {t}=useTranslation()
  return (
    <>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>{t('PatientDashboard.Weight.title')}</h5>
            </div>
            <PatientWeightDetail latestData={latestData}/>
        </div>
    </>
  )
}
