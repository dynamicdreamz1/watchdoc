import React from 'react'

import PageTitle from '../common/PageTitle'
import SearchBar from '../common/SearchBar'
import UserAvtar from '../common/UserAvtar'

export default function Header({toggle,setToggle}) {
  
  return (
    <>
        <div className='top-header-block d-flex align-items-center justify-content-between'>
            <PageTitle toggle={toggle} setToggle={setToggle}/>
            <SearchBar/>
            <UserAvtar/>
        </div>
    </>
  )
}
