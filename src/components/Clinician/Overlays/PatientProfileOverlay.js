
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { MetaFormeting } from '../../../Utility/functions';

export const PatientProfileOverlay = ({ handleClose, data }) => {
    const { first_name, last_name, dob, sex, height } = MetaFormeting(data)

    const {email,contact_number}=(data);
    
    const { t } = useTranslation();
    const [userData] = useState({
        "firstName": first_name || data?.first_name,
        "email": email,
        "lastName": last_name || data?.last_name,
        "dob": dob,
        "sex": sex || data?.gender,
        "height": height,
        "number": contact_number
    })

    const handleSubmitForm = (data) => {
        handleClose()
    }






    return (
        <Formik
            initialValues={userData}
            enableReinitialize={true}
            validationSchema=""
            onSubmit={(values) => { handleSubmitForm(values) }}
        >
            {(props) => (
                <>
                    <div className='dialog-title'>
                        <h2>Profile</h2>
                    </div>
                    <form id='main_form' onSubmit={props.handleSubmit}>
                        <div className='input-block'>
                            <label htmlFor="exampleInputFirstName" >First name</label>
                            <input type="text" name="firstName" placeholder={t('EditProfilePage.form.f13')} value={props?.values?.firstName} id="exampleInputFirstName" onChange={props?.handleChange} />
                        </div>
                        {/* <div className='input-block'>
                    <label htmlFor="exampleInputPreferredFirstName" >{t('EditProfilePage.form.f17')}</label>
                    <input type="text"  name="preferredFirstName" placeholder={t('EditProfilePage.form.f18')} value={props?.values?.preferredFirstName} id="exampleInputPreferredFirstName" onChange={props?.handleChange} />
                </div> */}
                        <div className='input-block'>
                            <label htmlFor="exampleInputLastName" >Last name</label>
                            <input type="text" name="lastName" placeholder={t('EditProfilePage.form.f14')} value={props?.values?.lastName} id="exampleInputLastName" onChange={props?.handleChange} />
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputDOB" >Date of birth</label>
                            <input type="date" name="dob" value={props?.values?.dob} id="exampleInputDOB" onChange={props?.handleChange} />
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputSex" >{t('EditProfilePage.form.f4')}</label>
                            <div className='radio-buttons'>
                                <div className='radio-button'>
                                    <input checked={props?.values?.sex === "male"} type="radio" id="male" name="sex" value="male" onChange={props?.handleChange} />
                                    <label htmlFor="male">{t('EditProfilePage.form.f10')}</label>
                                </div>
                                <div className='radio-button'>
                                    <input checked={props?.values?.sex === "female"} type="radio" id="female" name="sex" value="female" onChange={props?.handleChange} />
                                    <label htmlFor="female">{t('EditProfilePage.form.f11')}</label>
                                </div>
                                <div className='radio-button'>
                                    <input checked={props?.values?.sex === "other"} type="radio" id="other" name="sex" value="other" onChange={props?.handleChange} />
                                    <label htmlFor="other">{t('EditProfilePage.form.f12')}</label>
                                </div>
                            </div>
                        </div>
                        {/* <div className='input-block'>
                    <label htmlFor="exampleInputWeight" >{t('EditProfilePage.form.f7')}</label>
                    <input type="text"  name="weight"  placeholder={t('EditProfilePage.form.f15')} value={props?.values?.weight} id="exampleInputWeight" onChange={props?.handleChange} />
                </div> */}
                        <div className='input-block'>
                            <label htmlFor="exampleInputHeight" >Height (cm)</label>
                            <input type="text" name="height" placeholder={t('EditProfilePage.form.f16')} value={props?.values?.height} id="exampleInputHeight" onChange={props?.handleChange} />
                        </div>
                        <div className='input-block'>
                            <label>Email address</label>
                            <input type="email" name='email' value={props?.values?.email} onChange={props?.handleChange} />
                        </div>
                        <div className='input-block country-code'>
                            <label id="country-code">Contact number</label>
                            <div className='inputs-wrapper'>
                                <input type="text" name="number" value={props?.values?.number} onChange={props?.handleChange}></input>
                            </div>
                        </div>



                        <button type="submit">Update Profile</button>

                    </form>
                </>

            )}
        </Formik>

    )
}
