import React from 'react'
import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
import UserAvtar from './UserAvtar'

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
