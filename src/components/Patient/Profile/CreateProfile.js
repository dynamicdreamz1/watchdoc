import React, { useEffect, useState } from 'react'
import { ProfileCreation } from '../../../services/UserService';
import '../../../css/CreateProfile.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StoreCookie } from '../../../Utility/sessionStore';

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
                preferred_first_name:preferredFirstName,
                last_name: lastName,
                dob: dob,
                request_type:'create'
                
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
                    if (res?.response?.status===422) {
                        setErrorN(t('CreateProfilePage.error.e7'))
                        SetDOB("")
                        setLoading(false)
                    }else
                    if(res?.response?.status===401){
                        setSuccess(true)
                        setLoading(false)
                        setErrorN(t('CreateProfilePage.error.e8'))
                    }
                    let Fname=(res.data.meta_data[0].meta_value)
                    StoreCookie.setItem('name',Fname)
                    let profileCheck = (res.data.profile_created)
                    setSuccess(true)
                    StoreCookie.setItem('profileCheck', profileCheck)
                    navigate('/contactdetails')
                    setLoading(false)
                })
                .catch((error) => {
                    return error
                })
        }
    }
    
    useEffect(() => {
        if (success === true) {
            SetFirstName("")
            SetLastName("")
            setPreferredFirstName("")
            SetDOB("")
            document.getElementById('main_form').reset()
        }

        
    },
        [success]
    )
    return (
        <>
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
        </>
    )
}

export default CreateProfile;
