import React, { useContext, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/UserService';
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Base64 } from 'js-base64';
import { UserContext } from '../Store/Context'; 

const Register = () => {

    const user = useContext(UserContext);

    
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()


    


    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {
            setError(t('RegisterPage.error.e1'))
            return
        }
            const data = {
                email: email
            }
            setLoading(true)

            RegisterUser(data)
                .then((response) => {
                    if (typeof response === "string") {
                        setError(response)
                        setLoading(false)
                        setEmail("")
                    } else {
                        let encodedemail = Base64.encode(response?.data?.email)
                        setLoading(false)
                        setEmail("")
                        navigate(`/verification/${encodedemail}`)
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return error
                })
       // }
    }

    if (user?.token) {
        return redirect('/dashboard');
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
                            <div className='LoginError'>{error && error}</div>

                            <form>
                                <div className='default-login'>
                                    <input type="email" placeholder={t('RegisterPage.form.f1')} 
                                    value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                    <button type="submit" onClick={(e) => handleSubmit(e)}>{t('RegisterPage.form.f2')}</button>
                                </div>
                                {loading ? <b>{t('RegisterPage.loader.l1')}</b> : ""}
                                <div className='or-text'>
                                    <span>{t('RegisterPage.form.f3')}</span>
                                </div>
                                <div className='login-options'>
                                    <button type='button' ><img src="/images/google-icon.png" alt="Google" />{t('RegisterPage.form.f4')}</button>
                                    <button type='button' className="apple-icon"><img src="/images/apple-icon.png" alt="Apple" />{t('RegisterPage.form.f5')}</button>
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
