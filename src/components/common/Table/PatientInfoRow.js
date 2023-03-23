import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Bg from './Bg'
import Bo from './Bo'
import Bp from './Bp'
import Hr from './Hr'
import PatientInfo from './PatientInfo'
import Status from './Status'
import Temp from './Temp'
import Wt from './Wt'

export default function PatientInfoRow() {
  const navigate=useNavigate();
  return (
    <>
    <TableRow >
        <TableCell onClick={()=>{navigate('/patientdetails')}}><PatientInfo/></TableCell>
        <TableCell><Bp/></TableCell>
        <TableCell><Hr/></TableCell>
        <TableCell><Bo/></TableCell>
        <TableCell><Bg/></TableCell>
        <TableCell><Temp/></TableCell>
        <TableCell><Wt/></TableCell>
        <TableCell><Status/></TableCell>
    </TableRow>
    </>
  )
}
