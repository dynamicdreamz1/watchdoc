import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function SignupSuccess() {
  const {t}=useTranslation()
  return (
    <>
        <div className='page-wrapper success-page-wrapper'>
          <div className='text-block'>
            <div class="logo-block">
              <div class="logo">
                <img src="/images/WatchDoc-LOGO.svg" alt="WatchDoc Logo" />
              </div>
            </div>
            <div className='text'>
              <h1> {t('SignupSuccessPage.heading')} </h1>
              <p> {t('SignupSuccessPage.para1')} </p>
              <Link to="/signin">
                <button type='button' className='btn'> {t('SignupSuccessPage.button')} </button>
              </Link>
            </div>
          </div>
          
        </div>
    </>
  )
}
