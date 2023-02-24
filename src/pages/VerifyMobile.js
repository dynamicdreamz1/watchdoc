
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { RegisterMobNumber } from '../services/UserService';
import { VerifyMobileNumber } from '../services/UserService';

const VerifyMobile = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const { mobileN } = useParams()
    const [show, setShow] = useState(true)
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

    const handleClick = (e) => {

        e.preventDefault();
        if (code === "") {
            setError(t('verifyMobile.e1'))
        }
        else {
            const data = {
                mobile_number: mobileN,
                varification_code: code
            }
            VerifyMobileNumber(data)
                .then((res) => {
                    if (typeof res === "string") {
                        if (res === "please enter valid varification code") {
                            setError(t('verifyMobile.e2'))
                            setCode("")
                        }
                    } else {
                        navigate('/thankyou')
                    }
                })
                .catch((error) => {
                    console.log(error)
                    return error;
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
            mobile_number: mobileN,
        }
        RegisterMobNumber(data)
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
                            <h4>{t('verifyMobile.heading')}</h4>
                            <p>{t('verifyMobile.p1')}</p>
                        </div>
                        <div className='eError'> {error}</div>
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('verifyMobile.label')}</label>
                                <input type="password" placeholder={t('verifyMobile.placeholder')} onChange={(e) => setCode(e.target.value)} value={code} id="exampleInputCode" />
                            </div>
                            <div className='resend-code'>
                            <button disabled={show} className='codeResend' onClick={(e) => resendCode(e)}>{t('verifyMobile.b1')} &nbsp;</button> 
                            <span className="text">{time}</span>
                            </div>
                            <button onClick={(e) => handleClick(e)} type="submit">{t('verifyMobile.b2')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VerifyMobile;
