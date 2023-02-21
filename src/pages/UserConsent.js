import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

export default function UserConsent() {
  return (
    <>
    <div className='varification-page-wrapper user-consent-page-wrapper'>
        <div className='container'>
            <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
            </div>
            <div className='page-content-wrapper'>
                <div className="title-block">
                    <h4>Your Health Data</h4>
                    <p>Any health data we process will be in compliance of personal data laws and we will never share it without your consent. At any time you can request all your stored data to be permanently deleted.</p>
                    <a href={URL}>Privacy Policy</a>
                    <FormGroup className='checkbox-block'>
                        <FormControlLabel control={<Checkbox />} label="I agree to the WatchDoc Privacy Policy" />
                    </FormGroup>
                </div>
                <div className="title-block">
                    <h4>Using WatchDoc</h4>
                    <p>It is important you read and agree to our Terms of Use that define how WatchDoc works and how you should use it.</p>
                    <a href={URL}>Terms of Use</a>
                    <FormGroup className='checkbox-block'>
                        <FormControlLabel control={<Checkbox />} label="I agree to the WatchDoc Terms of Use" />
                    </FormGroup>
                </div>
                <button type="submit">Next</button>
            </div>
        </div>
    </div>
    </>
  )
}
