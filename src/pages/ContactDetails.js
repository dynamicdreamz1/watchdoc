import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import { RegisterMobNumber } from '../services/UserService';
import { Base64 } from 'js-base64';
import { Formik } from 'formik';
import * as Yup from "yup";

export default function ContactDetails() {
    const { t } = useTranslation();
    const [initialData] = useState({number:"",serNumber:""})
    const [error, setError] = useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate('')


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const LoginSchema = Yup.object({
       
        number: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),    
    });

    const handleClick = (value) => {
        setLoading(true)
            let mob=Base64.encode(value)
            const data = {
                mobile_number: mob
            }
            RegisterMobNumber(data)
                .then((response) => {
                    let encodedMobile= Base64.encode(response.data.user_data.contact_number)
                    console.log(response)
                    setLoading(false)
                    navigate(`/verifymobile/${encodedMobile}`, {
                        state: {
                            id: response?.data?.verification_code,
                        },
                    });
                    
                })
                .catch((error) => {
                    setError(error.response.data.message)
                    
                })      
    }
    return (
        <Formik
        initialValues={initialData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) => { 
            handleClick(values?.number)}}
    >
        {(props) => (
        <>
            <div className='varification-page-wrapper'>
                <div className='container'>
                    <div className='page-header'>
                        <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
                    </div>
                    <div className='page-content-wrapper'>
                        <div className="title-block">
                            <h4>{t('mobileNumberVerificationPage.heading')}</h4>
                            <p>{t('mobileNumberVerificationPage.p1')}</p>
                        </div>
                        {/* <div className='sMessage'> {message}</div> */}
                        <form onSubmit={props?.handleSubmit}>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('mobileNumberVerificationPage.l1')}</label>
                                <input type="text" name="number" placeholder={t('mobileNumberVerificationPage.placeholder')} onChange={props.handleChange} value={props?.values?.number} id="exampleInputCode" />
                            </div>
                        <div className='eError'>  {error?error:props?.errors?.number ? props?.errors?.number : ""}</div>
                        <div className='eError'>{loading? "Loading..." : ""}</div>
                            <button type="submit">{t('mobileNumberVerificationPage.b1')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
         )}
         </Formik>
    )
}
