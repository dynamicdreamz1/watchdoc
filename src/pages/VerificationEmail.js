import { Base64 } from 'js-base64'
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { VerifyEmail } from '../services/UserService'
import '../css/Verification.css'
import { RegisterUser } from '../services/UserService'
import { StoreCookie } from '../Utility/sessionStore'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../Store/Context'
import { updateToken } from '../Utility/functions'


const VerificationEmail = () => {

    const { setCurrentUser } = useContext(UserContext)

    const [code, setCode] = useState('')

    const navigate = useNavigate()
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')

    const { emailId } = useParams();

    const { t } = useTranslation();

    const [time, setTime] = useState(60)
    let decodedEmail = (Base64.decode(emailId));

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


    const handleSubmit = (e) => {
        e.preventDefault()

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

                    const { data } = res;
                    const { token, user_details } = data;
                    StoreCookie.setItem("token", token);
                    setCurrentUser(token)
                    updateToken();
                    const { profile_created, is_active, roles } = user_details;
                    StoreCookie.setItem("profileCheck", profile_created);
                    StoreCookie.setItem("user_details", JSON.stringify(user_details));
                    StoreCookie.setItem("role", roles[0].name);
                    StoreCookie.setItem("is_active", is_active);

                    if (roles[0].name === "Clinician") {
                        navigate('/dashboard')
                    }

                    else if (roles[0].name === "User") {
                        if (profile_created === 1) {
                            navigate('/dashboard')
                        }

                        else {
                            navigate('/userConsent')
                        }
                    }

                    else if (roles[0].name === "Hospital") {
                        navigate('/dashboard')
                    }

                    else {
                        navigate("/dashboard")
                    }
                    console.log(res)

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
    }

    return (
        <React.Fragment>
            <div className='varification-page-wrapper'>
                <div className='container'>
                    <div className='page-header'>
                        <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
                    </div>
                    <div className='page-content-wrapper'>
                        <div className="title-block">
                            <h4>{t('VerificationPage.form.f6')}</h4>
                            <p>{t('VerificationPage.form.f1')} <strong>{decodedEmail}.</strong> {t('VerificationPage.form.f2')}</p>
                        </div>
                        <div className='eError'> {error}</div>

                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('VerificationPage.form.f3')}</label>
                                <input type="password" placeholder={t('VerificationPage.form.f4')} id="exampleInputCode" onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <div className='resend-code'>
                                <button disabled={show} className='codeResend' onClick={(e) => resendCode(e)}>{t('VerificationPage.form.f7')}&nbsp;</button>
                                <span className="text">{time}</span>
                            </div>
                            <button type="submit" onClick={(e) => handleSubmit(e)}>{t('VerificationPage.form.f5')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VerificationEmail;
