import React from 'react'
import { useTranslation } from 'react-i18next'


export default function SearchBar({setSearch}) {
  const { t } = useTranslation();

  const searchInpitData = (e) =>{
    if (setSearch) {
      setSearch(e?.target?.value)
    }
  }

  return (
    <>
      <form method='post' className='search-block'>
        <input onChange={(e)=>searchInpitData(e)} type="search" name="search" placeholder={t('DashboardPage.d4')} />
      </form>
    </>
  )
}
