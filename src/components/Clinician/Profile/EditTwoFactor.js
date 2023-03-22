import { MenuItem, Select } from '@mui/material';
import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../../Utility/countryCode';

export default function EditTwoFactor() {

  const [countryCode, setcountryCode] = React.useState('');

  const handleChange = (event) => {
    setcountryCode(event.target.value);
  };

  return (
    <>
        <div className='two-factor-form'>
            <div className='title-block'>
                <h2>Two-factor authentication</h2>
                <p>Enhanced security ensures no logins can be made without first being approved using one of your personal devices.</p>
            </div>
            <form>
              <div className='input-block'>
                <label id="country-code">Enter new phone number</label>
                {console.log(allTimeZone)}
                <Select
                  labelId="country-code"
                  value={countryCode}
                  label="Age"
                  onChange={handleChange}
                >
                {allTimeZone.map((data, i) => (
                  <MenuItem value={data.Name}><span class={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                ))}
              </Select>
              </div>
              <div className='text-block'>
                <p>You are about to change your mobile number. We will send a code to your new number to verify this change.</p>
              </div>
              <div className='submit-block'>
                <button type='submit'>Send Code</button>
              </div>
            </form>
        </div>
    </>
  )
}
