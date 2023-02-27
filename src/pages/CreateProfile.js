import React, { useEffect, useState } from 'react'
import { ProfileCreation } from '../services/UserService';
import '../css/CreateProfile.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const CreateProfile = () => {
    const [firstName, SetFirstName] = useState('')
    const [preferredFirstName, setPreferredFirstName] = useState('')
    const [lastName, SetLastName] = useState('')
    const [dob, SetDOB] = useState('')
 
    const [errorN, setErrorN] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (firstName === "") {
            setErrorN(t('CreateProfilePage.error.e1'))
        }


        else if (lastName === "") {
            setErrorN(t('CreateProfilePage.error.e2'))
        }

        else if (dob === "") {
            setErrorN(t('CreateProfilePage.error.e3'))
        }

        else {
            const data = {
                first_name: firstName,
                
                last_name: lastName,
                dob: dob,
                
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
                    let Fname=(res.data.user_details.first_name)
                    sessionStorage.setItem('name',Fname)
                    let profileCheck = (res.data.user_details.profile_created)
                  
                    setSuccess(true)
                    sessionStorage.setItem('profile', profileCheck)
                    navigate('/contactdetails')
                    setLoading(false)
                })
                .catch((errorMessage) => {

                    if (errorMessage === "The dob does not match the format Y-m-d.") {
                        setErrorN(t('CreateProfilePage.error.e7'))

                        console.log(errorMessage)
                        SetDOB("")
                        setLoading(false)
                    }

                    else if (errorMessage === "Unauthenticated.") {
                        setSuccess(true)
                        setLoading(false)
                        console.log(errorMessage)
                        setErrorN(t('CreateProfilePage.error.e8'))
                    }
                    else {
                        console.log(errorMessage)
                        setLoading(false)
                    }
                })
        }
    }


    useEffect(() => {
        if (success === true) {
            SetFirstName("")
            SetLastName("")
            SetDOB("")
            document.getElementById('main_form').reset()
        }

        
    },
        [success]
    )


    return (
        <React.Fragment>
            <div className='varification-page-wrapper'>
                <div className='container'>
                    <div className='page-header'>
                        <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
                    </div>
                    <div className='page-content-wrapper'>
                        <div className="title-block">
                            <h4>{t('CreateProfilePage.register.r1')}</h4>
                        </div>
                        <div className='errorMessage'>{errorN}</div>
                      
                        <form id='main_form'>
                            <div className='input-block'>
                                <label htmlFor="exampleInputFirstName" >{t('CreateProfilePage.form.f1')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                            </div>

                            <div className='input-block'>
                                <label htmlFor="exampleInputPrefferedFirstName" >{t('CreateProfilePage.form.f17')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f18')} value={preferredFirstName} id="exampleInputPrefferedFirstName" onChange={(e) => setPreferredFirstName(e.target.value)} />
                            </div>

                            <div className='input-block'>
                                <label htmlFor="exampleInputLastName" >{t('CreateProfilePage.form.f2')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f14')} value={lastName} id="exampleInputLastName" onChange={(e) => SetLastName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputDOB" >{t('CreateProfilePage.form.f3')}</label>
                                <input type="date" value={dob} id="exampleInputDOB" onChange={(e) => SetDOB(e.target.value)} />
                            </div>
                           
                            <button type="submit" onClick={(e) => handleSubmit(e)}>{t('CreateProfilePage.form.f9')}</button>
                            {loading ? <b>{t('CreateProfilePage.loader.l1')}</b> : ""}
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateProfile;
