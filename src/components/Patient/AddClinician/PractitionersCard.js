import React, { useContext, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { addDoctor, searchClinician } from '../../../services/ClinicianService';
import '../../../css/PractitionersCard.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { UserContext } from '../../../pages/AddClinicianInner'
import { AddClincianOuterContext } from '../../../pages/AddClinicianOuter';
import Pagination from '@mui/material/Pagination';
import { ClinicianCard } from '../../../Utility/Skeleton';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ status, setStatus }) {

    const { t } = useTranslation();

    const delay = 500;
    let lastExecution = 0;
    const [btnStatus, setBtnStatus] = useState(false)


    const { addData, clinicianData, setClinicianData } = useContext(window.location.pathname === "/editclinician" ? UserContext : AddClincianOuterContext);

    const recordsPerPage = 3;

    const [currentPage, setCurrentPage] = useState(1)
    const nPages = Math.ceil(clinicianData?.data?.data?.data?.length / recordsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value)
    }

    const firstPageIndex = (currentPage - 1) * recordsPerPage;
    const lastPageIndex = firstPageIndex + recordsPerPage;

    const currentTableData = clinicianData?.data?.data?.data?.slice(firstPageIndex, lastPageIndex)
    const payload = {
        clinician_name: addData?.clinicianName,
        practice_name: addData?.practitionerName,
        zip: addData?.code
    }


    useEffect(() => {
        if (addData?.clinicianName || addData?.practitionerName || addData?.code) {


            searchClinician(payload)
                .then((res) => {
                    console.log(res)
                    setClinicianData(res)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnStatus])

    const addClinician = (ID, ElStatus) => {

        if (((lastExecution + delay) < Date.now()) && ElStatus !== 1) {

            const data = {
                id: ID,
                relation: 'link'
            }

            addDoctor(data)
                .then((res) => {
                    console.log(res)
                    setStatus(!status)
                    setBtnStatus(!btnStatus)


                })
                .catch((error) => {
                    console.log(error)
                })
            lastExecution = Date.now()
        }
    }


    return (
        <React.Fragment>

            <div className='practitioners-card'>
                {clinicianData?.data?.data?.length === 0 ? <span style={{ color: "red" }}>{t('PractitionersCard.message1')}</span> : ""}

                <>

                    {currentTableData?.length > 0 && currentTableData.map((element) =>

                        <div key={element.id}>
                            <div className='card d-flex'>
                                <div className='user-image'>

                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>

                                            {user_data?.meta_key === "image" && <><img src={user_data?.meta_value} alt='User' /></>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className='text-block'>

                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>
                                            {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                        </React.Fragment>
                                    ))}
                                    {element?.hospital?.length > 0 && element?.hospital.map((hospital) => (
                                        <React.Fragment key={hospital.id}>
                                            {
                                                hospital?.meta_data?.length > 0 && hospital?.meta_data.map((user_data) => (
                                                    <React.Fragment key={user_data.id}>
                                                        {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </React.Fragment>
                                    ))}
                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>
                                            {user_data?.meta_key === "address" && <>{user_data?.meta_value}<br /></>}
                                        </React.Fragment>
                                    ))}


                                    <div className='add-fav'  >

                                        <FormControlLabel onClick={() => { addClinician(element.id, element.status) }}
                                            control={
                                                <Checkbox {...label} className={element?.status === 1 ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

                                        label={element?.status === 1 ? <span className='btn_status'>Pending Clinician Approval</span> : "Add to WatchDoc"} />

                                    </div>


                                </div>
                            </div>
                        </div>)
                    }
                    <ClinicianCard/>
                </>
                
            </div>

            {(clinicianData?.data?.data?.length === 0) || (currentTableData === undefined) ? "" :
                <Pagination count={nPages} variant="outlined" shape="rounded" onChange={(newEvent, value) => handleChange(newEvent, value)} className='table-pagination' />
            }
        </React.Fragment>
    )
}
