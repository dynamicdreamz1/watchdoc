import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfileCreation } from '../../../services/UserService'
import { StoreCookie } from '../../../Utility/sessionStore'

export const EditProfile = () => {
    const [firstName, SetFirstName] = useState('')
    const [preferredFirstName, setPreferredFirstName] = useState('')
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
   

    const handleSubmit = (e) => {
    
        e.preventDefault()

        if (firstName === "") {
           console.log('ok')
           setErrorN(t('EditProfilePage.error.e1'))
        }

        else if (lastName === "") {
            setErrorN(t('EditProfilePage.error.e2'))
        }

        else if (dob === "") {
            setErrorN(t('EditProfilePage.error.e3'))
        }

        else if (sex === "") {
            setErrorN(t('EditProfilePage.error.e6'))
        }

        else if (weight === "") {
            setErrorN(t('EditProfilePage.error.e4'))
        }

        else if (height === "") {
            setErrorN(t('EditProfilePage.error.e5'))
        }

        else {
            const data = {
                first_name: firstName,
                preferred_first_name:preferredFirstName,
                last_name: lastName,
                dob: dob,
                sex: sex,
                weight: weight,
                height: height,
                request_type:'edit'
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
                    if (res?.response?.status===422) {
                        setErrorN(t('EditProfilePage.error.e7'))
                        SetDOB("")
                        setLoading(false)
                    }else
                    if(res?.response?.status===401){
                        setLoading(false)
                        setErrorN(t('EditProfilePage.error.e8'))
                    }
                    let Fname = (res.data.user_data[0].meta_value)
                    StoreCookie.setItem('name', Fname)
                    let profileCheck = (res.data.profile_created)
                    setMessage(t('EditProfilePage.message.m1'))
                    setSuccess(true)
                    StoreCookie.setItem('profile', profileCheck)
                    setLoading(false)
                    setErrorN("")
                })
                .catch((error) => {
                    return error
                })
        }
    }
    useEffect(() => {
        if (success === true) {
            SetFirstName("")
            setPreferredFirstName("")
            SetLastName("")
            SetDOB("")
            SetSex("")
            SetWeight("")
            SetHeight("")
            document.getElementById('main_form').reset()
        }
    },[success])

    return (
        <>
            <form id='main_form'>
                <div className='errorMessage'>{errorN}</div>
                <div className='SuccessMessage'>{message}</div>
                <div className='input-block'>
                    <label htmlFor="FirstName" >{t('EditProfilePage.form.f1')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="PreferredFirstName" >{t('EditProfilePage.form.f17')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f18')} value={preferredFirstName} id="exampleInputFirstName" onChange={(e) => setPreferredFirstName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="LastName" >{t('EditProfilePage.form.f2')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f14')} value={lastName} id="exampleInputLastName" onChange={(e) => SetLastName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="DOB" >{t('EditProfilePage.form.f3')}</label>
                    <input type="date" value={dob} id="exampleInputDOB" onChange={(e) => SetDOB(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputSex" >{t('EditProfilePage.form.f4')}</label>
                    <div className='radio-buttons'>
                        <div className='radio-button'>
                            <input type="radio" id="male" name="sex" value="Male" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="male">{t('EditProfilePage.form.f10')}</label>
                        </div>
                        <div className='radio-button'>
                            <input type="radio" id="female" name="sex" value="Female" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="female">{t('EditProfilePage.form.f11')}</label>
                        </div>
                        <div className='radio-button'>
                            <input type="radio" id="other" name="sex" value="Other" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="other">{t('EditProfilePage.form.f12')}</label>
                        </div>
                    </div>
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputWeight" >{t('EditProfilePage.form.f7')}</label>
                    <input type="number" placeholder={t('EditProfilePage.form.f15')} value={weight} id="exampleInputWeight" onChange={(e) => SetWeight(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputHeight" >{t('EditProfilePage.form.f8')}</label>
                    <input type="number" placeholder={t('EditProfilePage.form.f16')} value={height} id="exampleInputHeight" onChange={(e) => SetHeight(e.target.value)} />
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>{t('EditProfilePage.form.f9')}</button>
                {loading ? <b>{t('EditProfilePage.loader.l1')}</b> : ""}
            </form>
        </>

    )
}
