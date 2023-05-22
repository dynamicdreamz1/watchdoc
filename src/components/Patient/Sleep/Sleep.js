import React from 'react'
import { useTranslation } from 'react-i18next'
import SleepDetails from './SleepDetails'

export default function Sleep({terraId,latestData}) {
  const {t}=useTranslation()
  
  return (
    <>
    <div className='mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.Sleep.title')}</h5>
        </div>
        <SleepDetails terraId={terraId} latestData={latestData}/>
    </div>
    </>
  )
}
