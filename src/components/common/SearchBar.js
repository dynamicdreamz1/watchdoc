import React from 'react'
import { getCurrentUserData } from '../../services/UserService';
import { useLocation } from 'react-router-dom';


export default function SearchBar({setSearch}) {
  const userData=getCurrentUserData();
  const location = useLocation()

  const searchInpitData = (e) =>{
    if (setSearch) {
      setSearch(e?.target?.value)
    }
  }
const placeHolderText=
userData?.roles[0]?.name==='User' || (userData?.roles[0]?.name==='Admin'&& location?.pathname==='/clinicians')?"Search For Clinician":userData?.roles[0]?.name==='Clinician' || 
(userData?.roles[0]?.name==='Admin'&& location?.pathname==='/adminpatient')?"Search For Patients":""

  return (
    <>
      <form method='post' className='search-block'>
        <input onChange={(e)=>searchInpitData(e)} type="search" name="search" placeholder={placeHolderText} />
      </form>
    </>
  )
}
