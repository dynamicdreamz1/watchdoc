import { Base64 } from 'js-base64'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/Verification.css'
import { ForgotUserPassword, RegisterUser } from '../services/UserService'
import { useLocation, useNavigate } from 'react-router-dom'


const VerificationForPassword = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { t } = useTranslation();
    let decodedEmail = (Base64.decode(email));
    const { email, otp } = location.state;
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const [code, setCode] = useState(otp)
    const [time, setTime] = useState(60)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = {
            email: email,
            verify_otp: code
        }
        const res = await ForgotUserPassword(result)

        if (res?.status === 200) {
            if (res?.data?.message !== "Wrong OTP") {
                navigate(`/newpassword`, {
                    state: {
                        email: email

                    },
                });
            }
            else {
                setError(res?.data?.message)
            }
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
                        <div className='eError'> {error && error}</div>
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('VerificationPage.form.f3')}</label>
                                <input type="text" placeholder={t('VerificationPage.form.f4')} value={code} id="exampleInputCode" onChange={(e) => setCode(e.target.value)} />
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

export default VerificationForPassword;

