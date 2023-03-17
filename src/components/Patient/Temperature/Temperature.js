import React from 'react'
import { useTranslation } from 'react-i18next'
import NoDataRecorded from '../../common/NoData/NoDataRecorded'

export default function Temperature() {
  const {t}=useTranslation()
  return (
    <>
    <div className='mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.Temperature.title')}</h5>
        </div>
        <NoDataRecorded/>
    </div>
    </>
  )
}
