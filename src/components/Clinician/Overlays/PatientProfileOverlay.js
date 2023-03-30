// import React from 'react'

// export default function PatientProfileOverlay() {
//   return (
//     <>
//       <div className='patient-profile'>
//         <div className='dialog-title'>
//           <h2>Profile</h2>
//         </div>
//         <div className='profile-info-wrapper'>
//           <div className='profile-info-item'>
//             <span className="label">First name :&nbsp;</span>
//             <span className="text">Michael</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Last name :&nbsp;</span>
//             <span className="text">Randerson</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Date of birth :&nbsp;</span>
//             <span className="text">14/05/1076</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Sex :&nbsp;</span>
//             <span className="text">Male</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Height (cm) :&nbsp;</span>
//             <span className="text">189</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Email address :&nbsp;</span>
//             <span className="text">michael@thefamousgroup.com.au</span>
//           </div>
//           <div className='profile-info-item'>
//             <span className="label">Contact number :&nbsp;</span>
//             <span className="text">0451514497</span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import React, { useState } from 'react'
import { GetDate } from '../../../Utility/functions';
import DatePickerInput from '../../common/Table/DatePickerInput';


export default function PatientProfileOverlay() {
  const [date, setDate] = useState(GetDate);

 
  const ChangeDate = (NewDate) => {
    setDate(GetDate(NewDate));
  }
  return (
    <>
      <div className='my-profile-form clinician-request-form'>
        <div className='dialog-title'>
          <h2>Profile</h2>
        </div>
        <form autoComplete="off">
          <div className='input-block'>
            <div className='input-item'>
              <label>First name</label>
              <input type="text" name='firstname' defaultValue="Michael" />
            </div>
          </div>
          <div className='input-block'>
            <div className='input-item'>
              <label>Last name</label>
              <input type="text" name='lastname' defaultValue="Randerson" />
            </div>
          </div>
          <div className='input-block'>
            <label>Date Of Birth</label>
            <DatePickerInput ChangeDate={ChangeDate} Date={date} />
          </div>
          <div className='input-block'>
            <label>Sex</label>
            <button type="button">
              Male
            </button>
            <button type="button">
              Female
            </button>
            <button type="button">
              Other
            </button>
          </div>
          <div className='input-block'>
            <label>Height(cm)</label>
            <input type="text" name='height' defaultValue="183" />
          </div>
          <div className='input-block'>
            <label>Email address</label>
            <input type="email" name='email' defaultValue="michael@thefamousgroup.com.au" />
          </div>
          <div className='input-block'>
            <label>Contact number</label>
            <input type="text" name="number" defaultValue="0451514497" />
          </div>
        </form>
        <div className='request-actions'>
          <button type='button' className='btn approve'>Update Profile</button>
        </div>
      </div>
    </>
  )
}
