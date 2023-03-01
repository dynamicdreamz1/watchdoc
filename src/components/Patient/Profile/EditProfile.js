import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfileCreation } from '../../../services/UserService'
import { UserContext } from '../../../Store/Context'
import { StoreCookie } from '../../../Utility/sessionStore'

export const EditProfile = () => {


    let userpforle =[];
    const {currentUserData,setCurrentUserData} = useContext(UserContext);
    const {userData} = currentUserData;


     // eslint-disable-next-line array-callback-return
     userData?.meta_data?.map((item,i) =>{
            userpforle[item?.meta_key] =item?.meta_value;
     })
    
    const [firstName, SetFirstName] = useState(userpforle?.first_name)
    const [preferredFirstName, setPreferredFirstName] = useState()
    const [lastName, SetLastName] = useState(userpforle?.last_name)
    const [dob, SetDOB] = useState(userpforle?.dob)
    const [sex, SetSex] = useState(userpforle?.sex)
    const [weight, SetWeight] = useState(userpforle?.weight)
    const [height, SetHeight] = useState(userpforle?.height)
    const [message, setMessage] = useState('')
    const [errorN, setErrorN] = useState('')
    //const [success, setSuccess] = useState(false)
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
                   
                   StoreCookie.setItem("user_details",res?.data);
                   setCurrentUserData({...currentUserData,userData:res?.data})
                   setMessage(t('EditProfilePage.message.m1'))
                   setLoading(false)
                })
                .catch((errorMessage) => {

                    if (errorMessage === "The dob does not match the format Y-m-d.") {
                        setErrorN(t('EditProfilePage.error.e7'))

                        console.log(errorMessage)
                        SetDOB("")
                        setLoading(false)
                    }

                    else if (errorMessage === "Unauthenticated.") {
                        //  setSuccess(true)
                        setLoading(false)
                        console.log(errorMessage)
                        setErrorN(t('EditProfilePage.error.e8'))
                    }
                    else {
                        console.log(errorMessage)
                        setLoading(false)
                    }
                })
        }
    }

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
                            <input checked={sex==="male" ? 'checked':'' } type="radio" id="male" name="sex" value="male" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="male">{t('EditProfilePage.form.f10')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={sex==="female" ? 'checked':'' } type="radio" id="female" name="sex" value="female" onChange={(e) => SetSex(e.target.value)} />
                            <label htmlFor="female">{t('EditProfilePage.form.f11')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={sex==="other" ? 'checked':'' } type="radio" id="other" name="sex" value="other" onChange={(e) => SetSex(e.target.value)} />
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
