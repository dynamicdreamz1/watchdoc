import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { userConsent } from '../services/UserService'
import '../css/UserConsent.css'
import { Formik } from 'formik';
import * as Yup from "yup";


export default function UserConsent() {
    
    const {t}=useTranslation();
    const navigate=useNavigate()


    const validationSchema = Yup.object().shape({
        privacyPolicy: Yup.boolean().oneOf([true], 'Please accept the privacy policy '),
        terms: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
      });


    const handleClick=(data)=>{
        if(data?.privacyPolicy && data?.terms){
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
    <Formik
    initialValues={{
        privacyPolicy: false,
        terms: false,
      }}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(value)=>handleClick(value)}
    >
    {(props) => (
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
                    <Link >{t('useConsent.policy')}</Link>
                    <FormGroup className='checkbox-block'>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="privacyPolicy"
                        checked={props?.values.privacyPolicy}
                        onChange={props?.handleChange}
                      />
                    }
                    label={t('useConsent.a1')}
                  />
                    </FormGroup>
                </div>
                <div className="title-block">
                    <h4>{t("useConsent.heading2")}</h4>
                    <p>{t('useConsent.p2')}</p>
                    <Link >{t("useConsent.a2")}</Link>
                    <FormGroup className='checkbox-block'>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="terms"
                        checked={props?.values?.terms}
                        onChange={props?.handleChange}
                      />
                    }
                    label={t('useConsent.a3')}
                  />
                    </FormGroup>
                </div>

        
           <div className='consentError'>  {props?.errors.privacyPolicy && props?.touched.privacyPolicy && props?.errors.privacyPolicy}
                {props?.errors.terms && props?.touched.terms && props?.errors.terms}</div> <br/>
                <button onClick={props?.handleSubmit} type="submit">{t('useConsent.b1')}</button>
            </div>
        </div>
    </div>
    </>
     )}
     </Formik>
  )
}
