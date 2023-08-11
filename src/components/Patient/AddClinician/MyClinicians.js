import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import UserProfile from '../../common/UserProfile';
import Email from '../../common/Table/Email';
import Phone from '../../common/Table/Phone';
import { addDoctor, getClinicianData, searchClinician } from '../../../services/ClinicianService';
import { useTranslation } from 'react-i18next';
import { TableSkeleton } from '../../../Utility/Skeleton';
import Pagination from '@mui/material/Pagination';
import { InnerClinicianContext } from '../../../pages/AddClinicianInner';
import Swal from 'sweetalert2';




export default function MyClinicians({ status,searchData,setSearchData}) {
    const { addData, setClinicianData } = useContext(InnerClinicianContext)
    const { t } = useTranslation();
    const [deleteStatus, setDeleteStatus] = useState(false);

    const [allClinicianData, setAllClinicianData] = useState([])
    const [currentPageAllClinicianData, setCurrentPageAllClinicianData] = useState(1);
    const [totalPagesAllClinicianData, setTotalPagesAllClinicianData] = useState(0);
    const [dataLimitAllClinicianData] = useState(5)
    const [loadingAllClinicianData, setLoadingAllClinicianData] = useState(false)
  
  const getAllClinicianData=async(currentPageAllClinicianData,dataLimitAllClinicianData,searchData)=>{
    setLoadingAllClinicianData(true);
    const res=await getClinicianData(searchData?1:currentPageAllClinicianData,dataLimitAllClinicianData,searchData ? searchData :'')
    setTotalPagesAllClinicianData(Math.ceil(res?.data?.data?.total / dataLimitAllClinicianData))
    if(res?.status===200){
        setAllClinicianData(res?.data?.data)
    }
    setLoadingAllClinicianData(false)
}

useEffect(()=>{
    getAllClinicianData(currentPageAllClinicianData,dataLimitAllClinicianData,searchData)
},[currentPageAllClinicianData,dataLimitAllClinicianData,searchData,deleteStatus])

    const DeleteRequest = async (ID) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this clinician!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the delete operation
                const apiData = {
                    id: ID,
                    relation: 'unlink'
                }
                addDoctor(apiData)
                    .then((res) => {
                        setDeleteStatus(!deleteStatus)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    setSearchData("")
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
            }
        });

    }

    const deletedData = {
        clinician_name: addData.clinicianName,
        practice_name: addData.practitionerName,
        zip: addData.code
    }

    useEffect(() => {     
        if (addData.clinicianName || addData.practitionerName || addData.code) {
            searchClinician(deletedData)
                .then((res) => {
                    setClinicianData(res)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, deleteStatus])

   
const handleChangeClinicianPagination = (event, newPage) => {
    setCurrentPageAllClinicianData(newPage);
  };
    return (
        <>
            <TableContainer component={Paper} className="clinicians-table">
                <div className='table-title'>
                    <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                    <h4>{t('MyClinicians.heading1')}</h4>
                </div>
                {loadingAllClinicianData === true ? <TableSkeleton /> :
                    <>
                        {allClinicianData?.total > 0 ?
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{t('MyClinicians.tableCell1')}</TableCell>
                                        <TableCell>{t('MyClinicians.tableCell2')}</TableCell>
                                        <TableCell>{t('MyClinicians.tableCell3')}</TableCell>
                                        <TableCell align="center">{t('MyClinicians.tableCell4')}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allClinicianData && allClinicianData?.data?.map(el => {
                                        return <TableRow key={el.id}>
                                            <TableCell className='user-profile-cell'>
                                                <UserProfile data={el} />
                                            </TableCell>
                                            <TableCell>
                                                <Email email={el?.email} />
                                            </TableCell>
                                            <TableCell>
                                                <Phone number={el?.contact_number} />
                                            </TableCell>
                                            <TableCell align="center" className={el.request_status === 1 ? "text color-light-green" : "status"}>{el.request_status === 1 ? "Reviewed" : "Pending"}</TableCell>
                                            <TableCell align="center" > <button onClick={() => DeleteRequest(el.id)}> <DeleteIcon /><img src="" alt="" /> </button></TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table> : <>{t('MyClinicians.notAdd')}</>}
                    </>
                }
            </TableContainer>

            {allClinicianData?.total > 0 &&
                <Pagination page={currentPageAllClinicianData} onChange={handleChangeClinicianPagination} count={totalPagesAllClinicianData} variant="outlined" shape="rounded" className='table-pagination' />
            }
        </>
    )
}
