import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCurrentUserData, ProfileCreation } from '../../../services/UserService'
import { UserContext } from '../../../Store/Context'
import { MetaFormeting } from '../../../Utility/functions'
import { StoreCookie } from '../../../Utility/sessionStore'
import { toast, ToastContainer } from 'react-toastify'
import {Field, Formik } from 'formik';
import * as Yup from 'yup';

export const EditProfile = () => {
    const { currentUserData, setCurrentUserData } = useContext(UserContext);
    const userData = getCurrentUserData();
    // let finalUser = currentUserData?.userData?.meta_data.length === 0 ? userData : currentUserData?.userData;
    const { first_name, preferred_first_name, last_name, dob, sex, weight, height } = MetaFormeting(userData);


    const [updateUser, setUpdateUser] = useState({
        "firstname": first_name,
        "lastname": last_name,
        "preferredFirstName": preferred_first_name,
        "dob": dob,
        "sex": sex,
        "weight": weight,
        "height": height,

    })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

    const BMI = (weight / Math.pow((updateUser?.height), 2))

    const roundedBMI = Math.round(BMI * 100) / 100

    const handleSubmit = (value) => {
        setLoading(true)
        const formData=new FormData();
        formData.append("first_name", value?.firstname);
        formData.append("preferred_first_name",value?.preferredFirstName);
        formData.append("last_name", value?.lastname);
        formData.append("dob", value?.dob);
        formData.append("sex", value?.sex);
        formData.append("weight",value?.weight);
        formData.append("height",value?.height);
        ProfileCreation(formData)
            .then((res) => {                
                StoreCookie.setItem("user_details", res?.data);
                setCurrentUserData({ ...currentUserData, userData: res?.data })
                toast.success('Profile updated successfully.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
                setMessage(t('EditProfilePage.message.m1'))
                setLoading(false)
                setTimeout(() => {
                    setMessage("")
                }, 3000);


            })
            .catch((error) => {
                setLoading(false)
                if (error.response.status === 422) {
                    setMessage(t('EditProfilePage.error.e7'))
                }
                else {
                    setMessage(error)
                }
            })

    }



    const LoginSchema = Yup.object({
        firstname: Yup.string()
        .required("This field is required*")
        .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed for this field"),     
        lastname: Yup.string()
          .required("This field is required*")
         .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed for this field"),     
        preferredFirstName: Yup.string()
          .required("This field is required*")
         .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed for this field"),     
        dob: Yup.date().required("This field is required*"),
        sex: Yup.string().required("This field is required*"),
        weight: Yup.string().required("This field is required*"),
        height: Yup.string().required("This field is required*"),
      });





    return (
    <>
        <ToastContainer />
        <Formik
            initialValues={updateUser}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => { handleSubmit(values) }}
        >
            {(props) => (
                <>
                    <form id='main_form' onSubmit={props.handleSubmit}>
                        <div className='SuccessMessage'></div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputFirstName" >{t('EditProfilePage.form.f1')}</label>
                            <input type="text" name="firstname" placeholder={t('EditProfilePage.form.f13')} value={props?.values?.firstname}  id="exampleInputFirstName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.firstname ? props?.errors?.firstname : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputPreferredFirstName" >{t('EditProfilePage.form.f17')}</label>
                            <input type="text" name="preferredFirstName" placeholder={t('EditProfilePage.form.f18')} value={props?.values?.preferredFirstName} id="exampleInputPreferredFirstName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.preferredFirstName ? props?.errors?.preferredFirstName : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputLastName" >{t('EditProfilePage.form.f2')}</label>
                            <input type="text" name="lastname" placeholder={t('EditProfilePage.form.f14')} value={props?.values?.lastname} id="exampleInputLastName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.lastname ? props?.errors?.lastname : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputDOB" >{t('EditProfilePage.form.f3')}</label>
                            <input type="date" name="dob" value={props?.values?.dob} id="exampleInputDOB" onChange={props?.handleChange}/>
                            <span className="error"> {props?.errors?.dob ? props?.errors?.dob : ""}</span>
                        </div>
                        {/* <div className='input-block'>
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
                        </div> */}
                         <div className='input-block'>
                            <label htmlFor="exampleInputSex" >{t('CreateProfilePage.form.f4')}</label>
                            <div className='radio-buttons'>
                                <div className='radio-button'>
                                    <Field type="radio" id="male" name="sex" value="male" />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className='radio-button'>
                                    <Field type="radio" id="female" name="sex" value="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className='radio-button'>
                                    <Field type="radio" id="other" name="sex" value="other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                            <span className="error"> {props?.errors?.sex ? props?.errors?.dob : ""}</span>
                            </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputWeight" >{t('EditProfilePage.form.f7')}</label>
                            <input type="text" name="weight"  placeholder={t('EditProfilePage.form.f15')} value={props?.values?.weight} id="exampleInputWeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.weight ? props?.errors?.weight : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputHeight" >{t('EditProfilePage.form.f8')}</label>
                            <input type="text" name="height" placeholder={t('EditProfilePage.form.f16')} value={props?.values?.height} id="exampleInputHeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.height ? props?.errors?.height : ""}</span>
                        </div>

                        <div className='input-block'>
                            <label htmlFor="exampleInputBMI" >{t('EditProfilePage.form.f19')}</label>
                            <input type="number" disabled placeholder={t('EditProfilePage.form.f20')} value={roundedBMI} id="exampleInputBMI" />
                        </div>
                        {loading ? <div className='LoginError'>{t('EditProfilePage.loader.l1')}</div> : ""}
                                              
                        <button type="submit">{t('EditProfilePage.form.f9')}</button>
                    </form>
                </>
            )}
        </Formik>
    </>

    )
}
