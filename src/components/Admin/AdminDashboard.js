import React, { useState, useEffect } from 'react'
import { changePendingClinicianStatus, getPendingClinicians} from '../../services/AdminService';
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'
import { getAdminCriticalAlertReviewed, getAdminCriticalAlertunReviewed } from '../../services/AdminService';
import { getCurrentUserData } from '../../services/UserService';
import { toast, ToastContainer } from 'react-toastify'
import SimpleBackdrop from '../../Utility/Skeleton';


export default function AdminDashboard() {
  const userData = getCurrentUserData()
  const recordsPerPage = 5;
  const [pendingClinicianData, setPendingClinicianData] = useState([])
  const [pendingClinicianCurrentPage, setPendingClinicianCurrentPage] = useState(1)
  const [pendingClinicianTotalPages, setPendingClinicianTotalPages] = useState(0);
  const [pendingClinicianLoading, setPendingClinicianLoading] = useState(false)
  const [spinnerPendingClinician,setSpinnerPendingClinician]=useState(false)

  const [criticalAlertReviewedData, setCriticalAlertReviewedData] = useState([])
  const [currentPageCriticalAlertReviewedData, setCurrentPageCriticalAlertReviewedData] = useState(1);
  const [totalPagesCriticalAlertReviewedData, setTotalPagesCriticalAlertReviewedData] = useState(0);
  const [dataLimitCriticalAlertReviewedData] = useState(5)
  const [loadingCriticalAlertReviewedData, setLoadingCriticalAlertReviewedData] = useState(false)



  const [criticalAlertUnreviewedData, setCriticalAlertUnreviewedData] = useState([])
  const [currentPageCriticalAlertUnreviewedData, setCurrentPageCriticalAlertUnreviewedData] = useState(1);
  const [totalPagesCriticalAlertUnreviewedData, setTotalPagesCriticalAlertUnreviewedData] = useState(0);
  const [dataLimitCriticalAlertUnreviewedData] = useState(5)
  const [loadingCriticalAlertUnreviewedData, setLoadingCriticalAlertUnreviewedData] = useState(false)

  const fetchUnreviewedData = async (currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData) => {

    try {
      setLoadingCriticalAlertUnreviewedData(true);
      const res = await getAdminCriticalAlertunReviewed(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData);
      setTotalPagesCriticalAlertUnreviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertUnreviewedData));
      if (res.status === 200) {
        setCriticalAlertUnreviewedData(res?.data?.data);
      }
      setLoadingCriticalAlertUnreviewedData(false);
    } catch (error) {     
      setLoadingCriticalAlertUnreviewedData(false);
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
  };
  
  const fetchReviewedData = async (currentPageCriticalAlertReviewedData,dataLimitCriticalAlertReviewedData) => {
    setPendingClinicianLoading(true)
    try {
    setLoadingCriticalAlertReviewedData(true)
    const res = await getAdminCriticalAlertReviewed(currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData,);
    setTotalPagesCriticalAlertReviewedData(Math.ceil(res?.data?.data?.total / dataLimitCriticalAlertReviewedData));
    if (res?.status === 200) {
      setCriticalAlertReviewedData(res?.data?.data)
    setPendingClinicianLoading(false)

    }
    setLoadingCriticalAlertReviewedData(false)
  } catch (error) {
    setLoadingCriticalAlertReviewedData(false)
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
  setPendingClinicianLoading(false)


  }
  const handleChangePageReviewedData = (event, newPage) => {
    setCurrentPageCriticalAlertReviewedData(newPage);
  };
  const handleChangePageUnreviewedData = (event, newPage) => {
    setCurrentPageCriticalAlertUnreviewedData(newPage);
  };

  const handleChangePage=(event,newpage)=>{
    setPendingClinicianCurrentPage(newpage)
  }



  useEffect(() => {
      if (userData &&  userData.roles[0].name === "Admin") {
        fetchUnreviewedData(currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData)
      }
// eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [currentPageCriticalAlertUnreviewedData, dataLimitCriticalAlertUnreviewedData])


  useEffect(() => {
    if (userData &&  userData.roles[0].name === "Admin") {
    fetchReviewedData(dataLimitCriticalAlertReviewedData, currentPageCriticalAlertReviewedData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageCriticalAlertReviewedData, dataLimitCriticalAlertReviewedData])


  const GetPendingClinician = async (recordsPerPage,pendingClinicianCurrentPage) => {
    setPendingClinicianLoading(true)
    try {
    let res = await getPendingClinicians(recordsPerPage,pendingClinicianCurrentPage,'')
    if (res?.status === 200) {
      setPendingClinicianData(res?.data)
    }
    setPendingClinicianTotalPages(Math.ceil(res?.data?.data?.total / recordsPerPage));
    setPendingClinicianLoading(false)
  }catch(error){
    toast.error(error, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    setPendingClinicianLoading(false)
  }
    
  }

  useEffect(() => {
      if (userData && userData.roles[0].name === "Admin") {
        GetPendingClinician(recordsPerPage,pendingClinicianCurrentPage,"")
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordsPerPage,pendingClinicianCurrentPage])



  const handleClickStatus = async (data) => {
    setSpinnerPendingClinician(true)
    try {
      const res = await changePendingClinicianStatus(data?.id);
      if (res?.status === 200) {
        toast.success(res?.data?.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setSpinnerPendingClinician(false)
        GetPendingClinician(recordsPerPage, pendingClinicianCurrentPage, "");
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
      setSpinnerPendingClinician(false)
    }  

}

  const action = {
    criticalAlertUnreviewedData,
    criticalAlertReviewedData,
    handleChangePageReviewedData,
    handleChangePageUnreviewedData,
    currentPageCriticalAlertReviewedData,
    currentPageCriticalAlertUnreviewedData,
    dataLimitCriticalAlertUnreviewedData,
    totalPagesCriticalAlertReviewedData,
    totalPagesCriticalAlertUnreviewedData,
    fetchUnreviewedData,
    fetchReviewedData,
    dataLimitCriticalAlertReviewedData,
    loadingCriticalAlertReviewedData,
    loadingCriticalAlertUnreviewedData
  }

  

  return (
    <>
    <ToastContainer />
    <SimpleBackdrop open={spinnerPendingClinician} />
      <CriticalPatientsAlertTableTabs actionData={action} />
      <CliniciansRequestsTable totalData={pendingClinicianData?.data} clinicianStaff={pendingClinicianData?.data?.data} handleChangePage={handleChangePage}
       loading={pendingClinicianLoading} recordsPerPage={recordsPerPage} totalPages={pendingClinicianTotalPages}
        currentPage={pendingClinicianCurrentPage}  setCurrentPage={setPendingClinicianCurrentPage} getClinicianData={GetPendingClinician} handleClickStatus={handleClickStatus}/>
    </>
  )
}
