import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/RegisterService';
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Base64 } from 'js-base64';


const Register = () => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {

            setError(t('RegisterPage.error.e1'))
        }

        
        else {
            // console.log(email)

            let profileCheckF=sessionStorage.getItem('profile')
            let token=sessionStorage.getItem('token');

            if(profileCheckF==='1' && token ){
                navigate('/dashboard')
            }

            else{

            const data={
                email : email
            }
            
            setLoading(true)

            RegisterUser(data)
                .then((response) => {
                    
                    // console.log(response.data.data.email)
                    let encodedemail = Base64.encode(response.data.data.email)
                    // console.log(encodedemail)
                    setLoading(false)
                    setEmail("")
                    navigate(`/verification/${encodedemail}`)
                })
              
                .catch((error) => {
                    setLoading(false)

                    setEmail("")
                    setError(error)

                })
            }

        }
    }



    return (
        <React.Fragment>

            <div className='login-page-wrapper page-wrapper'>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='logo-block'>
                            <div className='logo'>
                                <img src='/images/WatchDoc-LOGO.png' alt="WatchDoc Logo" />
                            </div>
                            <div className='frame'>
                                <img src='/images/Mobile-Frame.png' alt="Mobile Frame with User Hand" />
                            </div>
                        </div>
                        <div className='form-block'>
                            <div className='LoginError'>{error}</div>
                            <div className='LoginMessage'>{message}</div>

                            <form>
                                <div className='default-login'>
                                    <input type="email" placeholder={t('RegisterPage.form.f1')} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                    <button type="submit" onClick={(e) => handleSubmit(e)}>{t('RegisterPage.form.f2')}</button>
                                </div>
                                {loading ? <b>{t('RegisterPage.loader.l1')}</b> : ""}
                                <div className='or-text'>
                                    <span>{t('RegisterPage.form.f3')}</span>
                                </div>



                                <div className='login-options'>
                                    <button type='button' ><img src="/images/google-icon.png" alt="Google Icon" />{t('RegisterPage.form.f4')}</button>
                                    <button type='button' className="apple-icon"><img src="/images/apple-icon.png" alt="Apple Icon" />{t('RegisterPage.form.f5')}</button>
                                    <button type='button'><img src="/images/key-icon.png" alt="SSO Icon" />{t('RegisterPage.form.f6')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Register;
