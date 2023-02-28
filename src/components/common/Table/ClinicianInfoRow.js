import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import Email from './Email'
import PendingPatients from './PendingPatients'
import Phone from './Phone'

export default function ClinicianInfoRow({data}) {

  return (
    <>
    <TableRow>
        <TableCell><ClinicianInfo data={data}/></TableCell>
        <TableCell><Email data={data}/></TableCell>
        <TableCell><Phone data={data}/></TableCell>
        <TableCell align='center'><ConnectedPatients/></TableCell>
        <TableCell align='center'><PendingPatients/></TableCell>
    </TableRow>
    </>
  )
}
