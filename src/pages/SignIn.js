
import React, { useContext,useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';
import {UserLogin } from '../services/UserService';
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Base64 } from 'js-base64';
import { UserContext } from '../Store/Context';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Formik } from 'formik';
import * as Yup from "yup";

const SignIn = () => {

    const user = useContext(UserContext);
    let navigate = useNavigate()
    const [loginData]=useState({
        "email":"",
        "password":""
    })
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] =useState(false)       
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

    const LoginSchema = Yup.object({        
        email: Yup.string().required(t('SignUpPage.validation.email.v1'))
         // eslint-disable-next-line no-useless-escape
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, t('SignUpPage.validation.email.v2')),
        password:Yup.string()
            .required("Password is required*")
            .matches(
                // eslint-disable-next-line no-useless-escape
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),    
    });


    const handleSubmitForm = (data) => {

        if (data?.email === "") {

            setError(t('SignInPage.error.e1'))
            return
        }
        
        setLoading(true)
      
        UserLogin(data)
            .then((response) => {
                if(response?.status===200){
                    let encodedemail = Base64.encode(response?.data?.email)
                    // let encodedemail = Base64.encode(data?.email)


                    setLoading(false)
                    navigate(`/twofactoreverification/${encodedemail}`, {
                        state: {
                          id: response?.data?.verification_code,
                          emailId: encodedemail,
                        },
                      });
                    // navigate(`/twofactoreverification/${encodedemail}/${response?.data?.verification_code}`)
                    console.log(response)

                }
                else {
                    setError(response)
                    setLoading(false)
                    setTimeout(() => {setError("")},2000);

                }
                //  else {
                //     let encodedemail = Base64.encode(response?.data?.email)
                //     // let encodedemail = Base64.encode(data?.email)


                //     setLoading(false)
                //     navigate(`/twofactoreverification/${encodedemail}`, {
                //         state: {
                //           id: response?.data?.verification_code,
                //           emailId: encodedemail,
                //         },
                //       });
                //     // navigate(`/twofactoreverification/${encodedemail}/${response?.data?.verification_code}`)
                //     console.log(response)
                // }
            })
            .catch((error) => {
               setError(error)
                return error
            })

    }

    if (user?.token) {
        return redirect('/dashboard');
    }
    return (
        <Formik
        initialValues={loginData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) => { handleSubmitForm(values) }}
    >
        {(props) => (
        <React.Fragment>
            <div className='page-wrapper'>
                <div className='signin-box'>
                    <div className='logo-block'>
                        <div className='logo'>
                            <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                        </div>
                    </div>
                    <div className='form-block'>
                        <div className='form-title text-center'>
                            <h1>{t('SignInPage.heading')}</h1>
                        </div>

                        <form onSubmit={props.handleSubmit} autoComplete="off">
                            <div className='input-block'>
                                <input type="email" placeholder={t('SignInPage.form.f1')}  name="email"
                                value={props?.values?.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={props.handleChange}/>
                                    <span className="error">{props?.errors?.email ? props?.errors?.email : ""}</span>

                            </div>
                            <div className='input-block'>
                                <input name="password" type={showPassword ? "text" : "password"} onChange={props.handleChange}
                                 value={props?.values?.password} placeholder={t('SignInPage.form.f7')} />
                                <button className='show-hide' type="button" onClick={()=>setShowPassword(!showPassword)}>
                                    {showPassword?
                                    <RemoveRedEyeOutlinedIcon/>:
                                    <VisibilityOffOutlinedIcon/>
}
                                </button>
                                <span className="error">{props?.errors?.password ? props?.errors?.password : ""}</span>


                            </div>
                            <div className='forgot-pw-block'>
                                <Link to='/forgetpassword'>{t('SignInPage.form.f11')}</Link>
                            </div>
                        <div className='LoginError'>{error && error}</div>

                            <div className='submit-block'>
                                <button type="submit">{t('SignInPage.form.f2')}</button>
                            </div>
                            {loading ? <b>{t('SignInPage.loader.l1')}</b> : ""}
                            <div className='not-user-block text-center'>
                                <span>{t('SignInPage.form.f8')}</span>
                                <Link to='/signup'>{t('SignInPage.form.f9')}</Link>
                            </div>
                            <div className='privacy-policy-text text-center'>
                                <a href={{}}>{t('SignInPage.form.f10')}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
         )}
         </Formik>
    )
}

export default SignIn;