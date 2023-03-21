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
    const  regexText = /^[a-zA-Z]*$/;

    const handleChange = (key, value) => {
        const temp = ({ ...signUpUserData, [key]: value })
        let withoutSpace = temp?.mobile.replace(/ /g,"");
let length = withoutSpace.length;
        isvalidateNumber.test(temp?.mobile)&& length===10?setMobileError(""):setMobileError("Please enter Valid Number Format*")
        temp?.firstname === "" || !regexText.test(temp?.firstname) ? setFirstnameError("This field is required*") : setFirstnameError("");
        temp?.lastname === "" ? setLastnameError("This field is required*") : setLastnameError("");
        !isValidateEmail ? setEmailError("Please enter valid email format*") : setEmailError("");
        !isvalidateNumber.test(temp?.mobile) ? setMobileError("Please enter Valid Number Format*") : setEmailError("");
        temp?.practicename === "" ? setPracticenameError("This field is required*") : setPracticenameError("");
        temp?.practiceaddress === "" ? setPracticeaddressError("This field is required*") : setPracticeaddressError("");
        temp?.firstname !== "" && regexText.test(temp?.firstname)?setFirstnameError(""):setFirstnameError("This field is required*")
        temp?.lastname !== "" && regexText.test(temp?.lastname)?setLastnameError(""):setLastnameError("This field is required*")
        temp?.practicename !== "" && regexText.test(temp?.practicename)?setPracticenameError(""):setPracticenameError("This field is required*")
        temp?.practiceaddress !== "" && regexText.test(temp?.practiceaddress)?setPracticeaddressError(""):setPracticeaddressError("This field is required*")

      
        if (temp?.firstname !== "" &&
        regexText.test(temp?.firstname) &&
        regexText.test(temp?.lastname) 
        & regexText.test(temp?.practicename)
        && regexText.test(temp?.practiceaddress)&&
         temp?.lastname !== "" && isValidateEmail && isvalidateNumber.test(temp?.mobile)
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
        let withoutSpace = signUpUserData?.mobile.replace(/ /g,"");
let length = withoutSpace.length;
        isvalidateNumber.test(signUpUserData?.mobile)&& length===10?setMobileError(""):setMobileError("Please enter Valid Number Format*")
        signUpUserData?.firstname === ""? setFirstnameError("This field is required*") : setFirstnameError("");
        signUpUserData?.lastname === "" ? setLastnameError("This field is required*") : setLastnameError("");
        !isValidateEmail ? setEmailError("Please enter valid email format*") : setEmailError("");
        !isvalidateNumber.test(signUpUserData?.mobile) ? setMobileError("Please enter Valid Number Format*") : setEmailError("");
        signUpUserData?.practicename === "" ? setPracticenameError("This field is required*") : setPracticenameError("");
        signUpUserData?.practiceaddress === "" ? setPracticeaddressError("This field is required*") : setPracticeaddressError("");
        signUpUserData?.firstname !== "" && regexText.test(signUpUserData?.firstname)?setFirstnameError(""):setFirstnameError("This field is required*")
        signUpUserData?.lastname !== "" && regexText.test(signUpUserData?.lastname)?setLastnameError(""):setLastnameError("This field is required*")
        signUpUserData?.practicename !== "" && regexText.test(signUpUserData?.practicename)?setPracticenameError(""):setPracticenameError("This field is required*")
        signUpUserData?.practiceaddress !== "" && regexText.test(signUpUserData?.practiceaddress)?setPracticeaddressError(""):setPracticeaddressError("This field is required*")
        if (signUpUserData?.firstname !== "" && 
        (isvalidateNumber.test(signUpUserData?.mobile) && length===10)&&
        regexText.test(signUpUserData?.firstname) &&
        regexText.test(signUpUserData?.lastname) 
        & regexText.test(signUpUserData?.practicename)
        && regexText.test(signUpUserData?.practiceaddress)
        && signUpUserData?.lastname !== "" && isValidateEmail && isvalidateNumber.test(signUpUserData?.mobile)
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
                            <span className="error">{firstnameError !== "" ? firstnameError : ""}</span>
                        </div>
                        
                        <div className='input-block'>
                            <input type="text" name='last-name' placeholder='Last Name*' onChange={(e) => handleChange("lastname", e.target.value)} />
                            <span className="error"> {lastnameError !== "" ? lastnameError : ""}</span>

                        </div>
                       

                        <div className='input-block'>
                            <input type="email" name='email' placeholder='Email*' onChange={(e) => handleChange("email", e.target.value)} />
                            <span className="error">  {emailError !== "" ? emailError : ""}</span>
                        </div>
                       


                        <div className='input-block'>
                            <input type="text" name='mobile' placeholder='Mobile*' onChange={(e) => handleChange("mobile", e.target.value)}  maxLength="10" />
                            <span className="error"> {mobileError !== "" ? mobileError : ""}</span>
                        </div>
                        

                        <div className='input-block'>
                            <input type="text" name='practice-name' placeholder='Practice name*' onChange={(e) => handleChange("practicename", e.target.value)} />
                            <span className="error">{practicenameError !== "" ? practicenameError : ""}</span>
                        </div>
                        



                        <div className='input-block'>
                            <input type="text" name='practice-address' placeholder='Practice Address*' onChange={(e) => handleChange("practiceaddress", e.target.value)} />
                            <span className="error">{practiceaddressError !== "" ? practiceaddressError : ""}</span>
                        </div>
                        

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