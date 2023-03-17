import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../Store/Context';
import '../css/Register.css'
import { RegisterUser } from '../services/UserService';
import { Base64 } from 'js-base64';

export default function PatientEntry() {
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
    <>
    <div className='page-wrapper'>
        <div className='signin-box'>
            <div className='logo-block'>
                <div className='logo'>
                    <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                </div>
            </div>
            <div className='form-block'>
                <form>
                    <div className='input-block'>
                        <input type="email" placeholder={t('SignInPage.form.f1')} 
                                value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='submit-block' >
                        <button type="submit" onClick={(e) => handleSubmit(e)}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


            </> 
  )
}