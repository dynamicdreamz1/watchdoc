import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ClinicianProfileBar from '../components/Clinician/ClinicianProfileBar'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'
import { getParticularClinicianDetails, getParticulatClinicianApprovePatient, getParticulatClinicianPatient } from '../services/AdminService'
import { Dialog, Pagination } from '@mui/material'
import AddClinician from '../components/Admin/AddClinician'
import { ChartResultRange, TableSkeleton } from '../Utility/Skeleton'
import { requestAndApprovePatient, reviewedUnReviwedCommon } from '../Utility/functions'


const ClinicianDetails = () => {
    const location = useLocation();
    const { id } = location?.state;
    const [profileBarData, setProfileBarData] = useState([])
    const [open, setOpen] = useState(false);
    const [viewAll] = useState(true)
    const [openAddClinicianPopUp, setOpenAddClinicianPopUp] = useState(false)
    const [loading, setLoading] = useState(false)



    const [allPendingPatientData, setAllPendingPatientData] = useState([]);
    const [currentPageAllPendingPatientData, setCurrentPageAllPendingPatientData] = useState(1);
    const [totalPagesAllPendingPatientData, setTotalPagesAllPendingPatientData] = useState(0);
    const [dataLimitAllPendingPatientData] = useState(5)
    const [loadingAllPendingPatientData, setLoadingAllPendingPatientData] = useState(false)
    const finalDataPendingpatientData = requestAndApprovePatient(allPendingPatientData?.data)


    const [allApprovePatientData, setAllApprovePatientData] = useState([]);
    const [currentPageAllApprovePatientData, setCurrentPageAllApprovePatientData] = useState(1);
    const [totalPagesAllApprovePatientData, setTotalPagesAllApprovePatientData] = useState(0);
    const [dataLimitAllApprovePatientData] = useState(5)
    const [loadingAllApprovePatientData, setLoadingAllApprovePatientData] = useState(false)
    const finalDataApprovepatientData = requestAndApprovePatient(allApprovePatientData?.data)



    const getAllParticularClinicianApprovePatientData = async (currentPageAllApprovePatientData, dataLimitAllApprovePatientData) => {
        setLoadingAllApprovePatientData(true)
        const res = await getParticulatClinicianApprovePatient(id, currentPageAllApprovePatientData, dataLimitAllApprovePatientData)
        setTotalPagesAllApprovePatientData(Math.ceil(res?.data?.data?.total / dataLimitAllApprovePatientData))
        if (res?.status === 200) {
            setAllApprovePatientData(res?.data?.data)
        }
        setLoadingAllApprovePatientData(false)
    }

    useEffect(() => {
        getAllParticularClinicianApprovePatientData(currentPageAllApprovePatientData, dataLimitAllApprovePatientData)

    }, [id, currentPageAllApprovePatientData, dataLimitAllApprovePatientData])


    const handleChangePageApprovePendingpatient = (event, newPage) => {
        setCurrentPageAllApprovePatientData(newPage);
    };





    const getAllParticularClinicianPatientData = async (currentPageAllPendingPatientData, dataLimitAllPendingPatientData) => {
        setLoadingAllPendingPatientData(true)
        const res = await getParticulatClinicianPatient(id, currentPageAllPendingPatientData, dataLimitAllPendingPatientData)
        setTotalPagesAllPendingPatientData(Math.ceil(res?.data?.data?.total / dataLimitAllPendingPatientData))
        if (res?.status === 200) {
            setAllPendingPatientData(res?.data?.data)
        }
        setLoadingAllPendingPatientData(false)
    }

    useEffect(() => {
        getAllParticularClinicianPatientData(currentPageAllPendingPatientData, dataLimitAllPendingPatientData)

    }, [id, currentPageAllPendingPatientData, dataLimitAllPendingPatientData])




    const handleChangePagePendingpatient = (event, newPage) => {
        setCurrentPageAllPendingPatientData(newPage);
    };



    const getClinicianDetail = async () => {
        setLoading(true)
        const res = await getParticularClinicianDetails(id);
        if (res?.status === 200) {
            setProfileBarData(res?.data?.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        getClinicianDetail()
    }, [id])


    const handleClose = () => {
        setOpenAddClinicianPopUp(false);
    };








    const handleClickReview = (data) => {
        // const filterData = patientData?.filter((el) => el?.id === data?.id)
        // const finalData = patientData?.filter((el) => el?.id !== data?.id)
        // setPatientData(finalData)
        // const tempData = filterData.map((el) => {
        //     el.status = "Reviewed"
        //     return el;
        // })

        // const mulitReviewData = [...reviewData, ...tempData]
        // setReviewData(mulitReviewData)
    }


    return (
        <React.Fragment>
            <div className='content-wrapper'>
                <Sidebar />
                <div className='aside'>
                    <Header setOpen={setOpenAddClinicianPopUp} />
                    <div>
                        <Dialog
                            open={openAddClinicianPopUp}
                            onClose={handleClose}
                            aria-labelledby="add-staff-user-dialog"
                            aria-describedby="add-staff-user-dialog"
                            className='add-staff-user-dialog'
                        >
                            <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
                            <AddClinician setOpen={setOpenAddClinicianPopUp} />
                        </Dialog>
                    </div>
                    {loading ? <ChartResultRange /> : <ClinicianProfileBar open={open} setOpen={setOpen} profileBarData={profileBarData} getClinicianDetail={getClinicianDetail} />}
                    {loadingAllApprovePatientData ? <TableSkeleton /> :
                        <CriticalPatients patientData={finalDataApprovepatientData} handleClickStatus={handleClickReview} viewAll={viewAll} />
                    }
                    <Pagination page={currentPageAllApprovePatientData} onChange={handleChangePageApprovePendingpatient} count={totalPagesAllApprovePatientData} variant="outlined" shape="rounded" className='table-pagination' />

                    <div className="pp-table">
                        <div className='table-title'>
                            <h4>Patients Pending</h4>
                        </div>
                        {loadingAllPendingPatientData ? <TableSkeleton /> :
                            <CriticalPatients patientData={finalDataPendingpatientData} handleClickStatus={handleClickReview} viewAll={viewAll} />
                        }
                        <Pagination page={currentPageAllPendingPatientData} onChange={handleChangePagePendingpatient} count={totalPagesAllPendingPatientData} variant="outlined" shape="rounded" className='table-pagination' />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ClinicianDetails