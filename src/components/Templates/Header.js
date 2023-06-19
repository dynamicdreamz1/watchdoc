import React, { useContext } from 'react'
import { UserContext } from '../../Store/Context';
import PageTitle from '../common/PageTitle'
import SearchBar from '../common/SearchBar'
import UserAvtar from '../common/UserAvtar'
import { useLocation } from 'react-router-dom';

export default function Header({ toggle, setToggle, setOpen,setSearchData }) {
  const location = useLocation()
  const { currentUserData } = useContext(UserContext);
  
  return (
    <>
      <div className='top-header-block d-flex align-items-center justify-content-between'>
        <PageTitle toggle={toggle} setToggle={setToggle} setOpen={setOpen} />
        {location?.pathname === "/patientdetails"? "" : <SearchBar setSearch={setSearchData ? setSearchData : ''} />}
        <UserAvtar />
      </div>
    </>
  )
}
