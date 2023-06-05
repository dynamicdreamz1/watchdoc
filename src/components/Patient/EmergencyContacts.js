import { Formik } from 'formik'
import React,{useState} from 'react'
import { t } from 'i18next';
import * as Yup from "yup";
import { getCurrentUserData } from '../../services/UserService';
import { MetaFormeting } from '../../Utility/functions';
import { AddEmergencyContact } from '../../services/PatientsService';



const EmergencyContacts = () => {
  const userData = getCurrentUserData();
    const metaData=  MetaFormeting(userData);
    const {first_name,last_name}=metaData
  const [initialData]=useState({ "emergencyNumber": "",})
  const [message,setmessage]=useState("")

console.log("1111-userData",userData)


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const LoginSchema = Yup.object({       
      emergencyNumber: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),
        
    });



  const handleSubmitForm = async(data) => {
    console.log("1111-data",data)
    const formData=new FormData();
    formData.append("first_name",first_name)
    formData.append("last_name",last_name)
    formData.append("mobile_number",data?.emergencyNumber)
    formData.append("email_address",userData?.email)
    formData.append("action","insert")


    const res= await AddEmergencyContact(formData)
    if(res?.status===200){
    setmessage(res?.data?.message)
    }

  }




  return (
    <Formik 
    initialValues={initialData}
    enableReinitialize={true}
    validationSchema={LoginSchema}
    onSubmit={(values) =>
    { handleSubmitForm(values)}} 
> 
{(props) => (
<>
    <div className='my-profile-form'>
        <div className='title-block'>
            <h2>Profile</h2>
        </div>
        {/* <div>{message}</div> */}
        <form onSubmit={props.handleSubmit}>
       
        <div className='input-block'>
            <div className='inputs-wrapper'>
                <div className='input-block'>
                <label>Emergency-Contacts</label>
                    <input type="text" name='emergencyNumber'onChange={props?.handleChange} placeholder='Emergency Number*'  value={props?.values?.emergencyNumber} ></input>
                    <span className="error">{props.errors.emergencyNumber?props.errors.emergencyNumber:""}</span>
                <span className="error">{message? message : ""}</span>

                </div>
        
            </div>
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

export default EmergencyContacts