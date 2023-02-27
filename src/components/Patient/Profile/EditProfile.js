import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ProfileCreation } from '../../../services/UserService'

export const EditProfile = () => {
    const [firstName, SetFirstName] = useState('')
    const [lastName, SetLastName] = useState('')
    const [dob, SetDOB] = useState('')
    const [sex, SetSex] = useState('')
    const [weight, SetWeight] = useState('')
    const [height, SetHeight] = useState('')
    const [message, setMessage] = useState('')
    const [errorN, setErrorN] = useState('')
    //const [success, setSuccess] = useState(false)
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

        else if (sex === "") {
            setErrorN(t('CreateProfilePage.error.e6'))
        }

        else if (weight === "") {
            setErrorN(t('CreateProfilePage.error.e4'))
        }

        else if (height === "") {
            setErrorN(t('CreateProfilePage.error.e5'))
        }

        else {
            const data = {
                first_name: firstName,
                last_name: lastName,
                dob: dob,
                sex: sex,
                weight: weight,
                height: height
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
                    let Fname=(res.data.user_details.first_name)
                    sessionStorage.setItem('name',Fname)
                    let profileCheck = (res.data.user_details.profile_created)
                    setMessage(t('CreateProfilePage.message.m1'))
                    //setSuccess(true)
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
                      //  setSuccess(true)
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

    return (
    
    <React.Fragment>
            <div className='varification-page-wrapper'>
                <div className='container'>
                    
                    <div className='page-content-wrapper'>
                        
                        <div className='errorMessage'>{errorN}</div>
                        <div className='SuccessMessage'>{message}</div>
                        <form id='main_form'>
                            <div className='input-block'>
                                <label htmlFor="FirstName" >{t('CreateProfilePage.form.f1')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="PreferredFirstName" >{t('CreateProfilePage.form.f1')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="LastName" >{t('CreateProfilePage.form.f2')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f14')} value={lastName} id="exampleInputLastName" onChange={(e) => SetLastName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="DOB" >{t('CreateProfilePage.form.f3')}</label>
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
