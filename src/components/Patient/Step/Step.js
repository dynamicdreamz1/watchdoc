import React from 'react'
import { useTranslation } from 'react-i18next'
import StepDetails from './StepDetails'

export default function Sleep({terraId,latestData}) {
  const {t}=useTranslation()
  
  return (
    <>
    <div className='mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.Step.title')}</h5>
        </div>
        <StepDetails terraId={terraId} latestData={latestData}/>
    </div>
    </>
  )
}
