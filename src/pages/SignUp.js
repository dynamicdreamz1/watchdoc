import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import '../css/SignUp.css';
import { useTranslation } from 'react-i18next';
import { ClinicianRegister } from '../services/UserService';

const SignUp = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()
    const [signUpUserData, setSignUpUserData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "contact_number": "",
        "practice_name": "",
        "practice_address": "",
        "password":""
    })
    const [error,setError]=useState("")
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    /* eslint-disable no-useless-escape */


    const LoginSchema = Yup.object({
        first_name: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
            last_name: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
        email: Yup.string().required(t('SignUpPage.validation.email.v1'))
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t('SignUpPage.validation.email.v2')),
        password:Yup.string()
            .required("This field is required*")
            .matches(
                // eslint-disable-next-line no-useless-escape
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),

        contact_number: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),
        practice_name: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
        practice_address: Yup.string().required(t('SignUpPage.validation.common1'))

    });




    const handleSubmitForm = async(data) => {
        setSignUpUserData({ ...data })
        const res=await ClinicianRegister(data)
        if(res?.status===200){
        navigate("/signupsuccess")
        }
        else{
            setError(res)
        }
    }


    return (
        <Formik
            initialValues={signUpUserData}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => { handleSubmitForm(values) }}
        >
            {(props) => (
                <>

                    <div className='page-wrapper signup-page-wrapper'>
                        <div className='form-block'>
                            <div className='logo-block'>
                                <img src='/images/WatchDoc-logo-white.svg' alt='WatchDoc Logo' />
                            </div>
                            <div className='text-block'>
                                <h1> {t('SignUpPage.heading1')} </h1>
                                <p> {t('SignUpPage.para1')} <br></br> {t('SignUpPage.para2')} </p>
                            </div>
                            <form onSubmit={props.handleSubmit}>
                                <div className='input-block'>
                                    <input type="text" name='first_name' placeholder={t('SignUpPage.form.placeholder1')} onChange={props.handleChange} value={props.values.first_name} />
                                    <span className="error">{props.errors.first_name ? props.errors.first_name : ""}</span>
                                </div>
                                <div className='input-block'>
                                    <input type="text" name='last_name' placeholder={t('SignUpPage.form.placeholder2')} onChange={props.handleChange} value={props?.values?.last_name} />
                                    <span className="error"> {props?.errors?.last_name ? props?.errors?.last_name : ""}</span>

                                </div>
                                <div className='input-block'>
                                    <input type="email" name='email' placeholder={t('SignUpPage.form.placeholder3')} onChange={props.handleChange} value={props?.values?.email} />
                                    <span className="error">  {props?.errors?.email ? props?.errors?.email : ""}</span>
                                </div>
                                <div className='input-block'>
                                    <input type="password" name='password' placeholder="password*" value={props?.values?.password} autoComplete='off' onChange={props.handleChange}/>
                                    <span className="error">  {props?.errors?.password ? props?.errors?.password : ""}</span>
                                </div>
                                <div className='input-block'>
                                    <input type="text" name='contact_number' placeholder={t('SignUpPage.form.placeholder4')} onChange={props.handleChange} value={props?.values?.contact_number} />
                                    <span className="error"> {props?.errors?.contact_number ? props?.errors?.contact_number : ""}</span>
                                </div>
                                <div className='input-block'>
                                    <input type="text" name='practice_name' placeholder={t('SignUpPage.form.placeholder5')} onChange={props.handleChange} value={props?.values?.practice_name} />
                                    <span className="error">{props?.errors?.practice_name ? props?.errors?.practice_name : ""}</span>
                                </div>
                                <div className='input-block'>
                                    <input type="text" name='practice_address' placeholder={t('SignUpPage.form.placeholder6')} onChange={props.handleChange} value={props?.values?.practice_address} />
                                    <span className="error">{props?.errors?.practice_address ? props?.errors?.practice_address : ""}</span>
                                </div>
                                <div className='LoginError'>{error && error}</div>
                                <div className='submit-block'>
                                    <button type='submit' > {t('SignUpPage.button1')} </button>
                                </div>
                            </form>
                            <div className='signup-bottom-text'>
                                <p> {t('SignUpPage.para3')} <Link> {t('SignUpPage.link1')} </Link></p>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </Formik>
    )
}

export default SignUp;