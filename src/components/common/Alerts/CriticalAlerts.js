import React, { useState } from 'react'
import AlertCard from './AlertCard'
import { getAllProfileAlert } from '../../../services/ClinicianService';
import { Pagination } from '@mui/material';
import { AlertSkeleton } from '../../../Utility/Skeleton';

export default function CriticalAlerts({latestData,fetchData}) {
  const [data,setData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dataLimitApprovePatient] = useState(5)
  const [loadingApprovePatient, setLoading] = useState(false)

  const getAllAlert = async(id,pageLimit,currentPage ) =>{
    setLoading(true)
    if (latestData?.user_data?.id) {
      const res = await getAllProfileAlert(id,pageLimit, currentPage);
      setTotalPages(Math.ceil(res?.data?.alert_data?.total / pageLimit))
      setData(res?.data?.alert_data?.data)
      setLoading(false)
    }
  }

  const handleChangePageApprovePatient = (event, newPage) => {
    setCurrentPage(newPage);
  };

  React.useEffect(()=>{
    getAllAlert(latestData?.user_data?.id,dataLimitApprovePatient,currentPage)
          // eslint-disable-next-line react-hooks/exhaustive-deps
  },[latestData?.user_data?.id,currentPage, dataLimitApprovePatient])


  return (
    <>
    {data?.length > 0 ?<div className='critical-alerts-wrapper mt-22'>
            <div className="section-title d-flex align-items-center justify-content-between">
                <h5>Critical Alerts</h5>
            </div>
            {
              loadingApprovePatient ? <AlertSkeleton /> :  <div className='wrapper'>
              {
               data?.map((item, I) => {
                return <> <AlertCard alertData={item} key={I} fetchData={fetchData}/> <br/></>
              })
              }
            </div>
            }
            <Pagination page={currentPage} onChange={handleChangePageApprovePatient} count={totalPages} variant="outlined" shape="rounded" className='table-pagination' />
        </div> : '' }
        
    </>
  )
}
