import React, { useEffect, useState } from 'react'
import { ProfileCreation } from '../../../services/UserService';
import '../../../css/CreateProfile.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StoreCookie } from '../../../Utility/sessionStore';

const CreateProfile = () => {

    const [firstName, SetFirstName] = useState('')
    const [preferredFirstName, setPreferredFirstName] = useState("")
    const [lastName, SetLastName] = useState('')
    const [dob, SetDOB] = useState('')
    const [sex, setSex] = useState("")
    const [Weight, SetWeight] = useState("")
    const [Height, SetHeight] = useState("")
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

        else if(sex===""){
            setErrorN(t('CreateProfilePage.error.e9'))
        }

        else if(Weight===""){
            setErrorN(t("CreateProfilePage.error.e4"))
        }

        else if(Height===""){
            setErrorN(t("CreateProfilePage.error.e5"))
        }

        else {
            const data = {
                first_name: firstName,
                preferred_first_name:preferredFirstName,
                last_name: lastName,
                dob: dob,
                sex:sex,
                weight:Weight,
                height:Height
            }

            setLoading(true)
            ProfileCreation(data)
                .then((res) => {
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
                    StoreCookie.setItem("user_details", res?.data);
                    navigate('/contactdetails')
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    if(error.response.status===422){
                        setErrorN(t('CreateProfilePage.error.e7'))
                        console.log(error)
                        SetDOB("")
                    }
                        
                    else{
                        console.log(error)
                       
                    }
                    
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
    },[success])

        
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

                <div className='input-block'>
                    <label htmlFor="exampleInputSex" >{t('CreateProfilePage.form.f4')}</label>
                    <div className='radio-buttons'>
                        <div className='radio-button'>
                            <input checked={sex === "male" ? 'checked' : ''} type="radio" id="male" name="sex" value="male" onChange={(e) => setSex(e.target.value)} />
                            <label htmlFor="male">{t('CreateProfilePage.form.f10')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={sex === "female" ? 'checked' : ''} type="radio" id="female" name="sex" value="female" onChange={(e) => setSex(e.target.value)} />
                            <label htmlFor="female">{t('CreateProfilePage.form.f11')}</label>
                        </div>
                        <div className='radio-button'>
                            <input checked={sex === "other" ? 'checked' : ''} type="radio" id="other" name="sex" value="other" onChange={(e) => setSex(e.target.value)} />
                            <label htmlFor="other">{t('CreateProfilePage.form.f12')}</label>
                        </div>
                    </div>
                </div>

                <div className='input-block'>
                    <label htmlFor="exampleInputWeight" >{t('CreateProfilePage.form.f7')}</label>
                    <input type="text" placeholder={t('CreateProfilePage.form.f15')} value={Weight} id="exampleInputWeight" onChange={(e) => SetWeight(e.target.value)} />
                </div>

                <div className='input-block'>
                    <label htmlFor="exampleInputHeight" >{t('CreateProfilePage.form.f8')}</label>
                    <input type="text" placeholder={t('CreateProfilePage.form.f16')} value={Height} id="exampleInputHeight" onChange={(e) => SetHeight(e.target.value)} />
                </div>
                
                <button type="submit" onClick={(e) => handleSubmit(e)}>{t('CreateProfilePage.form.f9')}</button>
                {loading ? <b>{t('CreateProfilePage.loader.l1')}</b> : ""}
            </form>
        </>
    )
}

export default CreateProfile;
