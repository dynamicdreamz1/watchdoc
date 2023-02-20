import React from 'react'
import { useTranslation } from 'react-i18next'


export default function SearchBar() {

  const { t } = useTranslation();
  return (
    <>
      <form method='post' className='search-block'>
        <input type="search" name="search" placeholder={t('DashboardPage.d4')} />
      </form>
    </>
  )
}
