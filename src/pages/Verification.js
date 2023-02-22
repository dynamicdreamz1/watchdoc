import { Base64 } from 'js-base64'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { VerifyEmail} from '../services/UserService'
import '../css/Verification.css'
import { RegisterUser } from '../services/UserService'


const Verification = () => {

    const [code, setCode] = useState('')
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const { emailId } = useParams();
    let navigate = useNavigate("")
    const { t } = useTranslation();
    let decodedEmail = (Base64.decode(emailId));

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 60000);
    })

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
                    let roleType = res.data.user_details.roles[0].name
                    sessionStorage.setItem('role', roleType)
                    let token = res.data.token
                    let profileCheck = res.data.user_details.profile_created
                    sessionStorage.setItem('profile', profileCheck)
                    sessionStorage.setItem('token', token)
                    let profileCheckF = sessionStorage.getItem('profile')
                    if (profileCheckF === '1' && token) {
                        navigate('/dashboard')
                    } else {
                        setMessage(t('VerificationPage.message.m1'))
                        setCode("")
                        navigate('/userconsent')
                    }
                })
                .catch((error) => {
                    if (error === "please enter valid varificationcode") {
                        setError(t('VerificationPage.error.e2'))
                        console.log(error)
                        setCode("")
                    }
                    else {
                        console.log(error)
                    }
                })
        }
    }

    const resendCode = (e) => {
        e.preventDefault()
        setShow(true)
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
                        <div className='sMessage'> {message}</div>
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('VerificationPage.form.f3')}</label>
                                <input type="password" placeholder={t('VerificationPage.form.f4')} value={code} id="exampleInputCode" onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <button disabled={show} className='codeResend' onClick={(e) => resendCode(e)}>{t('VerificationPage.form.f7')}</button> <br /><br />
                            <button type="submit" onClick={(e) => handleSubmit(e)}>{t('VerificationPage.form.f5')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Verification;
