import React from 'react'
import PageTitle from '../common/PageTitle'
import SearchBar from '../common/SearchBar'
import UserAvtar from '../common/UserAvtar'
import { useLocation } from 'react-router-dom';

export default function Header({ toggle, setToggle, setOpen,setSearchData,searchData }) {
  const location = useLocation()
  
  return (
    <>
      <div className='top-header-block d-flex align-items-center justify-content-between'>
        <PageTitle toggle={toggle} setToggle={setToggle} setOpen={setOpen} />
        {location?.pathname === "/patientdetails" ||location?.pathname === "/dashboard" || location?.pathname === "/edit-profile" || location?.pathname === "/editlinkdevice"  ?  "" : 
        <SearchBar setSearch={setSearchData} searchData={searchData}/>}
        <UserAvtar />
      </div>
    </>
  )
}
