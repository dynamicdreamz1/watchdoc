import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import UserProfile from '../common/UserProfile';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';

function createData(name, email, phone, connected_patients, pending_patients) {
    return { name, email, phone, connected_patients, pending_patients };
}

export default function CliniciansRequestsTable() {
  return (
    <>
    <TableContainer component={Paper} className="clinicians-table">
        <div className='table-title'>
            <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
            <h4>Clinicians Requests (5)</h4>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell align="center">Connected Patients</TableCell>
                    <TableCell align="center">Pending Patients</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <ClinicianInfoRow/>
                <ClinicianInfoRow/>
                <ClinicianInfoRow/>
                <ClinicianInfoRow/>
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
