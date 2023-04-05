import { Dialog,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ClinicianInfo from '../common/Table/ClinicianInfo';
import AddStaffUser from './AddStaffUser';
import { getStaffUsers } from '../../services/AdminService';
import { MetaFormeting } from '../../Utility/functions';



export default function StaffUsersTable({ setOpen, open }) {
    const [staffUser, setStaffUser] = useState([])
    const [loading, setLoading] = useState(false)

    const StaffUserData = async () => {

        const response = await getStaffUsers();
        setStaffUser(response.data?.data)
        setLoading(false)
        console.log(response);
    }

    useEffect(() => {
        setLoading(true)
        StaffUserData()
    }, [])



    // const [data] = useState(staffUser)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [recordsPerPage] = useState(5);

    // const indexOfLastRecord = currentPage * recordsPerPage;
    // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


    // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

    // const nPages = Math.ceil(data.length / recordsPerPage)
    // const handleChange = (event, value) => {
    //     setCurrentPage(value)
    // };
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
                <AddStaffUser staffUser={staffUser} setStaffUser={setStaffUser} setOpen={setOpen} />
            </Dialog>
            {loading ? "Loading..." :
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
                            {/* {    (location.pathname==="/staff-users"?staffUser:currentRecords)?.map((data, i) => ( */}
                            {staffUser?.length > 0 && staffUser?.map((data, i) => {

                                const { last_login } = MetaFormeting(data)
                                return (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <ClinicianInfo data={data} />
                                        </TableCell>
                                        <TableCell>{data.email}</TableCell>
                                        <TableCell>{data.contact_number}</TableCell>
                                        <TableCell>{last_login}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

            {/* {location.pathname!=="/staff-users" && (currentRecords?.length === 0 ? "" :
                <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
    )
            } */}
        </>
    )
}
