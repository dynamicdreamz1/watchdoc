import React from 'react'
import AddIcon from './AddIcon'
import { useTranslation } from 'react-i18next'

export default function ConnectingClinician({defaultStatus,setDefaultStatus,setShow}) {
    const {t}=useTranslation();

    const handleClick=()=>{
        setDefaultStatus(!defaultStatus)
        setShow(false)
    }
        

  return (
    <>
    <div className='clinician-connection-wrapper'>
        <div className='title-block d-flex align-items-center justify-content-between'>
            <span className='text'>
                <h4>{t('ConnectingClinician.heading')}</h4>
            </span>
            <span className='icon' onClick={()=>handleClick()}>
                <AddIcon/>
            </span>
        </div>
        <div className='clinician-connection'>
            <div className='text-block'>
                <img src='/images/Clinicians-icon-white.svg' alt='Clinicians Icon White' />
                <h6>{t('ConnectingClinician.heading2')}</h6>
                <p>{t('ConnectingClinician.p1')}</p>
            </div>
            <div className='image-block'>
                <img src='/images/Lady-with-laptop.svg' alt='Lady with Laptop' />
            </div>
        </div>
    </div>
    </>
  )
}
