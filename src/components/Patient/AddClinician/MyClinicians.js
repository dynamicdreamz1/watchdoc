import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import UserProfile from '../../common/UserProfile';
import Email from '../../common/Table/Email';
import Phone from '../../common/Table/Phone';

export default function MyClinicians() {
  return (
    <>
        <TableContainer component={Paper} className="clinicians-table">
            <div className='table-title'>
                <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                <h4>My Clinicians</h4>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <UserProfile/>
                        </TableCell>
                        <TableCell>
                            <Email/>
                        </TableCell>
                        <TableCell>
                            <Phone/>
                        </TableCell>
                        <TableCell align="center">Pending</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
