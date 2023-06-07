import React, { useEffect, useState } from 'react'
import { ProfileCreation } from '../../../services/UserService';
import '../../../css/CreateProfile.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StoreCookie } from '../../../Utility/sessionStore';
import { MetaFormeting } from '../../../Utility/functions';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';


const CreateProfile = () => {
    const [createnewUser, setCreateNewUser] = useState({
        "firstname": "",
        "lastname": "",
        "preferredFirstName": "",
        "dob": "",
        "sex": "",
        "weight": "",
        "height": "",

    })
    const [errorN, setErrorN] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate();


    const LoginSchema = Yup.object({
        firstname: Yup.string()
          .required("This field is required*")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        preferredFirstName: Yup.string()
        .required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        lastname: Yup.string()
          .required("This field is required*")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        dob: Yup.date().required("This field is required*"),
        sex: Yup.string().required("This field is required*"),
        weight: Yup.string().required("This field is required*"),
        height: Yup.string().required("This field is required*"),
      });

    const handleSubmit = (datas) => {
        console.log("1111-datas",datas)
        const formData=new FormData();
        formData.append("first_name", datas?.firstname);
        formData.append("preferred_first_name",datas?.preferredFirstName);
        formData.append("last_name", datas?.lastname);
        formData.append("dob", datas?.dob);
        formData.append("sex", datas?.sex);
        formData.append("weight",datas?.weight);
        formData.append("height",datas?.height);

            setLoading(true)
            ProfileCreation(formData)
                .then((res) => {
                    if (res?.response?.status === 401) {
                        setLoading(false)
                        setErrorN(t('CreateProfilePage.error.e8'))
                    }
                    // let Fname=(res.data.meta_data[0].meta_value)
                    const { first_name } = MetaFormeting(res.data)
                    StoreCookie.setItem('name', first_name)
                    let profileCheck = (res.data.profile_created)
                    StoreCookie.setItem('profileCheck', profileCheck)
                    StoreCookie.setItem("user_details", res?.data);
                    navigate('/contactdetails')
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    if (error.response.status === 422) {
                        setErrorN(t('CreateProfilePage.error.e7'))
                    }
                    else {
                        setErrorN(error)

                    }

                })
        
    }

    return (
        <Formik
            initialValues={createnewUser}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => { handleSubmit(values) }}
        >
            {(props) => (

                <>
                    <div className="title-block">
                        <h4>{t('CreateProfilePage.register.r1')}</h4>
                    </div>
                    <div className='errorMessage'>{errorN}</div>

                    <form onSubmit={props.handleSubmit} autoComplete="off">
                        <div className='input-block'>
                            <label htmlFor="exampleInputFirstName" >{t('CreateProfilePage.form.f1')}</label>
                            <input type="text" name="firstname" placeholder={t('CreateProfilePage.form.f13')} value={props?.values?.firstname} id="exampleInputFirstName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.firstname ? props?.errors?.firstname : ""}</span>
                        </div>

                        <div className='input-block'>
                            <label htmlFor="exampleInputPrefferedFirstName" >{t('CreateProfilePage.form.f17')}</label>
                            <input type="text" name="preferredFirstName" placeholder={t('CreateProfilePage.form.f18')} value={props?.values?.preferredFirstName} id="exampleInputPrefferedFirstName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.preferredFirstName ? props?.errors?.preferredFirstName : ""}</span>
                        </div>

                        <div className='input-block'>
                            <label htmlFor="exampleInputLastName" >{t('CreateProfilePage.form.f2')}</label>
                            <input type="text" name="lastname" placeholder={t('CreateProfilePage.form.f14')} value={props?.values?.lastName} id="exampleInputLastName" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.lastname ? props?.errors?.lastname : ""}</span>
                        </div>

                        <div className='input-block'>
                            <label htmlFor="exampleInputDOB" >{t('CreateProfilePage.form.f3')}</label>
                            <input type="date" name="dob" value={props?.values?.dob} id="exampleInputDOB" onChange={props?.handleChange} />
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
                            <label htmlFor="exampleInputWeight" >{t('CreateProfilePage.form.f7')}</label>
                            <input type="text" name="weight" placeholder={t('CreateProfilePage.form.f15')} value={props?.values?.weight} id="exampleInputWeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.weight ? props?.errors?.weight : ""}</span>

                        </div>

                        <div className='input-block'>
                            <label htmlFor="exampleInputHeight" >{t('CreateProfilePage.form.f8')}</label>
                            <input type="text" name="height" placeholder={t('CreateProfilePage.form.f16')} value={props?.values?.height} id="exampleInputHeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.height ? props?.errors?.height : ""}</span>

                        </div>

                        <button type="submit">{t('CreateProfilePage.form.f9')}</button>
                        {loading ? <b>{t('CreateProfilePage.loader.l1')}</b> : ""}
                    </form>
                </>
            )}
        </Formik>
    )
}

export default CreateProfile;
