import React from 'react'
import { useTranslation } from 'react-i18next'
import { EditProfile } from '../components/Patient/Profile/EditProfile'

export default function EditProfileOuter() {

  const { t } = useTranslation()
  return (
    <>
        <div className='page-wrapper bg-gray'>
            <div className='container'>
              <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
              </div>
              <div className='page-content-wrapper'>
                <div className="title-block">
                  <h4>{t('CreateProfilePage.register.r1')}</h4>
                </div>
                <EditProfile/>
              </div>
            </div>
        </div>
    </>
  )
}
