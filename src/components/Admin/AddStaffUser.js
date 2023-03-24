import { MenuItem, Select } from '@mui/material'
import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';

export default function AddStaffUser() {

    const [countryCode, setcountryCode] = React.useState('');

    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };

    return (
    <>
        <div className='my-profile-form'>
            <div className='dialog-title'>
                <h2>Add Staff User</h2>
            </div>
            <form>
                <div className='input-block update-profile'>
                    <div className='image-block'>
                        <img src="/images/user-picture-placeholder.png" alt="Staf User" />
                    </div>
                    <div>
                        <input id="file" type="file"/>
                    </div>
                </div>
                <div className='input-block'>
                    <div className='inputs-wrapper'>
                        <div className='input-item'>
                            <label>Title</label>
                            <select name='title'>
                                <option value="Dr">Dr</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                        </div>
                        <div className='input-item'>
                            <label>First name</label>
                            <input type="text" name='firstname'/>
                            <span className="error"></span>
                        </div>
                        <div className='input-item'>
                            <label>Last name</label>
                            <input type="text" name='lastname'/>
                            <span className="error"></span>
                        </div>
                    </div>
                </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="email" name='email'/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practicename'/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practiceaddress'/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Password</label>
                    <input type="password" name='password'/>
                </div>
                <div className='input-block country-code'>
                <label id="country-code">Enter new phone number</label>
                <div className='inputs-wrapper'>
                  <Select
                    labelId="country-code"
                    value={countryCode}
                    label="Age"
                    onChange={handleChange}
                  >
                    {allTimeZone.map((data, i) => (
                      <MenuItem key={i} value={data.Name}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                    ))}
                  </Select>
                  <input type="text" name="phone-number"></input>
                </div>
              </div>
                <div className='submit-block'>
                    <button type="submit">Add Staff User</button>
                </div>
            </form>
        </div>
    </>
  )
}
