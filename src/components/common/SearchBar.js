import React from 'react'
import { getCurrentUserData } from '../../services/UserService';


export default function SearchBar({setSearch}) {
  const userData=getCurrentUserData();

  const searchInpitData = (e) =>{
    if (setSearch) {
      setSearch(e?.target?.value)
    }
  }
const placeHolderText=
userData?.roles[0]?.name==='User'?"Search For Clinician":userData?.roles[0]?.name==='Clinician'?"Search For Patients":
userData?.roles[0]?.name==='Admin'?"Search For clinician and patient":""

  return (
    <>
      <form method='post' className='search-block'>
        <input onChange={(e)=>searchInpitData(e)} type="search" name="search" placeholder={placeHolderText} />
      </form>
    </>
  )
}
