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
  const {el}=props;
  // console.log(el);
  // const navigateRoute=location.pathname==="/dashboard" ||location.pathname==="/patients" ?"/patientdetails":location.pathname==="/cliniciandetails"?"":""
  const handleClicknavigate=()=>{
    if(location.pathname==="/dashboard" ||location.pathname==="/patients"){
      navigate("/patientdetails",{state:{
        data:el,
        age:age
      }})
    }
  }
  
  const { first_name, full_name, last_name, sex, dob } = MetaFormeting(el)

  const dobStr = dob;

  const dobN = new Date(dobStr);

  const today = new Date();

  const diffMs = today.getTime() - dobN.getTime();

  const age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));


  return (
    <>
    <TableRow >
        {/* <TableCell onClick={handleClicknavigate}><PatientInfo el={el}/></TableCell> */}
        <TableCell onClick={handleClicknavigate}><PatientInfo first_name={first_name} full_name={full_name} last_name={last_name} sex={sex}  age={age} /></TableCell>
        <TableCell><Bp el={el}/></TableCell>
        <TableCell><Hr el={el}/></TableCell>
        <TableCell><Bo el={el}/></TableCell>
        <TableCell><Bg el={el}/></TableCell>
        <TableCell><Temp el={el}/></TableCell>
        <TableCell><Wt el={el}/></TableCell>
        <TableCell ><Status el={el}/></TableCell>
    </TableRow>
    </>
  )
}
