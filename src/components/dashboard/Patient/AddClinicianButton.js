import React from 'react'
import { useTranslation } from 'react-i18next';
import AddIcon from './AddIcon'

export default function AddClinicianButton() {
  const {t}=useTranslation();
  return (
    <>
    <div className='add-clinician-button-block'>
      <div className='title'>
        <h4>{t('AddClinicianButton.heading')}</h4>
      </div>
      <button type='button' className='d-flex align-items-center justify-content-between add-clinician-button'>
          <span className='text'>
          {t('AddClinicianButton.e1')}
          </span>
          <span className='icon'>
              <AddIcon/>
          </span>
      </button>
    </div>
    </>
  )
}
