import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import { TableSkeleton } from '../Utility/Skeleton';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import { useLocation } from 'react-router-dom';
import { RelatedAllUserClinician } from '../services/ClinicianService';
import UserProfile from '../components/common/UserProfile';
import Email from '../components/common/Table/Email';
import Phone from '../components/common/Table/Phone';

export default function AllClinician() {
    const location = useLocation()
    const { state } = location;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const [allclinicianData, setAllClinicianData] = useState()
    const [currentPage,setCurrentPage]=useState(1)
    const [totalpageCount,setTotalPageCount]=useState(0)
    const [dataLimit] = useState(5)

    const handleChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const fetchData = async (dataLimit, currentPage) => {
        setLoading(true)
        const response = await RelatedAllUserClinician(state?.userId,dataLimit, currentPage)
        setTotalPageCount(Math.ceil(response?.data?.clinicians?.total / dataLimit));
        setAllClinicianData(response?.data?.clinicians?.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(dataLimit, currentPage) 
    }, [dataLimit, currentPage])



    return (
        <>

            <div className='content-wrapper'>
                <Sidebar />
                <div className='aside'>
                    <Header />

                    {loading ? <TableSkeleton />
                        :
                        <>
                            <TableContainer component={Paper} className="clinicians-table">
                                <div className='table-title'>
                                    <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                                    <h4>{t('MyClinicians.heading1')}</h4>
                                </div>
                                {loading === true ? <TableSkeleton /> :
                                    <>
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

                                                {allclinicianData?.map(el => {
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
                                                            <TableCell align="center"className={el?.request_status===1? "color-light-green" : "status text color-light-blue"}>{el?.request_status===1?"Reviewed":"Pending"}</TableCell>
                                                    </TableRow>
                                                })}
                                            </TableBody>
                                        </Table>
                                    </>
                                }
                            </TableContainer>
                            <Pagination page={currentPage} onChange={handleChange} count={totalpageCount} variant="outlined" shape="rounded" className='table-pagination' />
                        </>
                    }

                </div>
            </div>


        </>
    )
}
