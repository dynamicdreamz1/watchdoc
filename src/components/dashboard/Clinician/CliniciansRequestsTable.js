import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import UserProfile from '../../common/UserProfile';
import { useTranslation } from 'react-i18next';


function createData(name, email, phone, connected_patients, pending_patients) {

    return { name, email, phone, connected_patients, pending_patients };
}

const rows = [
    createData(
        <div className='name'><UserProfile/></div>, 
        <div className='email'><span>info@neighbourhoodmedical.com.au</span></div>, 
        <div className='phone'><span>07 3519 6963</span></div>, 
        <div className='cp'><span>0</span></div>, 
        <div className='pp'><span>1</span></div>
    ),
    createData(
        <div className='name'><UserProfile/></div>, 
        <div className='email'><span>info@neighbourhoodmedical.com.au</span></div>, 
        <div className='phone'><span>07 3519 6963</span></div>, 
        <div className='cp'><span>0</span></div>, 
        <div className='pp'><span>1</span></div>
    ),
    createData(
        <div className='name'><UserProfile/></div>, 
        <div className='email'><span>info@neighbourhoodmedical.com.au</span></div>, 
        <div className='phone'><span>07 3519 6963</span></div>, 
        <div className='cp'><span>0</span></div>, 
        <div className='pp'><span>1</span></div>
    ),
    createData(
        <div className='name'><UserProfile/></div>, 
        <div className='email'><span>info@neighbourhoodmedical.com.au</span></div>, 
        <div className='phone'><span>07 3519 6963</span></div>, 
        <div className='cp'><span>0</span></div>, 
        <div className='pp'><span>1</span></div>
    )
];

export default function CliniciansRequestsTable() {

    const {t}=useTranslation();

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
                    <TableCell> {t('DashboardPage.Aside.CliniciansRequestsTable.l1')} </TableCell>
                    <TableCell> {t('DashboardPage.Aside.CliniciansRequestsTable.l2')} </TableCell>
                    <TableCell> {t('DashboardPage.Aside.CliniciansRequestsTable.l3')} </TableCell>
                    <TableCell align="center"> {t('DashboardPage.Aside.CliniciansRequestsTable.l4')} </TableCell>
                    <TableCell align="center"> {t('DashboardPage.Aside.CliniciansRequestsTable.l5')} </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell align="center">{row.connected_patients}</TableCell>
                    <TableCell align="center">{row.pending_patients}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
