import { Button, Dialog, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import AddStaffUser from './AddStaffUser';
  
const StaffUser = [
    {
        "id": 1,
        "name": "",
        "email": "Sarah.McDonnell@WatchDoc.com.au",
        "phone": "07 3519 6963",
        "lastlogin" : "23/02/2023"
    },
    {
        "id": 2,
        "name": "",
        "email": "Sarah.Kalanie@WatchDoc.com.au",
        "phone": "03 9873 5645",
        "lastlogin" : "23/02/2023"
    },
    {
        "id": 3,
        "name": "",
        "email": "Bethan.McDonald@WatchDoc.com.au",
        "phone": "02 6180 8500",
        "lastlogin" : "23/02/2023"
    },
    {
        "id": 4,
        "name": "",
        "email": "Dr.Nerida@WatchDoc.com.au",
        "phone": "07 3519 6963",
        "lastlogin" : "23/02/2023"
    },
    {
        "id": 5,
        "name": "",
        "email": "drben@WatchDoc.com.au",
        "phone": "03 2658 8541",
        "lastlogin" : "23/02/2023"
    }
];

export default function StaffUsersTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
    <>
    <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-staff-user-dialog"
        aria-describedby="add-staff-user-dialog"
        className='add-staff-user-dialog'
      >
        <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
        <AddStaffUser/>
      </Dialog>
    <TableContainer component={Paper} className="red-alert-table table-without-space">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Last Login</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {StaffUser.map((data, i) => (
                <TableRow
                    key={data.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {data.name}
                    </TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.lastlogin}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
