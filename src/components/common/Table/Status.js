import React, { useState } from 'react'

export default function Status(props) {
  const { handleClickStatus, el,value } = props
  const [selectedStatus] = useState(el?.status === "Reviewed" ? "Reviewed" : "Pending");

  const statusOptionsPendingPatient = ['Approve', 'reject'];
  const statusOptionsApprovePatient = ['reject'];

  const handleStatusChange = (e) => {
    handleClickStatus(el.id, e.target.value);
  };

  return (
    <>
{value===2 ?
      <select value={selectedStatus} onChange={handleStatusChange} className={props?.el?.status === "Reviewed" ? "text color-light-green" : "text color-light-blue"}>
        <option value="">{selectedStatus}</option>
        {(el?.status === 'Reviewed' ? statusOptionsApprovePatient : statusOptionsPendingPatient)?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

:
      <div className='wt table-data'>
      <span className={props?.el?.status==="Reviewed"?"text color-light-green":"text color-light-blue"} onClick={() => {
    if (value === 1) {
    } else if (value === 2) {
    } else {
      handleClickStatus(el?.id, el?.status);
    }
  }}>
        {el?.status}</span>
      </div>
}

{/* <div className='wt table-data'>
        <span className={props?.el?.status==="Reviewed"?"text color-light-green":"text color-light-blue"} onClick={()=>handleClickStatus(el?.id,el?.status)}>{el?.status}</span>
        {el?.status==="Unreviewed" || el?.status==="Pending" ? "" :  <DateTime props={el} value={value} /> }

    </div> */}
    </>
  )
}

