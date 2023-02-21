import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { userConsent } from '../services/UserConsentService'
import '../css/UserConsent.css'

export default function UserConsent() {

    const {t}=useTranslation();
    const [privacyPolicy,setPrivacyPolicy]=useState(false)
    const [terms,setTerms]=useState(false)
    const [error,setError]=useState("")
    const navigate=useNavigate()


    const handleClick=()=>{

        if(privacyPolicy===false || terms===false){
            setError(t("UserConsent.r1"))
        }

        if(privacyPolicy===true && terms===true){

            const data={
                privacy_policy:1,
                terms_of_use:1
            }

            userConsent(data)

            .then((res)=>{
                // console.log(res)
                navigate('/CreateProfile')
                
            })

            .catch((error)=>{
                console.log(error)
            })
        }
    }

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
                        <FormControlLabel onChange={(e)=>setPrivacyPolicy(!privacyPolicy)} control={<Checkbox />} label="I agree to the WatchDoc Privacy Policy" />
                    </FormGroup>
                </div>
                <div className="title-block">
                    <h4>Using WatchDoc</h4>
                    <p>It is important you read and agree to our Terms of Use that define how WatchDoc works and how you should use it.</p>
                    <a href={URL}>Terms of Use</a>
                    <FormGroup className='checkbox-block'>
                        <FormControlLabel  control={<Checkbox />} onChange={(e)=>setTerms(!terms)} label="I agree to the WatchDoc Terms of Use" />
                    </FormGroup>
                </div>

        
           <div className='consentError'> {error}</div> <br/>
                <button onClick={()=>handleClick()} type="submit">Next</button>
            </div>
        </div>
    </div>
    </>
  )
}
