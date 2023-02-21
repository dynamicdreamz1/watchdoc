import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Thankyou() {

    const navigate=useNavigate()
    let Fname=sessionStorage.getItem('name')
    
    const handleClick=()=>{
        navigate('/Dashboard')
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
                    <h4>Thanks {Fname}, your profile is complete. Now let’s connect to your devices.</h4>
                </div>
                <button onClick={()=>handleClick()} type="submit">Next</button>
            </div>
        </div>
    </div>
    </>
  )
}
