import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../Store/Context';
import '../css/Register.css'
import { RegisterUser } from '../services/UserService';
import { Base64 } from 'js-base64';
import { Formik } from 'formik';
import * as Yup from "yup";

// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
// import AppleLogin from 'react-apple-login';




export default function PatientEntry() {
    const user = useContext(UserContext);
    // const clientId = "555077241185-r79oaldvmmq001citu431g84i7jcup71.apps.googleusercontent.com";
  
    let navigate = useNavigate()
    const [initialData] = useState({email:"",setEmail:""})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()


    const LoginSchema = Yup.object({
        email: Yup.string().required(t('SignUpPage.validation.email.v1'))
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t('SignUpPage.validation.email.v2'))    

    });



    const handleSubmit = (value) => {
        const data = {
            email: value
        }
        setLoading(true)

        RegisterUser(data)
            .then((response) => {
                if (typeof response === "string") {
                    setError(response)
                    setLoading(false)

                } else {
                    let encodedemail = Base64.encode(response?.data?.data?.email)

                    setLoading(false)
                    
                    navigate(`/verification/${encodedemail}`, {
                        state: {
                            id: response?.data?.data?.verification_code,
                            emailId: encodedemail,
                        },
                    });
                    // navigate(`/verification/${encodedemail}`)
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error);
                return error
            })
            
        

    }

    if (user?.token) {
        return redirect('/dashboard');
    }
    // const handleLoginSuccess = (response) => {
    //     let decoded = jwt_decode(response?.credential);
    //     const data = {
    //         email: decoded?.email
    //     }
    //     RegisterUser(data)
    //         .then((response) => {
    //             if (typeof response === "string") {
    //                 setError(response)
    //                 setLoading(false)

    //             } else {
    //                 let encodedemail = Base64.encode(response?.data?.data?.email)

    //                 setLoading(false)
    //                 setEmail("")
    //                 navigate(`/verification/${encodedemail}`, {
    //                     state: {
    //                         id: response?.data?.data?.verification_code,
    //                         emailId: encodedemail,
    //                     },
    //                 });
    //                 // navigate(`/verification/${encodedemail}`)
    //                 console.log(response)
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             return error
    //         })


    // };
    // const handleLoginFailure = (error) => {
    //     setError(error);
    // };


    return (
        <Formik
        initialValues={initialData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) => { 
            handleSubmit(values?.email) }}
    >
        {(props) => (
        <>
            <div className='page-wrapper'>
                <div className='signin-box'>
                    <div className='logo-block'>
                        <div className='logo'>
                            <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                        </div>
                    </div>
                    <div className='form-block'>
                        <form onSubmit={props.handleSubmit}> 
                            <div className='input-block'>
                                <input type="email" placeholder={t('SignInPage.form.f1')} name="email"
                                   id="exampleInputEmail1" aria-describedby="emailHelp" onChange={props.handleChange} value={props?.values?.email} />
                                    <div className='LoginError'>{error?error:props?.errors?.email ? props?.errors?.email : ""}</div>
                            </div>
                            <span>{loading?loading:""}</span>
                            <div className='submit-block' >
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                        <div className='or-text'>
                            <span>OR</span>
                        </div>


                        <div className='login-options'>
                            <button type='button'><img src="/images/google-icon.png" alt="Google Icon" />Continue with Google</button>
                            {/* <button type='button'>

                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Continue with Google"
                                    onSuccess={handleLoginSuccess}
                                    onFailure={handleLoginFailure}
                                    cookiePolicy={"single_host_origin"}
                                    responseType="code,token"
                                />
                            </button> */}
                            <button type='button' className="apple-icon"><img src="/images/apple-icon.png" alt="Apple Icon" />
                                {/* <AppleLogin
                                     clientId="com.example.myapp"
                                     redirectURI="https://example.com"
                                     onSuccess={handleLoginSuccess}
                                     onFailure={handleLoginFailure}
                                     scope="name email"
                                     usePopup={false}
                                     buttonText="Continue With Apple"
                                /> */}
                            </button>   
                            <button type='button'><img src="/images/key-icon.png" alt="SSO Icon" />Continue with SSO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}
        </Formik>
    )
}
