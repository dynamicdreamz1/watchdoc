import React, { useContext, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/UserService';
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Base64 } from 'js-base64';
import { UserContext } from '../Store/Context'; 
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignIn = () => {

    const user = useContext(UserContext);


    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {
            setError(t('RegisterPage.error.e1'))
            return
        }
        const data = {
            email: email
        }
        setLoading(true)

        RegisterUser(data)
            .then((response) => {
                if (typeof response === "string") {
                    setError(response)
                    setLoading(false)

                } else {
                    let encodedemail = Base64.encode(response?.data?.data?.email)

                    setLoading(false)
                    setEmail("")
                    navigate(`/verification/${encodedemail}`)
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error);
                return error
            })

    }

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    if (user?.token) {
        return redirect('/dashboard');
    }

    return (
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
                            <h1>Sign in</h1>
                        </div>
                        <div className='LoginError'>{error && error}</div>

                        <form>
                            <div className='input-block'>
                                <input type="email" placeholder={t('RegisterPage.form.f1')} 
                                value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='input-block'>
                                <input type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                } />
                            </div>
                            <div className='forgot-pw-block'>
                                <a href={{}}>Forgot Password</a>
                            </div>
                            <div className='submit-block'>
                                <button type="submit" onClick={(e) => handleSubmit(e)}>{t('RegisterPage.form.f2')}</button>
                            </div>
                            {loading ? <b>{t('RegisterPage.loader.l1')}</b> : ""}
                            <div className='not-user-block text-center'>
                                <span>Not with us?</span>
                                <a href={{}}>Sign up now</a>
                            </div>
                            <div className='privacy-policy-text text-center'>
                                <a href={{}}>View Privacy Policy</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default SignIn;
