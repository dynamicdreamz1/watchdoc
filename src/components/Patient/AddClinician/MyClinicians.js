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
import { UserContext } from '../../../pages/AddClinicianInner';


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
    // console.log(currentRecords)

    const nPages = Math.ceil(data.length / recordsPerPage)
    const { addData,setClinicianData } = useContext(UserContext)
    
    // if(nPages>currentPage+1){
    //     setCurrentPage(nPages)
    // }
    
    const DeleteRequest = (ID) => {
        const confirmBox = window.confirm('Are you sure do you want to cancel this request ?')

        if (confirmBox === true) {
            const data = {
                id: ID,
                relation: 'unlink'
            }

            addDoctor(data)
                .then((res) => {
                    setDeleteStatus(!deleteStatus)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
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

    useEffect(() => {
        // console.log(currentPage)
    }, [currentPage])

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
                                            <TableCell align="center">Pending</TableCell>
                                            <TableCell align="center" > <button onClick={() => DeleteRequest(el.id)}> Delete </button></TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table> : <>{t('MyClinicians.notAdd')}</>}
                    </>
                }

            </TableContainer>
            <Pagination nPages={nPages} currentPage={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
        </>
    )
}
