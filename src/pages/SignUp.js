import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileSettingTabs from '../components/Clinician/Profile/ProfileSettingTabs';
const SignUp = () =>  {
    const navigate=useNavigate();
    const [error,setError]=useState("")
    const [signUpUserData,setSignUpUserData]=useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "mobile":"",
        "practicename":"",
        "practiceaddress":""

    })
    const handleChange=(key,value)=>{
        setSignUpUserData({...signUpUserData,[key]:value})

    }
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        if(signUpUserData?.firstname!==""&&signUpUserData?.lastname!==""&&signUpUserData?.email!==""
        &&signUpUserData?.mobile!==""&&signUpUserData?.practicename!==""&&signUpUserData?.practiceaddress!==""){
            setError("")
            navigate('/signupsuccess')
        }
        else{
            setError("All Field Are Required*")
        }
    }


  return (
    <>
        <div className='page-wrapper signup-page-wrapper'>
            <div className='form-block'>
                <div className='logo-block'>
                    <img src='/images/WatchDoc-LOGO.svg' alt='WatchDoc Logo' />
                </div>
                <div className='text-block'>
                    <h1>Create your free clinician listing</h1>
                    <p>Create a free profile on WatchDoc and make it easy for your<br></br> patients to find and connect with you via the WatchDoc app.</p>
                </div>
                <form>
                    <div className='input-block'>
                        <input type="text" name='first-name' placeholder='First Name*' onChange={(e) => handleChange("firstname",e.target.value)} />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='last-name' placeholder='Last Name*' onChange={(e) => handleChange("lastname",e.target.value)} />
                    </div>
                    <div className='input-block'>
                        <input type="email" name='email' placeholder='Email*' onChange={(e) => handleChange("email",e.target.value)} />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='mobile' placeholder='Mobile*' onChange={(e) => handleChange("mobile",e.target.value)} />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='practice-name' placeholder='Practice name*' onChange={(e) => handleChange("practicename",e.target.value)} />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='practice-address' placeholder='Practice Address*' onChange={(e) => handleChange("practiceaddress",e.target.value)} />
                    </div>
                    {error?<h2>{error}</h2>:null}
                    <div className='submit-block'>
                        <button type='submit' onClick={handleSubmitForm}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        <ProfileSettingTabs/>
    </>
  )
}

export default SignUp;