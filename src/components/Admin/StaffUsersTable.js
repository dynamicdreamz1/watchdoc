import { Dialog, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ClinicianInfo from '../common/Table/ClinicianInfo';
import AddStaffUser from './AddStaffUser';
import { getStaffUsers } from '../../services/AdminService';
import { MetaFormeting } from '../../Utility/functions';
import { useLocation } from 'react-router-dom';
import { TableSkeleton } from '../../Utility/Skeleton';

export default function StaffUsersTable({ setOpen, open }) {
    const [staffUser, setStaffUser] = useState([])
    const [loading, setLoading] = useState(false)
    let location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    let limit = 10;

    const handleChangePage = (e, newValue) => {
        setCurrentPage(newValue)
    }

    const StaffUserData = async (limit, currentPage) => {
        setLoading(true)
        const response = await getStaffUsers(limit, currentPage);
        setStaffUser(response.data?.data)
        setLoading(false)
        let nPages = Math.ceil(response.data.total / limit)
        setTotalPages(nPages)
    }

    useEffect(() => {
        StaffUserData(limit, currentPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, currentPage])


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
                <AddStaffUser staffUser={staffUser} limit={limit} currentPage={currentPage} setStaffUser={setStaffUser} setOpen={setOpen} StaffUserData={StaffUserData} />
            </Dialog>
            {loading ? <TableSkeleton /> :
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

                            {staffUser?.length !== 0 && staffUser?.map((data, i) => {

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

            {location.pathname !== "/staffusers" || loading ? ""
                :
                <Pagination page={currentPage} onChange={handleChangePage} count={totalPages} variant="outlined" shape="rounded" className='table-pagination' />

            }
        </>
    )
}
