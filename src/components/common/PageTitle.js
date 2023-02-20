import React from 'react'
import { useTranslation } from 'react-i18next'


export default function PageTitle() {

  const {t}=useTranslation();

  return (
    <>
        <div className='page-title'>
            <h1>{t(('DashboardPage.d3'))}</h1>
        </div>
    </>
  )
}
