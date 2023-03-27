import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import Email from './Email'
import PendingPatients from './PendingPatients'
import Phone from './Phone'

export default function ClinicianInfoRow({value,data}) {

  return (
    <>
    <TableRow>
        <TableCell><ClinicianInfo data={data}/></TableCell>
        <TableCell><Email email={data?.email}/></TableCell>
        <TableCell><Phone data={data}/></TableCell>
        {value === 0 ? "" :
        <>
        <TableCell align='center'><ConnectedPatients/></TableCell>
        <TableCell align='center'><PendingPatients/></TableCell>
        </>
      }
    </TableRow>
    </>
  )
}
