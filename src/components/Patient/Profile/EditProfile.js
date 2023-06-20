import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCurrentUserData, ProfileCreation, ProfileUpdate } from '../../../services/UserService'
import { UserContext } from '../../../Store/Context'
import { MetaFormeting } from '../../../Utility/functions'
import { StoreCookie } from '../../../Utility/sessionStore'
import { toast, ToastContainer } from 'react-toastify'
import {Field, Formik } from 'formik';
import * as Yup from 'yup';

export const EditProfile = () => {
    const { currentUserData, setCurrentUserData } = useContext(UserContext);
    const userData = getCurrentUserData();
    const { first_name, last_name, dob, sex, weight, height,profile_pic } = MetaFormeting(userData);
    const [ imageUrl, setImgSrc ] = useState((profile_pic===null ||profile_pic===undefined )?"/public/images/user-picture-placeholder.png":profile_pic);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const [updateUser] = useState({
        "firstname": first_name,
        "lastname": last_name,
        // "preferredFirstName": preferred_first_name,
        "dob": dob,
        "email": userData?.email,
        "sex": sex,
        "weight": weight,
        "height": height,
        "profile_pic":imageUrl,
        "contact_number" :userData?.contact_number
    })

    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    const BMI = (weight / Math.pow((updateUser?.height), 2))
    const roundedBMI = Math.round(BMI * 100) / 100


    const handleImages = (files) => {
        setImgSrc(files)
    }

    const handleSubmit = (value) => {
        setLoading(true)
        const formData=new FormData();
        formData.append("first_name", value?.firstname);
        formData.append("last_name", value?.lastname);
        formData.append("dob", value?.dob);
        formData.append("sex", value?.sex);
        formData.append("weight",value?.weight);
        formData.append("height",value?.height);
        formData.append("email",value?.email);
        formData.append("contact_number",value?.contact_number);
        if(typeof imageUrl == "object" ){
            formData.append("profile_pic",imageUrl);
        }
        ProfileUpdate(formData)
            .then((res) => { 
                console.log("res",res);  
                if (res.status === 200) {
                    StoreCookie.setItem("user_details", res?.data.data);
                    setCurrentUserData({ ...currentUserData, userData: res?.data })
                    toast.success(res.data.message, {
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
                }    
            })
            .catch((error) => {
                const key = Object.keys(error.response.data.error)[0];
                setLoading(false)
                if (error.response.status === 422) {
                    toast.error(error.response.data.error[key][0], {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                    });
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
        dob: Yup.date().required("This field is required*"),
        sex: Yup.string().required("This field is required*"),
        weight: Yup.string().required("This field is required*"),
        height: Yup.string().required("This field is required*"),
        email: Yup.string().required("This field is required*")
        // eslint-disable-next-line no-useless-escape
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        contact_number: Yup.string().required(t('SignUpPage.validation.common1'))
        .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
        .min(10, t('SignUpPage.validation.mobile.short'))
        .max(10, t('SignUpPage.validation.mobile.long')),
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
                    <div className='input-block update-profile'>
                <div className='image-block'>
                    <img src={typeof imageUrl==="object" ?URL.createObjectURL(imageUrl):imageUrl} alt="" />
                </div>
                <div>
                    <input id="file" name="profile_pic" type="file" onChange={(e)=>handleImages(e.target.files[0])}/>
                </div>
            </div>
                        <div className='SuccessMessage'></div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputFirstName" >{t('EditProfilePage.form.f1')}</label>
                            <input type="text" name="firstname" placeholder={t('EditProfilePage.form.f13')} value={props?.values?.firstname}  id="exampleInputFirstName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.firstname ? props?.errors?.firstname : ""}</span>
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
                            <label htmlFor="exampleInputEmail" >{t('EditProfilePage.form.f21')}</label>
                            <input type="text" name="email" placeholder={t('EditProfilePage.form.f22')} value={props?.values?.email} id="exampleInputHeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.email ? props?.errors?.email : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputEmail" >{t('EditProfilePage.form.f23')}</label>
                            <input type="text" name="contact_number" placeholder={t('EditProfilePage.form.f24')} value={props?.values?.contact_number} id="exampleInputHeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.contact_number ? props?.errors?.contact_number : ""}</span>
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
