import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";

const SignUp = () => {
    const navigate = useNavigate();

    const [signUpUserData, setSignUpUserData] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "mobile": "",
        "practicename": "",
        "practiceaddress": ""
    })
    

    const LoginSchema = Yup.object({
        firstname: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        lastname: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup.string().required("Email Is Required")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        mobile: Yup.string().required("This field is required*")
        .matches(/^[0-9\b]+$/, "Please Enter valid Number"),
        practicename: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        practiceaddress: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      });

 

    
    const handleSubmitForm = (data) => {
        setSignUpUserData({...data})
        navigate("/signupsuccess")
    }


    return (
        <Formik 
        initialValues={signUpUserData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) =>
        { handleSubmitForm(values)}} 
> 
{(props) => (
        <>

            <div className='page-wrapper signup-page-wrapper'>
                <div className='form-block'>
                    <div className='logo-block'>
                        <img src='/images/WatchDoc-LOGO.svg' alt='WatchDoc Logo' />
                    </div>
                    <div className='text-block'>
                        <h1>Create your free clinician listing</h1>
                        <p>Create a free profile on WatchDoc and make it easy for your<br></br> patients to find and connect with you via the WatchDoc app.</p>
                    </div>
                    <form onSubmit={props.handleSubmit}>
                        <div className='input-block'>
                            <input type="text" name='firstname' placeholder='First Name*'  onChange={props.handleChange} value={props.values.firstname}/>
                            <span className="error">{props.errors.firstname?props.errors.firstname:""}</span>
                        </div>
                        
                        <div className='input-block'>
                            <input type="text" name='lastname' placeholder='Last Name*'  onChange={props.handleChange} value={props.values.lastname} />
                            <span className="error"> {props.errors.lastname?props.errors.lastname:""}</span>

                        </div>
                       

                        <div className='input-block'>
                            <input type="email" name='email' placeholder='Email*'  onChange={props.handleChange} value={props.values.email}/>
                            <span className="error">  {props.errors.email?props.errors.email:""}</span>
                        </div>
                       


                        <div className='input-block'>
                            <input type="text" name='mobile' placeholder='Mobile*'  onChange={props.handleChange}  maxLength="10" value={props.values.mobile}/>
                            <span className="error"> {props.errors.mobile?props.errors.mobile:""}</span>
                        </div>
                        

                        <div className='input-block'>
                            <input type="text" name='practicename' placeholder='Practice name*'  onChange={props.handleChange} value={props.values.practicename}/>
                            <span className="error">{props.errors.practicename?props.errors.practicename:""}</span>
                        </div>
                        



                        <div className='input-block'>
                            <input type="text" name='practiceaddress' placeholder='Practice Address*'  onChange={props.handleChange} value={props.values.practiceaddress} />
                            <span className="error">{props.errors.practiceaddress?props.errors.practiceaddress:""}</span>
                        </div>
                        

                        <div className='submit-block'>
                            <button type='submit' >Sign Up</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>

 )}
      </Formik>
    )
}

export default SignUp;