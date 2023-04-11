import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
      navigate("/patientdetails")
    }
    


  }
  return (
    <>
    <TableRow >
        <TableCell onClick={handleClicknavigate}><PatientInfo el={el}/></TableCell>
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
