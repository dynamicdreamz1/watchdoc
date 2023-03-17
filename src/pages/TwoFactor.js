import { Base64 } from 'js-base64';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom'
import { RegisterUser, VerifyEmail } from '../services/UserService';
import { UserContext } from '../Store/Context';
import { updateToken } from '../Utility/functions';
import { StoreCookie } from '../Utility/sessionStore';

export default function TwoFactor() {

    const { setCurrentUser ,currentUserData} = useContext(UserContext)

    const { t } = useTranslation();
    const [show, setShow] = useState(true)

    const [code,setCode]=useState()
    const [error, setError] = useState('')
    const { emailId} = useParams();
    let decodedEmail = (Base64.decode(emailId));

    let navigate = useNavigate()
    const [time, setTime] = useState(60)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 60000);
    }, [])

    useEffect(() => {
        setInterval(() => {
            setTime(prevCount => (prevCount > 0) ? prevCount - 1 : 0);
        }, 1000);

    }, []);


console.log("1111111-currentUserData",currentUserData)

    const handleClickConfirm=(e)=>{
        e.preventDefault()
        // if(code ==="1234"){
        //     navigate('/clinicianDashboard')
        // }
        // else{
        //     setError('Please Enter Valid Verification Code')
        // }
        
        if (code === "") {
            setError(t('VerificationPage.error.e1'))
        }


        else {
            const data = {
                email: emailId,
                varification_code: code,
            }

            VerifyEmail(data)
                .then((res) => {
                    console.log(res)
                    const { data } = res;
                    let { token, user_details } = data;
                    if(user_details?.roles[0].name==="User"){
                        navigate('/signin')
                    }
                    else if(user_details?.roles?.map((el)=>el.name==='Clinician')){
                    StoreCookie.setItem("token", token);
                    setCurrentUser(token)
                    updateToken();
                    const { profile_created, is_active, roles } = user_details;
                    StoreCookie.setItem("profileCheck", profile_created);
                    StoreCookie.setItem("user_details", JSON.stringify(user_details));
                    StoreCookie.setItem("role", roles[0].name);
                    StoreCookie.setItem("is_active", is_active);

                    navigate('/dashboard')
                   
                    }
                    else{
                        navigate('/signin')

                    }
     

                })
                .catch((error) => {
                    setError(t('VerificationPage.error.e2'))
                })
        }      
    }

    const resendCode = (e) => {
        e.preventDefault()
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 60000);
        setTime(60)
        const data = {
            email: decodedEmail
        }
        
        RegisterUser(data)
            .then((response) => {
                if (typeof response === "string") {
                    setError(response)                  

                } else {
                    console.log(response)
                }
            })
            .catch((error) => {
                return error
            })
    }




  return (
    <>
        <div className='page-wrapper'>
            <div className='signin-box two-fa-box'>
                <div className='logo-block'>
                    <div className='logo'>
                        <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                    </div>
                </div>
                <div className='title-block'>
                    <h4 className='text-center'>Verify your Enhanced Security (2FA)</h4>
                    <p>We sent a text message to <strong>+61 ••• ••• •97</strong>. Enter your verification code to continue signing in.</p>
                </div>
                <div className='form-block'>
                    <form>
                        <div className='input-block'>
                            <input type="text" name='code' placeholder='SMS Code' value={code} onChange={(e) => setCode(e.target.value)}/>
                        </div>
                        {error?<span class="error-message">{error}</span>:null}
                        <div className='resend-code'>
                                <button disabled={show} className='codeResend' onClick={(e) => resendCode(e)}>{t('VerificationPage.form.f7')}&nbsp;</button>
                                <span className="text">{time}</span>
                            </div>
                        <div className='submit-block'>
                            <button type='submit'onClick={handleClickConfirm}>Confirm</button>
                        </div>
                        <div className='cancle-signout text-center'>
                            <button type='button'onClick={()=>navigate('/signin')}>Cancel and sign out</button>
                        </div>
                    </form>
                </div>
                {/* <div className='cancle-signout text-center'>
                    <button type='button'>Cancel and sign out</button>
                </div> */}
            </div>
        </div>
    </>
  )
}
