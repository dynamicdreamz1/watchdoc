
import React, { useState } from 'react'
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from "yup";
import { ForgotUserPassword } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loginData] = useState({
        "email": "",
    })
    const [error, setError] = useState('')
    const [loading] = useState(false)
    const { t } = useTranslation()



    const LoginSchema = Yup.object({
        email: Yup.string().required(t('SignUpPage.validation.email.v1'))
            // eslint-disable-next-line no-useless-escape
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t('SignUpPage.validation.email.v2')),

    });

    const handleSubmitForm = async (data) => {
        const result = {
            email: data?.email,
            getotp: "yes"
        }
        const res = await ForgotUserPassword(result)
        if (res?.status === 200) {
            navigate(`/verificationforgetpassword`, {
                state: {
                    email: data?.email,
                    otp: res.data?.verification_code,

                },
            });
        }
        setError(res)

    }


    return (
        <Formik
            initialValues={loginData}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => { handleSubmitForm(values) }}
        >
            {(props) => (
                <React.Fragment>
                    <div className='page-wrapper'>
                        <div className='signin-box'>
                            <div className='logo-block'>
                                <div className='logo'>
                                    <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                                </div>
                            </div>
                            <div className='form-block'>
                                <div className='form-title text-center'>
                                    <h1>Enter Your Email</h1>
                                </div>

                                <form onSubmit={props.handleSubmit} autoComplete="off">
                                    <div className='input-block'>
                                        <input type="email" placeholder={t('SignInPage.form.f1')} name="email"
                                            value={props?.values?.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={props.handleChange} />
                                        <span className="error">{props?.errors?.email ? props?.errors?.email : ""}</span>

                                    </div>


                                    <div className='LoginError'>{error && error}</div>

                                    <div className='submit-block'>
                                        <button type="submit">Submit</button>
                                    </div>
                                    {loading ? <b>{t('SignInPage.loader.l1')}</b> : ""}
                                </form>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            )}
        </Formik>
    )
}

export default ForgotPassword;