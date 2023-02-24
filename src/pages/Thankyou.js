import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'


export default function Thankyou() {

    const navigate=useNavigate()

    let Fname=sessionStorage.getItem('name')
    let role=sessionStorage.getItem('role')

    const {t}=useTranslation();
    const handleClick=()=>{

        if(role==="User"){
        navigate('/add-clinicians')
        }
    }   

  return (
    <>
    <div className='varification-page-wrapper thankyou-page-wrapper'>
        <div className='container'>
            <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
            </div>
            <div className='page-content-wrapper'>
                <div className="title-block">
                    <h4>{t('ThankYouPage.p1')} {Fname}, {t('ThankYouPage.p2')}</h4>
                </div>
                <button onClick={()=>handleClick()} type="submit">{t('ThankYouPage.b1')}</button>
            </div>
        </div>
    </div>
    </>
  )
}
