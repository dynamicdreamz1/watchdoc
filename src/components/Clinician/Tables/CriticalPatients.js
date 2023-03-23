import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PatientInfoRow from '../../common/Table/PatientInfoRow'
import Paper from '@mui/material/Paper';

export default function CriticalPatients(props) {
    const {patientData,handleClickStatus}=props
  return (
    <>
    <TableContainer component={Paper} className="red-alert-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Patient</TableCell>
                    <TableCell>BP</TableCell>
                    <TableCell>HR</TableCell>
                    <TableCell>BO</TableCell>
                    <TableCell>BG</TableCell>
                    <TableCell>Temp</TableCell>
                    <TableCell>Wt</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
    {patientData.length!==0 && patientData?.map((el,I)=>{
        return(
            <TableBody key={I}>
                <PatientInfoRow el={el} handleClickStatus={handleClickStatus}/>
                {/* <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/> */}
            </TableBody>

        )
    })
            
}
        </Table>
    </TableContainer>
    </>
  )
}
