
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
                navigate('/thankyou')
                
            })
            .catch((error)=>{

                if(error.response.data.message==="please enter valid varification code"){
                console.log(error)
                setError(t('verifyMobile.e2'))
                }
            })
        }


    }

    const resendCode=(e)=>{
        e.preventDefault() 
        setShow(true)
        const data={
            mobile_number:mobileN,
            
        }
        // console.log(data)
        VerifyMobileN(data)
      
   
       
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
                        {/* <div className='sMessage'> {message}</div> */}
                        <form>
                            <div className='input-block'>
                                <label htmlFor="exampleInputCode" >{t('verifyMobile.label')}</label>
                                <input type="number" placeholder={t('verifyMobile.placeholder')} onChange={(e) => setCode(e.target.value)} value={code} id="exampleInputCode" />
                            </div>

                            <button disabled={show} className='codeResend' onClick={(e)=>resendCode(e)}>{t('verifyMobile.b1')}</button> <br/><br/>
                            <button onClick={(e) => handleClick(e)} type="submit">{t('verifyMobile.b2')}</button>
                        </form>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default VerifyMobile;
