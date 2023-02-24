import React from 'react'
import PageTitle from '../common/PageTitle'
import SearchBar from '../common/SearchBar'
import UserAvtar from '../common/UserAvtar'

export default function Header() {
  return (
    <>
        <div className='top-header-block d-flex align-items-center justify-content-between'>
            <PageTitle/>
            <SearchBar/>
            <UserAvtar/>
        </div>
    </>
  )
}
