import { MenuItem, Select } from '@mui/material';
import React,{useState} from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../../Utility/countryCode';
import { Formik } from 'formik';
import * as Yup from "yup";
import { t } from 'i18next';

export default function EditTwoFactor() {

  const [countryCode, setcountryCode] = useState('+91');
  const [editClinicianProfileData, setEditClinicianProfileData] = useState({
    "number":""
})

 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const LoginSchema = Yup.object({       
        number: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),
        
    });
   
  const handleChange = (event) => {
    setcountryCode(event.target.value);
  };

  const handleSubmitForm=(value)=>{
    setEditClinicianProfileData(value)
  }

  return (
    <Formik 
        initialValues={editClinicianProfileData}
        enableReinitialize={true}
        validationSchema={LoginSchema}
        onSubmit={(values) =>
        { handleSubmitForm(values)}} 
    > 
    {(props) => (
    <>
        <div className='two-factor-form'>
            <div className='title-block'>
                <h2>Two-factor authentication</h2>
                <p>Enhanced security ensures no logins can be made without first being approved using one of your personal devices.</p>
            </div>
            <form onSubmit={props?.handleSubmit} autoComplete="off">
              <div className='input-block'>
                <label id="country-code">Enter new phone number</label>
                <div className='inputs-wrapper'>
                  <Select
                    labelId="country-code"
                    value={countryCode}
                    label="Age"
                    onChange={handleChange}
                  >
                    {allTimeZone.map((data, i) => (
                      <MenuItem key={i} value={data.MobileCode}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                    ))}
                  </Select>
                  <input type="text" name="number" value={props?.values?.number} onChange={props?.handleChange} placeholder='Phone Number'></input>
                  <span className="error"> {props.errors.number ? props.errors.number : ""}</span>
                </div>
              </div>
              <div className='text-block'>
                <p>You are about to change your mobile number. We will send a code to your new number to verify this change.</p>
              </div>
              <div className='submit-block'>
                <button type='submit'>Send Code</button>
              </div>
            </form>
        </div>
    </>
    )}
    </Formik>
  )
}
