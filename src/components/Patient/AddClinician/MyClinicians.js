import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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




export default function MyClinicians({ status }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);
    const [deleteStatus, setDeleteStatus] = useState(false);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(data.length / recordsPerPage)
    const { addData, setClinicianData } = useContext(InnerClinicianContext)

    useEffect(() => {
        if (nPages < currentPage) {
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
        }
    }, [nPages, currentPage])


    const DeleteRequest = async (ID) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this item!',
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
        setLoading(true)
        getClinicianData()

            .then((res) => {
                console.log(res)
                setData(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

        if (addData.clinicianName || addData.practitionerName || addData.code) {
            searchClinician(deletedData)
                .then((res) => {
                    console.log(res)
                    setClinicianData(res)

                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, deleteStatus])



    const handleChange = (event, value) => {

        setCurrentPage(value)
    };



    return (
        <>
            <TableContainer component={Paper} className="clinicians-table">
                <div className='table-title'>
                    <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                    <h4>{t('MyClinicians.heading1')}</h4>
                </div>


                {loading === true ? <TableSkeleton /> :
                    <>
                        {currentRecords?.length > 0 ?
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

                                    {currentRecords?.map(el => {

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
                                            <TableCell align="center" className='status'>Pending</TableCell>
                                            <TableCell align="center" > <button onClick={() => DeleteRequest(el.id)}> Delete<img src="" alt="" /> </button></TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table> : <>{t('MyClinicians.notAdd')}</>}
                    </>
                }

            </TableContainer>
            {data.length === 0 ? "" :
                <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
            }
        </>
    )
}
