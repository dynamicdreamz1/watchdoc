import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { userConsent } from '../services/UserService'
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
                navigate('/create-profile')
                
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
                    <h4>{t('useConsent.heading')}</h4>
                    <p>{t('useConsent.p1')}</p>
                    <a href={URL}>{t('useConsent.policy')}</a>
                    <FormGroup className='checkbox-block'>
                        <FormControlLabel onChange={(e)=>setPrivacyPolicy(!privacyPolicy)} control={<Checkbox />} label={t('useConsent.a1')} />
                    </FormGroup>
                </div>
                <div className="title-block">
                    <h4>{t("useConsent.heading2")}</h4>
                    <p>{t('useConsent.p2')}</p>
                    <a href={URL}>{t("useConsent.a2")}</a>
                    <FormGroup className='checkbox-block'>
                        <FormControlLabel  control={<Checkbox />} onChange={(e)=>setTerms(!terms)} label={t('useConsent.a3')} />
                    </FormGroup>
                </div>

        
           <div className='consentError'> {error}</div> <br/>
                <button onClick={()=>handleClick()} type="submit">{t('useConsent.b1')}</button>
            </div>
        </div>
    </div>
    </>
  )
}
