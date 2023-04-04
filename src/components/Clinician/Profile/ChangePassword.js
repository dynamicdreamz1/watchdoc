import React, { useState } from 'react'
import { getCurrentUserData, UpdateUserProfile } from '../../../services/UserService';
import { Formik } from 'formik';
import * as Yup from "yup";

export default function ChangePassword() {
    const userData = getCurrentUserData();
    const {email}=userData;
    const [passwordData,setPasswordData]=useState({
        currentpassword:"",
        newpassword:"",
        confirmpassword:""
    })
    const LoginSchema = Yup.object({
        currentpassword: Yup.string().required("Password is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        newpassword: Yup.string().required('Password is required*'),
        confirmpassword: Yup.string().required('Password is required*')
           .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
        
        
    });

    const handleSubmitForm=(data)=>{
        UpdateUserProfile(data)
    }
  return (
    <Formik 
        initialValues={passwordData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) =>
        { handleSubmitForm(values)}} 
    > 
    {(props) => (
    <>
        <div className='change-password-form'>
            <div className='title-block'>
                <h2>Change your password</h2>
                <span>You are about to change the password for your WatchDoc account, <strong>{email}</strong></span>
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className='input-block'>
                    <label>Current password</label>
                    <input type="password" name='currentpassword'  onChange={props.handleChange}  placeholder='Enter current password' value={props?.values?.currentpassword} ></input>
                    <span className="error">{props.errors.currentpassword?props.errors.currentpassword:""}</span>
                </div>
                <div className='input-block'>
                    <label>New password</label>
                    <input type="password" name='newpassword'   onChange={props.handleChange} placeholder='Enter a new password' value={props?.values?.newpassword}></input>
                    <span className="error">{props.errors.newpassword?props.errors.newpassword:""}</span>
                </div>
                <div className='input-block'>
                    <label>Confirm new password</label>
                    <input type="password" name='confirmpassword'  onChange={props.handleChange} placeholder='Confirm your new password' value={props?.values?.confirmpassword}></input>
                    <span className="error">{props.errors.confirmpassword?props.errors.confirmpassword:""}</span>
                </div>
                <div className='submit-block'>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </>
     )}
     </Formik>
  )
}
