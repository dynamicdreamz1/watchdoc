import React, { useEffect, useState } from 'react'
import { ProfileCreation } from '../services/UserService';
import '../css/CreateProfile.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const CreateProfile = () => {
    const [firstName, SetFirstName] = useState('')
    const [lastName, SetLastName] = useState('')
    const [dob, SetDOB] = useState('')
    const [sex, SetSex] = useState('')
    const [weight, SetWeight] = useState('')
    const [height, SetHeight] = useState('')
    const [message, setMessage] = useState('')
    const [errorN, setErrorN] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate();



    let token = sessionStorage.getItem('token')
    let profileCheckF = sessionStorage.getItem('profile')
    // console.log(profileCheckF)
    // console.log(token)

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
                    // console.log(Fname)
                    sessionStorage.setItem('name',Fname)
                    let profileCheck = (res.data.user_details.profile_created)
                    setMessage(t('CreateProfilePage.message.m1'))
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
            SetSex("")
            SetWeight("")
            SetHeight("")
            document.getElementById('main_form').reset()

        }

        if (token === null) {
            navigate('/')
        }

        if (profileCheckF === '1' && token) {
            navigate('/dashboard')
        }


    },
        [success, navigate, token, profileCheckF]
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
                        <div className='SuccessMessage'>{message}</div>
                        <form id='main_form'>
                            <div className='input-block'>
                                <label htmlFor="exampleInputFirstName" >{t('CreateProfilePage.form.f1')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputLastName" >{t('CreateProfilePage.form.f2')}</label>
                                <input type="text" placeholder={t('CreateProfilePage.form.f14')} value={lastName} id="exampleInputLastName" onChange={(e) => SetLastName(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputDOB" >{t('CreateProfilePage.form.f3')}</label>
                                <input type="date" value={dob} id="exampleInputDOB" onChange={(e) => SetDOB(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputSex" >{t('CreateProfilePage.form.f4')}</label>
                                <div className='radio-buttons'>
                                    <div className='radio-button'>
                                        <input type="radio" id="male" name="sex" value="Male" onChange={(e) => SetSex(e.target.value)} />
                                        <label htmlFor="male">{t('CreateProfilePage.form.f10')}</label>
                                    </div>
                                    <div className='radio-button'>
                                        <input type="radio" id="female" name="sex" value="Female" onChange={(e) => SetSex(e.target.value)} />
                                        <label htmlFor="female">{t('CreateProfilePage.form.f11')}</label>
                                    </div>
                                    <div className='radio-button'>
                                        <input type="radio" id="other" name="sex" value="Other" onChange={(e) => SetSex(e.target.value)} />
                                        <label htmlFor="other">{t('CreateProfilePage.form.f12')}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputWeight" >{t('CreateProfilePage.form.f7')}</label>
                                <input type="number" placeholder={t('CreateProfilePage.form.f15')} value={weight} id="exampleInputWeight" onChange={(e) => SetWeight(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <label htmlFor="exampleInputHeight" >{t('CreateProfilePage.form.f8')}</label>
                                <input type="number" placeholder={t('CreateProfilePage.form.f16')} value={height} id="exampleInputHeight" onChange={(e) => SetHeight(e.target.value)} />
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
