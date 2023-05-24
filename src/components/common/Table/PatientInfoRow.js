import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MetaFormeting } from '../../../Utility/functions'
import Bg from './Bg'
import Bo from './Bo'
import Bp from './Bp'
import Hr from './Hr'
import PatientInfo from './PatientInfo'
import Status from './Status'
import Temp from './Temp'
import Wt from './Wt'

export default function PatientInfoRow(props) {
  const navigate=useNavigate();
  const location=useLocation();
  const {el,value,handleClickOpenRequestPopUp}=props;
  const {age,gender}=el

 
  // const navigateRoute=location.pathname==="/dashboard" ||location.pathname==="/patients" ?"/patientdetails":location.pathname==="/cliniciandetails"?"":""
  const handleClicknavigate=()=>{
    if(location.pathname==="/dashboard" ||location.pathname==="/patients"){
      navigate("/patientdetails",{state:{
        data:el,
        age:DynamicAge
      }})
    }
  }
  const { first_name, full_name, last_name, sex, dob } = MetaFormeting(el)

  const dobStr = dob;

  const dobN = new Date(dobStr);

  const today = new Date();

  const diffMs = today.getTime() - dobN.getTime();

  const DynamicAge = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));


  return (
    <>
    <TableRow >
        {/* <TableCell onClick={handleClicknavigate}><PatientInfo el={el}/></TableCell> */}
        <TableCell onClick={handleClicknavigate}><PatientInfo el={el} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp} first_name={el?.first_name} value={value} full_name={full_name} name={el?.name} last_name={el?.last_name} sex={sex}  DynamicAge={DynamicAge} staticAge={age} staticGender={gender} /></TableCell>
        <TableCell><Bp el={el} value={value} /></TableCell>
        <TableCell><Hr el={el} value={value} /></TableCell>
        <TableCell><Bo el={el} value={value} /></TableCell>
        <TableCell><Bg el={el}/></TableCell>
        <TableCell><Temp el={el}/></TableCell>
        <TableCell><Wt el={el} value={value} /></TableCell>
        <TableCell ><Status el={el} value={value} /></TableCell>
    </TableRow>
    </>
  )
}
