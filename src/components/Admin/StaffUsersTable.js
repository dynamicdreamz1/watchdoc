import { Dialog, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ClinicianInfo from '../common/Table/ClinicianInfo';
import AddStaffUser from './AddStaffUser';
import { getStaffUsers , deleteStaffUsers } from '../../services/AdminService';
import { MetaFormeting } from '../../Utility/functions';
import { useLocation } from 'react-router-dom';
import { TableSkeleton } from '../../Utility/Skeleton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { getCurrentUserData } from '../../services/UserService';


export default function StaffUsersTable({ setOpen, open, addNewStaff,setAddNewStaff,searchData,setSearchData }) {
    const userData=getCurrentUserData()
    const [staffUser, setStaffUser] = useState([])
    const [loading, setLoading] = useState(false)
    let location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    let limit = 10;
    const [countryCode, setcountryCode] = useState('+91');

    const handleChangePage = (e, newValue) => {
        setCurrentPage(newValue)
    }

    const StaffUserData = async (limit, currentPage ,searchData) => {
        setLoading(true)
        const response = await getStaffUsers(limit, currentPage,searchData ? searchData :'');
        if(response.status === 200){
            setStaffUser(response.data?.data)
        }
        setLoading(false)
        let nPages = Math.ceil(response?.data?.total / limit)
        setTotalPages(nPages)
    }

    useEffect(() => {
        StaffUserData(limit, currentPage ,searchData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, currentPage,searchData])


    const handleClose = () => {
        setOpen(false);
    };


    const handleClickDelete=async(id)=>{
        try {
          const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete',
            limit:1,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
          });
          if (result.isConfirmed) {
            const res = await deleteStaffUsers(id);  
            setSearchData("")
            await StaffUserData(limit, currentPage)
            toast.success(res?.data?.message, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
    
          }
        } catch (error) {
          toast.error(error, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }       
    }
   
    const handleClickEdit=(data)=>{
        setOpen(true)
        const countryCodeMatch = data?.contact_number?.match(/^\+(\d+)/);
        const countryCode = countryCodeMatch ? countryCodeMatch[1] : "";
        const phoneNumber = data?.contact_number?.replace(/^\+\d+\s/, "");
        setcountryCode(`+${countryCode}`);
        const editData = MetaFormeting(data)
        setAddNewStaff({
            "id":data?.id,
            "title": "Dr",
            "firstname": editData?.first_name || "",
            "lastname": editData?.last_name,
            "email": data?.email,
            "number":phoneNumber,
            "practicename":editData?.practice_name,
            "practiceaddress": editData?.practice_address,
            "password": "",
            "profile_pic" : editData?.profile_pic,
        })
        
    }

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
                <AddStaffUser addNewStaff={addNewStaff} setAddNewStaff={setAddNewStaff} 
                staffUser={staffUser} setCurrentPage={setCurrentPage} limit={limit}
                 currentPage={currentPage} setStaffUser={setStaffUser} setOpen={setOpen}
                  StaffUserData={StaffUserData} countryCode={countryCode} setcountryCode={setcountryCode}/>
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
                                <TableCell>Delete</TableCell>
                                <TableCell>Edit</TableCell>

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
                                       {userData.id === data.id ? "" :<TableCell > <button onClick={() => handleClickDelete(data.id)}><DeleteIcon/><img src="" alt="" /> </button></TableCell> } 
                                       {userData.id === data.id ? "" : <TableCell  > <button onClick={() => handleClickEdit(data)}><EditIcon/><img src="" alt="" /> </button></TableCell>}

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
