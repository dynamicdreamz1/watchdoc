import React, { useContext, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { addDoctor, searchClinician } from '../../../services/ClinicianService';
import '../../../css/PractitionersCard.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { InnerClinicianContext } from '../../../pages/AddClinicianInner'
import { AddClincianOuterContext } from '../../../pages/AddClinicianOuter';
import Pagination from '@mui/material/Pagination';
import { ClinicianCard } from '../../../Utility/Skeleton';
import { MetaFormeting} from '../../../Utility/functions';
import defaultUserIcon from "../../../../src/assets/images/defaultUserIcon.png"
import { useLocation } from 'react-router-dom';
import { AdminUserContext } from '../../Clinician/Overlays/CliniciansOverlay';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ status, setStatus, isSkeleton,action }) {
    const { currentPageClinician,setCurrentPageClinician,totalPagesClinician,dataLimitClinician,setTotalPagesClinician,setIsSkeleton}=action;
    const location=useLocation();
    const { t } = useTranslation();
    const delay = 500;
    let lastExecution = 0;
    const [btnStatus, setBtnStatus] = useState(false)
    const { addData, clinicianData, setClinicianData, setNextBtn} = useContext(location.pathname === "/editclinician" ? InnerClinicianContext : location.pathname==="/addclinician" ? AddClincianOuterContext : location.pathname==="/patientdetails"?AdminUserContext:"");
    // const recordsPerPage = 3;
    // const nPages = Math.ceil(clinicianData?.data?.data?.data?.length / recordsPerPage);
    // const firstPageIndex = (currentPage - 1) * recordsPerPage;
    // const lastPageIndex = firstPageIndex + recordsPerPage;
    const currentTableData = clinicianData?.data?.data?.data;
    const payload = {
        clinician_name: addData?.clinicianName,
        practice_name: addData?.practitionerName,
        zip: addData?.code
    }
    useEffect(() => {
        if (addData?.clinicianName || addData?.practitionerName || addData?.code) {
            setIsSkeleton(true)
            searchClinician(payload,dataLimitClinician,currentPageClinician)
                .then((res) => {
                    setClinicianData(res)
                    setTotalPagesClinician(Math.ceil(res?.data?.data?.total / dataLimitClinician))
                    setIsSkeleton(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnStatus,currentPageClinician,dataLimitClinician])

    useEffect(()=>{
        const state=clinicianData?.data?.data?.data?.some((element)=>element.status===1)
        if(state !==undefined){
            setNextBtn(state)
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentTableData])

    const addClinician = (ID, ElStatus) => {
        if (((lastExecution + delay) < Date.now()) && ElStatus !== 1) {
            const data = {
                id: ID,
                relation: 'link'
            }
            addDoctor(data)
                .then((res) => {
                    setStatus(!status)
                    setBtnStatus(!btnStatus)
                })
                .catch((error) => {
                    console.log(error)
                })
            lastExecution = Date.now()
        }
    }

    const handleChange = (event, value) => {
        // setCurrentPage(value)
        setCurrentPageClinician(value)
    }

    return (
        <React.Fragment>
            {isSkeleton
                ?
                <ClinicianCard />
                :
                <>
                    <div className='practitioners-card'>
                        {clinicianData?.data?.data?.data?.length === 0 ? <span style={{ color: "red" }}>{t('PractitionersCard.message1')}</span> : ""}

                        {
                            currentTableData?.length > 0 && currentTableData.map((element, I) => {
                                let data= MetaFormeting(element)
                                return (
                                    <div key={element.id}>                            
                                        <div className='card d-flex' key={I}>
                                        <div className='user-image'>                                        
                                            <img src={(data?.image ||data?.profile_pic) ||defaultUserIcon} alt='User' />                                   
                                        </div>
                                        <div className='text-block'>
                                         <>{data?.first_name}</>
                                        <>{data?.address ||data?.practice_address}</>
                                            <div className='add-fav'  >
                                                <FormControlLabel onClick={() => { addClinician(element.id, element.status) }}
                                                    control={
                                                        <Checkbox {...label} className={element?.status === 1 ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                                                    label={element?.status === 1 ? <span className='btn_status'> {t('PractitionersCard.buttonOption2')} </span> : t('PractitionersCard.buttonOption1')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                )
                            })
                        }
                    </div>
                    {(clinicianData?.data?.data?.data?.length === 0) || (currentTableData === undefined) ? "" :
                        // <Pagination count={totalPagesClinician} variant="outlined" shape="rounded" onChange={(newEvent, value) => handleChange(newEvent, value)} className='table-pagination' />
                        <Pagination page={currentPageClinician} onChange={(newEvent, value) => handleChange(newEvent, value)} count={totalPagesClinician} variant="outlined" shape="rounded" className='table-pagination' />

                    }
                </>
            }
        </React.Fragment>
    )
}
