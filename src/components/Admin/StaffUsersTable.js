import {Dialog, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'
import ClinicianInfo from '../common/Table/ClinicianInfo';
import AddStaffUser from './AddStaffUser';
  


export default function StaffUsersTable({setOpen,open}) {
   
    const [staffUser,setStaffUser]=useState([
        {
            "id": 1,
            "name": "",
            "email": "Sarah.McDonnell@WatchDoc.com.au",
            "phone": "07 3519 6963",
            "lastlogin" : "23/02/2023",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "Sarah McDonnell"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
        },
        {
            "id": 2,
            "name": "",
            "email": "Sarah.Kalanie@WatchDoc.com.au",
            "phone": "03 9873 5645",
            "lastlogin" : "23/02/2023",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "Sarah Kalanie"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
            
        },
        {
            "id": 3,
            "name": "",
            "email": "Bethan.McDonald@WatchDoc.com.au",
            "phone": "02 6180 8500",
            "lastlogin" : "23/02/2023",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "Bethan McDonald"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
        },
        {
            "id": 4,
            "name": "",
            "email": "Dr.Nerida@WatchDoc.com.au",
            "phone": "07 3519 6963",
            "lastlogin" : "23/02/2023",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "Dr Nerida"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
        },
        {
            "id": 5,
            "name": "",
            "email": "drben@WatchDoc.com.au",
            "phone": "03 2658 8541",
            "lastlogin" : "23/02/2023",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "dr ben"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
        }
    ])

    const [data] = useState(staffUser)
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    const handleChange = (event, value) => {
        setCurrentPage(value)
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
    <>
  

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-staff-user-dialog"
        aria-describedby="add-staff-user-dialog"
        className='add-staff-user-dialog'
      >
        <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
        <AddStaffUser staffUser={staffUser} setStaffUser={setStaffUser} setOpen={setOpen}/>
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
            {currentRecords?.map((data, i) => (
                <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    <ClinicianInfo data={data}/>
                    </TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.lastlogin}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    {currentRecords?.length === 0 ? "" :
                <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
            }
    </>
  )
}
