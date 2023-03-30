import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import Email from './Email'
import PendingPatients from './PendingPatients'
import Phone from './Phone'


export default function ClinicianInfoRow({value,data,clinicianStaff}) {

  const location=useLocation()
  return (
    <>
    <TableRow>
        <TableCell><ClinicianInfo data={data} clinicianStaff={clinicianStaff}/></TableCell>
        {location.pathname==="/patientdetails" ? ""  : <TableCell><Email email={data?.email}/></TableCell> }
        <TableCell><Phone data={data}/></TableCell>
        {value === 0 ? "" :
        <>
        {location.pathname==="/patientdetails" ? "" : <TableCell align='center'><ConnectedPatients/></TableCell> }
        {location.pathname==="/patientdetails" ? "" :  <TableCell align='center'><PendingPatients/></TableCell> }
        </>
      }
      
    </TableRow>
    </>
  )
}
