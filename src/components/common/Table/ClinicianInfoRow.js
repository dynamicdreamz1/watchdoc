import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import Email from './Email'
import PendingPatients from './PendingPatients'
import Phone from './Phone'

export default function ClinicianInfoRow() {
  return (
    <>
    <TableRow>
        <TableCell><ClinicianInfo/></TableCell>
        <TableCell><Email/></TableCell>
        <TableCell><Phone/></TableCell>
        <TableCell align='center'><ConnectedPatients/></TableCell>
        <TableCell align='center'><PendingPatients/></TableCell>
    </TableRow>
    </>
  )
}
