import React, { useState } from 'react'
import { getCurrentUserData } from '../../../services/UserService';
import Button from '@mui/material/Button';


export default function Status(props) {
  const userData = getCurrentUserData();
  const { handleClickStatus, el, value } = props
  const [selectedStatus] = useState(el?.status === "Reviewed" ? "Reviewed" : "Pending");

  const statusOptionsPendingPatient = ['Approve', 'reject'];
  const statusOptionsApprovePatient = ['reject'];

  const handleStatusChange = (e) => {
    handleClickStatus(el.id, e.target.value);
  };
    return (
    <>
      {(value === 2 && userData?.roles[0]?.name !== 'Admin') ?
        <select value={selectedStatus} onChange={handleStatusChange} className={props?.el?.status === "Reviewed" ? "text color-light-green" : "text color-light-blue"}>
          <option value="">{selectedStatus}</option>
          {(el?.status === 'Reviewed' ? statusOptionsApprovePatient : statusOptionsPendingPatient)?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        :
        value === '5' ? 
        <Button variant="outlined" color="secondary"> <div className='wt table-data' onClick={() => handleClickStatus(props?.el)}>
          <span className={props?.el?.is_active === 1 ? "text color-light-green" : "text color-light-blue"} >
            {props?.el?.is_active === 1 ? "Active" : "UnActive"}</span>
        </div>
        </Button>
          :
          <div className='wt table-data'>
            <Button variant="outlined" color="secondary" className={props?.el?.status === "Reviewed" ? "text color-light-green" : "text color-light-blue"}> <span className={props?.el?.status === "Reviewed" ? "text color-light-green" : "text color-light-blue"} onClick={() => {
              if (value === 0) {
                handleClickStatus(el.alertId)
              } else if (value === 2) {

              } else {
                handleClickStatus(el?.id, el?.status);
              }
            }}>
              {el?.status}</span>
            </Button>
          </div>
      }


    </>
  )
}

