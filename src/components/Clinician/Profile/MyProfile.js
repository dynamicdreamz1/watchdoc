import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { SelectChangeEvent } from '@mui/material/Select';

export default function MyProfile() {
  return (
    <>
        <div className='my-profile-form'>
            <div className='title-block'>
                <h2>Profile</h2>
            </div>
            <form>
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        {/* <Select
                            labelId="demo-simple-select-label"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={}>Ten</MenuItem>
                            <MenuItem value={}>Twenty</MenuItem>
                            <MenuItem value={}>Thirty</MenuItem>
                        </Select> */}
                        <input type="password" name='email-address'></input>
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='first-name'></input>
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='last-name'></input>
                    </div>
                </div>
            </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="password" name='email-address'></input>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="password" name='practice-name'></input>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="password" name='practice-address'></input>
                </div>
                <div className='submit-block'>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </>
  )
}
