import { Base64 } from 'js-base64';
import React, { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { VerifyMobileN } from '../services/ContactDetailsService';
import { VerifyMobileService } from '../services/VerifyMobileService';

const VerifyMobile = () => {

    useEffect(()=>{
        setTimeout(() => {
            setShow(false)
        }, 60000);
    })

    const navigate=useNavigate();
    const {t}=useTranslation();
    const [code,setCode]=useState('')
    const [error, setError] = useState('')
    const {mobileN}=useParams()
    const [show,setShow]=useState(true)
    // console.log(mobileN)
    // let mob=Base64.decode(mobileN)
    // console.log(mob)
    const handleClick=(e)=>{

        e.preventDefault();
        if(code===""){
            setError(t('verifyMobile.e1'))
        }

        else{

            const data={
                mobile_number:mobileN,
                varification_code:code
            }

            VerifyMobileService(data)
            .then((res)=>{
                console.log(res)
                navigate('/Thankyou')
                
            })
            .catch((error)=>{
                console.log(error)
                setError(error.response.data.message)
            })
        }


    }

    const resendCode=(e)=>{
        e.preventDefault() 
        setShow(true)
        const data={
            mobile_number:mobileN,
            
        }
        console.log(data)
        VerifyMobileN(data)
        .then((res)=>{
            console.log(res)
        //     navigate('/Thankyou')
            
        })
        .catch((error)=>{
            console.log(error)
            setError(error.response.data.message)
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
                            <h4>Verification</h4>
                            <p>We have sent a verification code to your phone. Please enter it here.</p>
                        </div>
                        <div className='eError'> {error}</div>
                        {/* <div className='sMessage'> {message}</div> */}
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >Verification Code</label>
                                <input type="number" placeholder="Your mobile number" onChange={(e) => setCode(e.target.value)} value={code} id="exampleInputCode" />
                            </div>

                            <button disabled={show} className='codeResend' onClick={(e)=>resendCode(e)}>Resend Code</button> <br/><br/>
                            <button onClick={(e) => handleClick(e)} type="submit">Next</button>
                        </form>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default VerifyMobile;
