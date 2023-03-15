import React, { useContext } from 'react'
import { UserContext } from '../../Store/Context';

import PageTitle from '../common/PageTitle'
import SearchBar from '../common/SearchBar'
import UserAvtar from '../common/UserAvtar'

export default function Header({toggle,setToggle}) {

  const {currentUserData} = useContext(UserContext);

  return (
    <>
        <div className='top-header-block d-flex align-items-center justify-content-between'>
            <PageTitle toggle={toggle} setToggle={setToggle}/>
           { currentUserData?.role==="User" ? "" : <SearchBar/> }
            <UserAvtar/>
        </div>
    </>
  )
}
