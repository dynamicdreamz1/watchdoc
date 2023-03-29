import { Base64 } from 'js-base64';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate} from 'react-router-dom'
import { RegisterUser, VerifyEmail } from '../services/UserService';
import { UserContext } from '../Store/Context';
import { updateToken } from '../Utility/functions';
import { StoreCookie } from '../Utility/sessionStore';

export default function TwoFactor() {

    const { setCurrentUser} = useContext(UserContext)
    const location = useLocation();
    const { id, emailId } = location.state;
    const { t } = useTranslation();
    const [show, setShow] = useState(true)

    const [code,setCode]=useState('')
    const [error, setError] = useState('')
    // const { emailId,id} = useParams();
    let decodedEmail = (Base64.decode(emailId));
console.log("11111-id",id)
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



    const handleClickConfirm=(e)=>{
        e.preventDefault()
        
        if (code === "") {
            setError(t('TwoFactorPage.error.e1'))
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
                    setError(t('TwoFactorPage.error.e2'))
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
                    <h4 className='text-center'> {t('TwoFactorPage.heading')} </h4>
                    <p> {t('TwoFactorPage.para1')} <strong> {t('TwoFactorPage.b1')} </strong> {t('TwoFactorPage.para2')} </p>
                </div>
                <div className='form-block'>
            <h1>your Code Is :{id}</h1>

                    <form>
                        <div className='input-block'>
                            <input type="text" name='code' placeholder={t('TwoFactorPage.form.ph')} value={code} onChange={(e) => setCode(e.target.value)}/>
                        </div>
                        {error?<span class="error-message">{error}</span>:null}
                        <div className='resend-code'>
                                <button disabled={show} className='codeResend' onClick={(e) => resendCode(e)}> {t('TwoFactorPage.form.button1')} &nbsp;</button>
                                <span className="text">{time}</span>
                            </div>
                        <div className='submit-block'>
                            <button type='submit'onClick={handleClickConfirm}> {t('TwoFactorPage.form.button2')} </button>
                        </div>
                        <div className='cancle-signout text-center'>
                            <button type='button'onClick={()=>navigate('/signin')}> {t('TwoFactorPage.form.button3')} </button>
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
