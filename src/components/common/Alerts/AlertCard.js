import { Button } from '@mui/material'
import React from 'react'
import { GetdayHourMin } from '../../../Utility/functions';
import { reviewUserProfileAlert } from '../../../services/ClinicianService';
import { toast } from 'react-toastify';
import moment from 'moment';

export default function AlertCard({ alertData, fetchData, action }) {
  const {getAllAlert,latestData,dataLimitApprovePatient,setCurrentPage} = action;
  const momentObj = moment(alertData.alert_date, 'YYYY-MM-DD HH:mm:ss');
  const momentString = momentObj.format('DD-MM-YYYY HH:mm:ss');
  const time = GetdayHourMin(momentString)

  const handleClickDeleteReminder = async (id, user_id) => {
    const formData = new FormData()
    formData.append("alert_id", id)
    formData.append("user_id", user_id)
    try {
      const res = await reviewUserProfileAlert(formData);
      await getAllAlert(latestData?.user_data?.id,1,dataLimitApprovePatient)
      setCurrentPage(1)
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
        <div className='button-block'>
          {alertData.admin_status === "1" ? <span className='color-light-green-data'>Reviewed</span> : <Button onClick={() => handleClickDeleteReminder(alertData?.id, alertData?.user_id)} variant="contained">Mark as Reviewed</Button>}
        </div>
      </div>
    </>
  )
}
