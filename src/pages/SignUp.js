import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import '../css/SignUp.css';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()
    const [signUpUserData, setSignUpUserData] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "mobile": "",
        "practicename": "",
        "practiceaddress": ""
    })
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const LoginSchema = Yup.object({
        firstname: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
        lastname: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
        email: Yup.string().required(t('SignUpPage.validation.email.v1'))
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t('SignUpPage.validation.email.v2')),
        mobile: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),
        practicename: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(/^[aA-zZ\s]+$/, t('SignUpPage.validation.common2')),
        practiceaddress: Yup.string().required(t('SignUpPage.validation.common1'))

    });




    const handleSubmitForm = (data) => {
        setSignUpUserData({ ...data })
        navigate("/signupsuccess")
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
                                    <input type="text" name='firstname' placeholder={t('SignUpPage.form.placeholder1')} onChange={props.handleChange} value={props.values.firstname} />
                                    <span className="error">{props.errors.firstname ? props.errors.firstname : ""}</span>
                                </div>

                                <div className='input-block'>
                                    <input type="text" name='lastname' placeholder={t('SignUpPage.form.placeholder2')} onChange={props.handleChange} value={props.values.lastname} />
                                    <span className="error"> {props.errors.lastname ? props.errors.lastname : ""}</span>

                                </div>


                                <div className='input-block'>
                                    <input type="email" name='email' placeholder={t('SignUpPage.form.placeholder3')} onChange={props.handleChange} value={props.values.email} />
                                    <span className="error">  {props.errors.email ? props.errors.email : ""}</span>
                                </div>



                                <div className='input-block'>
                                    <input type="text" name='mobile' placeholder={t('SignUpPage.form.placeholder4')} onChange={props.handleChange} value={props.values.mobile} />
                                    <span className="error"> {props.errors.mobile ? props.errors.mobile : ""}</span>
                                </div>


                                <div className='input-block'>
                                    <input type="text" name='practicename' placeholder={t('SignUpPage.form.placeholder5')} onChange={props.handleChange} value={props.values.practicename} />
                                    <span className="error">{props.errors.practicename ? props.errors.practicename : ""}</span>
                                </div>




                                <div className='input-block'>
                                    <input type="text" name='practiceaddress' placeholder={t('SignUpPage.form.placeholder6')} onChange={props.handleChange} value={props.values.practiceaddress} />
                                    <span className="error">{props.errors.practiceaddress ? props.errors.practiceaddress : ""}</span>
                                </div>


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