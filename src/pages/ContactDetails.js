import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import { VerifyMobileN } from '../services/ContactDetailsService';
import { Base64 } from 'js-base64';

export default function ContactDetails() {

    const { t } = useTranslation();
    const [mobileN, setMobileN] = useState('')
    const [error, setError] = useState('')
    const navigate=useNavigate('')

    const handleClick = (e) => {

        e.preventDefault()

        if (mobileN === "") {
            setError(t('mobileNumberVerificationPage.error.e1'))
        }

        else if(mobileN.length<10 || mobileN.length>10){
            setError(t('mobileNumberVerificationPage.error.e2'))
        }

        else {

            const data = {
                mobile_number: mobileN
            }

            VerifyMobileN(data)
                .then((response) => {
                    // console.log(response.data.user_data.contact_number)
                    let encodedMobile= Base64.encode(response.data.user_data.contact_number)
                    // console.log(encodedMobile)
                    navigate(`/VerifyMobile/${encodedMobile}`)
                    
                })

                .catch((error) => {
                    console.log(error)
                    setError(error.response.data.message)
                    
                })

        }

    }

    return (
        <>
            <div className='varification-page-wrapper'>
                <div className='container'>
                    <div className='page-header'>
                        <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
                    </div>
                    <div className='page-content-wrapper'>
                        <div className="title-block">
                            <h4>Your contact details</h4>
                            <p>Please enter your mobile number below.</p>
                        </div>
                        <div className='eError'> {error}</div>
                        {/* <div className='sMessage'> {message}</div> */}
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >Mobile Number</label>
                                <input type="number" placeholder="Your mobile number" onChange={(e) => setMobileN(e.target.value)} value={mobileN} id="exampleInputCode" />
                            </div>
                            <button onClick={(e) => handleClick(e)} type="submit">Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
