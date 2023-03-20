import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    // const [error,setError]=useState("")

    const [signUpUserData, setSignUpUserData] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "mobile": "",
        "practicename": "",
        "practiceaddress": ""
    })
    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [mobileError, setMobileError] = useState("")
    const [practicenameError, setPracticenameError] = useState("")
    const [practiceaddressError, setPracticeaddressError] = useState("")



    const isValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpUserData?.email);
    const isvalidateNumber = /^[0-9\b]+$/;


    const handleChange = (key, value) => {
        const temp = ({ ...signUpUserData, [key]: value })
        temp?.firstname === "" ? setFirstnameError("This field is required*") : setFirstnameError("");
        temp?.lastname === "" ? setLastnameError("This field is required*") : setLastnameError("");
        !isValidateEmail ? setEmailError("Please enter valid email format*") : setEmailError("");
        !isvalidateNumber.test(temp?.mobile) ? setMobileError("Please enter Valid Number Format*") : setEmailError("");
        temp?.practicename === "" ? setPracticenameError("This field is required*") : setPracticenameError("");
        temp?.practiceaddress === "" ? setPracticeaddressError("This field is required*") : setPracticeaddressError("");


      
        if (temp?.firstname !== "" && temp?.lastname !== "" && isValidateEmail && isvalidateNumber.test(temp?.mobile)
            && temp?.practicename !== "" && temp?.practiceaddress !== "") {
            setFirstnameError("")
            setLastnameError("")
            setEmailError("")
            setMobileError("")
            setMobileError("")
            setPracticenameError("")
            setPracticeaddressError("")


        }
        setSignUpUserData({ ...signUpUserData, [key]: value })

    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        signUpUserData?.firstname === "" ? setFirstnameError("This field is required*") : setFirstnameError("");
        signUpUserData?.lastname === "" ? setLastnameError("This field is required*") : setLastnameError("");
        !isValidateEmail ? setEmailError("Please enter valid email format*") : setEmailError("");
        !isvalidateNumber.test(signUpUserData?.mobile) ? setMobileError("Please enter Valid Number Format*") : setEmailError("");
        signUpUserData?.practicename === "" ? setPracticenameError("This field is required*") : setPracticenameError("");
        signUpUserData?.practiceaddress === "" ? setPracticeaddressError("This field is required*") : setPracticeaddressError("");
        if (signUpUserData?.firstname !== "" && signUpUserData?.lastname !== "" && isValidateEmail && isvalidateNumber.test(signUpUserData?.mobile)
            && signUpUserData?.practicename !== "" && signUpUserData?.practiceaddress !== "") {
            setFirstnameError("")
            setLastnameError("")
            setEmailError("")
            setMobileError("")
            setMobileError("")
            setPracticenameError("")
            setPracticeaddressError("")
            navigate('/signupsuccess')

        }


    }


    return (
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
                    <form>
                        <div className='input-block'>
                            <input type="text" name='first-name' placeholder='First Name*' onChange={(e) => handleChange("firstname", e.target.value)} />
                        </div>
                        {firstnameError !== "" ? firstnameError : ""}
                        <div className='input-block'>
                            <input type="text" name='last-name' placeholder='Last Name*' onChange={(e) => handleChange("lastname", e.target.value)} />
                        </div>
                        {lastnameError !== "" ? lastnameError : ""}


                        <div className='input-block'>
                            <input type="email" name='email' placeholder='Email*' onChange={(e) => handleChange("email", e.target.value)} />
                        </div>
                        {emailError !== "" ? emailError : ""}


                        <div className='input-block'>
                            <input type="text" name='mobile' placeholder='Mobile*' onChange={(e) => handleChange("mobile", e.target.value)} maxLength="10" />
                        </div>
                        {mobileError !== "" ? mobileError : ""}

                        <div className='input-block'>
                            <input type="text" name='practice-name' placeholder='Practice name*' onChange={(e) => handleChange("practicename", e.target.value)} />
                        </div>
                        {practicenameError !== "" ? practicenameError : ""}



                        <div className='input-block'>
                            <input type="text" name='practice-address' placeholder='Practice Address*' onChange={(e) => handleChange("practiceaddress", e.target.value)} />
                        </div>
                        {practiceaddressError !== "" ? practiceaddressError : ""}

                        <div className='submit-block'>
                            <button type='submit' onClick={handleSubmitForm}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;