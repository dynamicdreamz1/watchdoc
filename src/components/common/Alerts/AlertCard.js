import { Button } from '@mui/material'
import React from 'react'
import { GetdayHourMin } from '../../../Utility/functions';
import { reviewUserProfileAlert } from '../../../services/ClinicianService';
import { toast } from 'react-toastify';

export default function AlertCard({alertData ,fetchData}) {

  const time = GetdayHourMin(alertData.alert_date)
  
  const handleClickDeleteReminder=async(id,user_id)=>{
    const formData=new FormData()
    formData.append("alert_id",id)
    formData.append("user_id",user_id)
    try {
        const res = await reviewUserProfileAlert(formData);       
        await fetchData()
        toast.success(res?.data?.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
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

  return (
    <>
    <div className='alert-card d-flex'>
        <div className='text-block d-flex align-items-center'>
            <span className='icon'></span>
            <span className='title'>{alertData?.alert_message} {alertData.alert_limit}</span>
            <span className='time'>{time.data} {time.lable} Ago</span>
        </div>
        <div>
        <span className={alertData.admin_status === "1" ? "text alert-status color-light-green-data" : "alert-status status-data"}>{alertData.admin_status === "1" ? "Reviewed" : "Pending"}</span>
        </div>
        <div className='button-block'>
            <Button onClick={()=>handleClickDeleteReminder(alertData.id,alertData.user_id)} variant="contained">Mark as Reviewed</Button>
        </div>
    </div>
    </>
  )
}
