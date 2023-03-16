import React, { useContext, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/UserService';
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Base64 } from 'js-base64';
import { UserContext } from '../Store/Context';

const SignIn = () => {

    const user = useContext(UserContext);


    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {
            setError(t('SignInPage.error.e1'))
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

                } else {
                    let encodedemail = Base64.encode(response?.data?.data?.email)

                    setLoading(false)
                    setEmail("")
                    navigate(`/verification/${encodedemail}`)
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error);
                return error
            })

    }

    if (user?.token) {
        return redirect('/dashboard');
    }

    return (
        <React.Fragment>
            
            <div className='page-wrapper'>
                <div className='signin-box'>
                    <div className='logo-block'>
                        <div className='logo'>
                            <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                        </div>
                    </div>
                    <div className='form-block'>
                        <div className='form-title text-center'>
                            <h1>Sign in</h1>
                        </div>
                        <div className='LoginError'>{error && error}</div>

                        <form>
                            <div className='input-block'>
                                <input type="email" placeholder={t('SignInPage.form.f1')} 
                                value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <input type="password" placeholder={t('SignInPage.form.f7')} />
                            </div>
                            <div className='forgot-pw-block'>
                                <a href={{}}>{t('SignInPage.form.f11')}</a>
                            </div>
                            <div className='submit-block'>
                                <button type="submit" onClick={(e) => handleSubmit(e)}>{t('SignInPage.form.f2')}</button>
                            </div>
                            {loading ? <b>{t('SignInPage.loader.l1')}</b> : ""}
                            <div className='not-user-block text-center'>
                                <span>{t('SignInPage.form.f8')}</span>
                                <a href={{}}>{t('SignInPage.form.f9')}</a>
                            </div>
                            <div className='privacy-policy-text text-center'>
                                <a href={{}}>{t('SignInPage.form.f10')}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default SignIn;
