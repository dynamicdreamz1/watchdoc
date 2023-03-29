import { MenuItem, Select } from '@mui/material'
import React,{useState} from 'react'
import { allTimeZone } from '../../Utility/countryCode';


export default function ClinicianRequest() {
    const [countryCode, setcountryCode] = useState('+91');

    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };
  return (
    <>
        <form autoComplete="off">
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        <input type="text" name="title" defaultValue="Dr" />
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='firstname' defaultValue="Sarah" />
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='lastname' defaultValue="McDonnell"/>
                    </div>
                </div>
            </div>
            <div className='input-block'>
                <label>Email address</label>
                <input type="email" name='email' defaultValue="info@neighbourhoodmedical.com.au" />
            </div>
            <div className='input-block'>
                <label>Practice name</label>
                <input type="text" name='practicename' defaultValue="Neighbourhood Medical" />
            </div>
            <div className='input-block'>
                <label>Practice Address</label>
                <input type="text" name='practiceaddress' defaultValue="1A Stuartholme Road, Bardon QLD 4065" />
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
    </>
  )
}
