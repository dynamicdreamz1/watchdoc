import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../Store/Context';
import '../css/Register.css'
import { RegisterUser } from '../services/UserService';
import { Base64 } from 'js-base64';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import AppleLogin from 'react-apple-login';




export default function PatientEntry() {
    const user = useContext(UserContext);
    const clientId = "555077241185-r79oaldvmmq001citu431g84i7jcup71.apps.googleusercontent.com";
  
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()




    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "") {

            setError(t('SignInPage.error.e1'))
            return
        }
        const data = {
            email: email
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
                    setEmail("")
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
    const handleLoginSuccess = (response) => {
        let decoded = jwt_decode(response?.credential);
        console.log("11111-decode", decoded)



    };
    const handleLoginFailure = (error) => {
        setError(error);
    };


    return (
        <>
            <div className='page-wrapper'>
                <div className='signin-box'>
                    <div className='logo-block'>
                        <div className='logo'>
                            <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                        </div>
                    </div>
                    <div className='form-block'>
                        <form>
                            <div className='input-block'>
                                <input type="email" placeholder={t('SignInPage.form.f1')}
                                    value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='submit-block' >
                                <button type="submit" onClick={(e, response) => handleSubmit(e, response)}>Continue</button>
                            </div>
                        </form>
                        <div className='or-text'>
                            <span>OR</span>
                        </div>


                        <div className='login-options'>
                            {/* <button type='button'><img src="/images/google-icon.png" alt="Google Icon" />Continue with Google</button> */}
                            <button type='button'>

                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Continue with Google"
                                    onSuccess={handleLoginSuccess}
                                    onFailure={handleLoginFailure}
                                    cookiePolicy={"single_host_origin"}
                                    responseType="code,token"
                                />
                            </button>
                            <button type='button' className="apple-icon"><img src="/images/apple-icon.png" alt="Apple Icon" />
                                <AppleLogin
                                     clientId="com.example.myapp"
                                     redirectURI="https://example.com"
                                     onSuccess={handleLoginSuccess}
                                     onFailure={handleLoginFailure}
                                     scope="name email"
                                     usePopup={false}
                                     buttonText="Continue With Apple"
                                />
                            </button>   
                            <button type='button'><img src="/images/key-icon.png" alt="SSO Icon" />Continue with SSO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
