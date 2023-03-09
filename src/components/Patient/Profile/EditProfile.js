import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfileCreation } from '../../../services/UserService'
import { UserContext } from '../../../Store/Context'
import { MetaFormeting } from '../../../Utility/functions'
import { StoreCookie } from '../../../Utility/sessionStore'

export const EditProfile = () => {
    const { currentUserData, setCurrentUserData } = useContext(UserContext);

    const { first_name, preferred_first_name, last_name, dob, sex, weight, height } = MetaFormeting(currentUserData?.userData);


    const [firstName, SetFirstName] = useState(first_name)
    const [preferredFirstName, setPreferredFirstName] = useState(preferred_first_name)
    const [lastName, SetLastName] = useState(last_name)
    const [Dob, SetDOB] = useState(dob)
    const [Sex, SetSex] = useState(sex)
    const [Weight, SetWeight] = useState(weight)
    const [Height, SetHeight] = useState(height)
    const [message, setMessage] = useState('')
    const [errorN, setErrorN] = useState('')
    //const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

    // console.log(setCurrentUserData)

    const BMI=(Weight/Height)
    const roundedBMI=Math.round(BMI*100)/100

    const handleSubmit = (e) => {

        e.preventDefault()

        if (firstName === "" || firstName === undefined) {
          
            setErrorN(t('EditProfilePage.error.e1'))
        }

        else if (lastName === "" || lastName === undefined) {
            setErrorN(t('EditProfilePage.error.e2'))
        }

        else if (Dob === "" || Dob === undefined) {
            setErrorN(t('EditProfilePage.error.e3'))
        }

        else if (Sex === "" || Sex === undefined) {
            setErrorN(t('EditProfilePage.error.e6'))
        }

        else if (Weight === "" || Weight === undefined) {
            setErrorN(t('EditProfilePage.error.e4'))
        }

        else if (Height === "" || Height === undefined) {
            setErrorN(t('EditProfilePage.error.e5'))
        }

        else {
            const data = {
                first_name: firstName,
                preferred_first_name: preferredFirstName,
                last_name: lastName,
                dob: Dob,
                sex: Sex,
                weight: Weight,
                height: Height,
                request_type: 'edit'
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
                    setLoading(false)
                    StoreCookie.setItem("user_details", res?.data);
                    setCurrentUserData({ ...currentUserData, userData: res?.data })
                    setMessage(t('EditProfilePage.message.m1'))
                    setErrorN("")


                })
                .catch((error) => {
                    setLoading(false)
                    if (error.response.status === 422) {
                        setErrorN(t('EditProfilePage.error.e7'))
                        console.log(error)
                        SetDOB("")
                    }
                    else {
                        console.log(error)
                    }
                })
        }
    }
    // useEffect(() => {
    //     if (success === true) {
    //         SetFirstName("")
    //         setPreferredFirstName("")
    //         SetLastName("")
    //         SetDOB("")
    //         SetSex("")
    //         SetWeight("")
    //         SetHeight("")
    //         document.getElementById('main_form').reset()
    //     }
    // },[success])

    return (
        <>
            <form id='main_form'>
                <div className='errorMessage'>{errorN}</div>
                <div className='SuccessMessage'>{message}</div>
                <div className='input-block'>
                    <label htmlFor="exampleInputFirstName" >{t('EditProfilePage.form.f1')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f13')} value={firstName} id="exampleInputFirstName" onChange={(e) => SetFirstName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputPreferredFirstName" >{t('EditProfilePage.form.f17')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f18')} value={preferredFirstName} id="exampleInputPreferredFirstName" onChange={(e) => setPreferredFirstName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputLastName" >{t('EditProfilePage.form.f2')}</label>
                    <input type="text" placeholder={t('EditProfilePage.form.f14')} value={lastName} id="exampleInputLastName" onChange={(e) => SetLastName(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputDOB" >{t('EditProfilePage.form.f3')}</label>
                    <input type="date" value={Dob} id="exampleInputDOB" onChange={(e) => SetDOB(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputSex" >{t('EditProfilePage.form.f4')}</label>
                    <div className='radio-buttons'>
                        <div className='radio-button'>
                            <input checked={Sex === "male" ? 'checked' : ''} type="radio" id="male" name="sex" value="male" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="male">{t('EditProfilePage.form.f10')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={Sex === "female" ? 'checked' : ''} type="radio" id="female" name="sex" value="female" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="female">{t('EditProfilePage.form.f11')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={Sex === "other" ? 'checked' : ''} type="radio" id="other" name="sex" value="other" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="other">{t('EditProfilePage.form.f12')}</label>
                        </div>
                    </div>
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputWeight" >{t('EditProfilePage.form.f7')}</label>
                    <input type="number" placeholder={t('EditProfilePage.form.f15')} value={Weight} id="exampleInputWeight" onChange={(e) => SetWeight(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="exampleInputHeight" >{t('EditProfilePage.form.f8')}</label>
                    <input type="number" placeholder={t('EditProfilePage.form.f16')} value={Height} id="exampleInputHeight" onChange={(e) => SetHeight(e.target.value)} />
                </div>

                <div className='input-block'>
                    <label htmlFor="exampleInputBMI" >{t('EditProfilePage.form.f19')}</label>
                    <input type="number" disabled placeholder={t('EditProfilePage.form.f20')} value={roundedBMI} id="exampleInputBMI" onChange={(e) => SetHeight(e.target.value)} />
                </div>

                <button type="submit" onClick={(e) => handleSubmit(e)}>{t('EditProfilePage.form.f9')}</button>
                {loading ? <b>{t('EditProfilePage.loader.l1')}</b> : ""}
            </form>
        </>

    )
}
