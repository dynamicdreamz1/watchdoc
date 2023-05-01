
import React, {useState} from 'react'
import '../css/Register.css'
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from "yup";
import { ForgotUserPassword } from '../services/UserService';
import { useLocation} from 'react-router-dom';

const NewPassword = () => {
    const location = useLocation();
    const {email} = location?.state;
    const [loginData,setLoginData]=useState({
        "password":"",       
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()

  

    const LoginSchema = Yup.object({        
        password: Yup.string().required('New password is required*')
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ), 

    });

    const handleSubmitForm =async (data) => {
      const result={
        email:email,
        new_password:data?.password
      }
      const res=await ForgotUserPassword(result)
      setLoading(false)
      if(res?.status===200){
       setError(res?.data?.message)
       setLoginData({"password":""})
      }
     
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
                            <h1>Enter New password</h1>
                        </div>

                        <form onSubmit={props.handleSubmit} autoComplete="off">
                            <div className='input-block'>
                                <input type="email" placeholder={t('SignInPage.form.f1')}  name="password"
                                value={props?.values?.password} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={props.handleChange}/>
                                    <span className="error">{props?.errors?.password ? props?.errors?.password : ""}</span>

                            </div>
                           
                         
                        <div className='LoginError'>{error && error}</div>

                            <div className='submit-block'>
                                <button type="submit">Submit</button>
                            </div>
                            {loading ? <b>{t('SignInPage.loader.l1')}</b> : ""}                   
                        </form>
                    </div>
                </div>
            </div>
          
        </React.Fragment>
         )}
         </Formik>
    )
}

export default NewPassword;