import React, { useState } from 'react'
import { getCurrentUserData } from '../../../services/UserService';
import { Formik } from 'formik';
import * as Yup from "yup";
import { UpdatePassword } from '../../../services/AdminService';

export default function ChangePassword() {
    const userData = getCurrentUserData();
    const {email}=userData;
    const [passwordData,setPassword]=useState({
        currentpassword:"",
        newpassword:"",
        confirmpassword:""
    })

    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
   
    const LoginSchema = Yup.object({
        currentpassword: Yup.string().required("Old password is required*"),
        // .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        // ),
        newpassword: Yup.string().required('New password is required*')
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confirmpassword: Yup.string().required('Password is required*')
           .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
        
        
    });

    const handleSubmitForm=async(data)=>{
        setLoading(true)
        const apiData={
            old_password:data?.currentpassword,
            password:data?.newpassword,
            password_confirmation:data?.confirmpassword,
            type:"update"
        }
       let res=await UpdatePassword(apiData)
        setLoading(false)

        if(res?.status===200){
            
            setMessage('Password successfully updated.')
        }

        if(res?.response?.status===422){
            setMessage("Old password is incorrect.")
        }   
        setPassword({
        currentpassword:"",
        newpassword:"",
        confirmpassword:""
        })     
        
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
                <div className='input-block'>
                <span className="error">{message}</span>
            </div>
                <div className='submit-block'>
                    <button type="submit">Save</button>
                </div>
            </form>
            <div>{loading? "Loading..." : ""}</div>
        </div>
    </>
     )}
     </Formik>
  )
}
