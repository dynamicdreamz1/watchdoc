import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom'
import { VerifyEmail } from '../services/UserService';
import { UserContext } from '../Store/Context';
import { updateToken } from '../Utility/functions';
import { StoreCookie } from '../Utility/sessionStore';

export default function TwoFactor() {

    const { setCurrentUser ,currentUserData} = useContext(UserContext)

    const { t } = useTranslation();
    const [code,setCode]=useState()
    const [error, setError] = useState('')
    const { emailId} = useParams();
    let navigate = useNavigate()



console.log("1111111-currentUserData",currentUserData)

    const handleClickConfirm=(e)=>{
        e.preventDefault()
        // if(code ==="1234"){
        //     navigate('/clinicianDashboard')
        // }
        // else{
        //     setError('Please Enter Valid Verification Code')
        // }
        
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
                    console.log(res)
                    const { data } = res;
                    let { token, user_details } = data;
                    if(user_details?.roles[0].name==="User"){
                        navigate('/signin')
                    }
                    else if(user_details?.roles?.map((el)=>el.name==='Clinician')){
                    StoreCookie.setItem("token", token);
                    setCurrentUser(token)
                    updateToken();
                    const { profile_created, is_active, roles } = user_details;
                    StoreCookie.setItem("profileCheck", profile_created);
                    StoreCookie.setItem("user_details", JSON.stringify(user_details));
                    StoreCookie.setItem("role", roles[0].name);
                    StoreCookie.setItem("is_active", is_active);

                    navigate('/dashboard')
                   
                    }
                    else{
                        navigate('/signin')

                    }
     

                })
                .catch((error) => {
                    setError(t('VerificationPage.error.e2'))
                })
        }
        
        
       
    }
  return (
    <>
        <div className='page-wrapper'>
            <div className='signin-box'>
                <div className='logo-block'>
                    <div className='logo'>
                        <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                    </div>
                </div>
                <div className='title-block'>
                    <h4 className='text-center'>Verify your Enhanced Security (2FA)</h4>
                    <p>We sent a text message to +61 ••• ••• •97. Enter your verification code to continue signing in.</p>
                </div>
                <div className='form-block'>
                    <form>
                        <div className='input-block'>
                            <input type="text" name='code' placeholder='SMS Code' value={code} onChange={(e) => setCode(e.target.value)}/>
                        </div>
                        {error?<h3>{error}</h3>:null}
                        <div className='submit-block'>
                            <button type='submit'onClick={handleClickConfirm}>Confirm</button>
                        </div>
                        <div className='cancle-signout'>
                            <button type='button'>Cancel and sign out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
