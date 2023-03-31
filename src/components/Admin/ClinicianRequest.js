import { MenuItem, Select } from '@mui/material'
import React,{useState} from 'react'
import { allTimeZone } from '../../Utility/countryCode';
import { MetaFormeting } from '../../Utility/functions';


export default function ClinicianRequest(props) {
    const {profileBarData:{firstname,lastname,email,practicename}}=props;
    
    const {address}= MetaFormeting(props?.profileBarData)

    const [countryCode, setcountryCode] = useState('+91');

    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };
  return (
    <>
    <div className='my-profile-form clinician-request-form'>
        <div className='dialog-title'>
            <h2>Review Clinician Request</h2>
            <p>The below clinician has completed a WatchDoc profile registration. Please review their registration. They will only be able to access WatchDoc after you have approved their registration.</p>
        </div>
        <form autoComplete="off">
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        <input type="text" name="title" defaultValue="Dr" />
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='firstname' defaultValue={firstname} />
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='lastname' defaultValue={lastname}/>
                    </div>
                </div>
            </div>
            <div className='input-block'>
                <label>Email address</label>
                <input type="email" name='email' defaultValue={email} />
            </div>
            <div className='input-block'>
                <label>Practice name</label>
                <input type="text" name='practicename' defaultValue={practicename} />
            </div>
            <div className='input-block'>
                <label>Practice Address</label>
                <input type="text" name='practiceaddress' defaultValue={address} />
            </div>
            <div className='input-block country-code'>
                <label id="country-code">Mobile number</label>
                <div className='inputs-wrapper'>
                <Select
                                        labelId="country-code"
                                        value={countryCode}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        {allTimeZone?.map((data, i) => (
                                            <MenuItem key={i} value={data.MobileCode}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                                        ))}
                                    </Select>
                    <input type="text" name="number" defaultValue="451514497" />
                </div>
            </div>
        </form>
        <div className='request-actions'>
            <button type='button' className='btn reject'>Reject</button>
            <button type='button' className='btn approve'>Approve</button>
        </div>
    </div>
    </>
  )
}
