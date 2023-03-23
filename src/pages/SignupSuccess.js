import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function SignupSuccess() {
  const {t}=useTranslation()
  return (
    <>
        <div className='page-wrapper success-page-wrapper'>
          <Link to="/signin">
            <div className='text-block'>
                <div className='text'>
                    <h1> {t('SignupSuccessPage.heading')} </h1>
                    <p> {t('SignupSuccessPage.para1')} </p>
                    <button type='button' className='btn'> {t('SignupSuccessPage.button')} </button>
                </div>
            </div>
            </Link>
        </div>
    </>
  )
}
