import React,{useContext, useState} from 'react'
import { Field, Formik } from 'formik';
import * as Yup from "yup";
import { MetaFormeting } from '../../../Utility/functions';
import {getCurrentUserData } from '../../../services/UserService';
import { StoreCookie } from '../../../Utility/sessionStore';
import { UserContext } from '../../../Store/Context';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { UpdateClinicianProfile } from '../../../services/ClinicianService';

export default function MyProfile() {
    const { t } = useTranslation()    
    const { currentUserData, setCurrentUserData } = useContext(UserContext);
    const userData = getCurrentUserData();
    const metaData=  MetaFormeting(userData);
    const {first_name,last_name,profile_pic,practice_address,practice_name,dob,sex,weight,height}=metaData
    const [ imageUrl, setImgSrc ] = useState((profile_pic===null ||profile_pic===undefined )?"/images/user-picture-placeholder.png":profile_pic);
    const [loading,setLoading]=useState(false)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const [editClinicianProfileData, setEditClinicianProfileData] = useState({
        "preferredFirstName":"Dr",
        "first_name": first_name,
        "last_name": last_name,
        "email": userData?.email,
        "practice_name": practice_name || "",
        "practice_address": practice_address || "",
        "profile_pic":imageUrl,
        "dob": dob,
        "sex": sex,
        "weight": weight,
        "height": height,
        "contact_number" : userData?.contact_number
    })
    const LoginSchema = Yup.object({
        first_name: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        last_name: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup.string().required("This field is required*")
        // eslint-disable-next-line no-useless-escape
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        sex: Yup.string().required("This field is required*"),
        dob: Yup.string().required("This field is required*"),
        contact_number: Yup.string().required(t('SignUpPage.validation.common1'))
        .matches(phoneRegExp, t("SignUpPage.validation.mobile.v1"))
        .min(10, t("SignUpPage.validation.mobile.short"))
        .max(10, t("SignUpPage.validation.mobile.long")),
        practice_name: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        practice_address: Yup.string().required("This field is required*"),
        weight: Yup.string()
        .required("This field is required*")
        .matches(/^[a-zA-Z0-9\s.]+$/, "Only alphabets, numbers, and periods are allowed for this field"),      
         height: Yup.string()
        .required("This field is required*")
        .matches(/^[a-zA-Z0-9\s.]+$/, "Only alphabets, numbers, and periods are allowed for this field")

    });

    const handleImages = (files) => {
        setImgSrc(files)
    }
    const handleSubmitForm = async(data) => {
        setLoading(true)
        const formData = new FormData();
        formData.append("first_name", data?.first_name);
        formData.append("last_name", data?.last_name);
        formData.append("email", data.email);
        formData.append("practice_name", data?.practice_name);
        formData.append("practice_address", data?.practice_address);
        formData.append("sex", data?.sex);
        formData.append("dob", data?.dob);
        formData.append("preferredFirstName", "Dr");
        formData.append("contact_number", data?.contact_number);
        formData.append("height", data?.height);
        formData.append("weight", data?.weight);
        if(typeof imageUrl == "object" ){
            formData.append("profile_pic",imageUrl);
        }
        
       const updatedUserData=await UpdateClinicianProfile(formData)
       try {
        setLoading(false)
       if(updatedUserData?.status===200){
          toast.success(updatedUserData?.data?.message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        setCurrentUserData({ ...currentUserData, userData: updatedUserData?.data?.data })
        StoreCookie.setItem("user_details", JSON.stringify(updatedUserData?.data?.data));
        const tempMetaFormat=  MetaFormeting(updatedUserData?.data?.data);
         setEditClinicianProfileData({
         "first_name": tempMetaFormat?.first_name,
         "last_name": tempMetaFormat?.last_name,
         "email": updatedUserData?.data?.data?.email,
         "practice_name": tempMetaFormat?.practice_name,
         "practice_address": tempMetaFormat?.practice_address,
         "sex": tempMetaFormat?.sex,
         "dob" : tempMetaFormat?.dob,
         "contact_number" : tempMetaFormat.Contact_number,
         "preferredFirstName" : tempMetaFormat?.preferred_first_name,
         "height" :tempMetaFormat.height,
         "weight" : tempMetaFormat.weight

         })
       }
       else{
        toast.error('email already exist', {
            position: 'top-right',
            autoClose: 3000,
          });
       }
       } catch (error) {
        toast.error('error.', {
            position: 'top-right',
            autoClose: 3000,
          });
       } 
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
        <div className='my-profile-form'>
            <div className='title-block'>
                <h2>Profile</h2>
            </div>
            {/* <div>{message}</div> */}
            <form onSubmit={props.handleSubmit}>
            <div className='input-block update-profile'>
                <div className='image-block'>
                    <img src={typeof imageUrl==="object" ?URL.createObjectURL(imageUrl):imageUrl} alt="" />
                </div>
                <div>
                    <input id="file" name="profile_pic" type="file" onChange={(e)=>handleImages(e.target.files[0])}/>
                </div>
            </div>
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        <input type="text" name='title' placeholder='Title*' disabled  defaultValue={props?.values?.preferredFirstName}/>
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='first_name' placeholder='First Name*'  onChange={props?.handleChange} value={props?.values?.first_name}/>
                        <span className="error">{props?.errors?.first_name?props?.errors?.first_name:""}</span>
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='last_name' placeholder='Last Name*'  onChange={props?.handleChange} value={props?.values.last_name} />
                            <span className="error"> {props?.errors?.last_name?props?.errors?.last_name:""}</span>
                    </div>
                </div>
            </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputDOB" >{t('EditProfilePage.form.f3')}</label>
                            <input type="date" name="dob" value={props?.values?.dob} id="exampleInputDOB" onChange={props?.handleChange}/>
                            <span className="error"> {props?.errors?.dob ? props?.errors?.dob : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputSex" >{t('CreateProfilePage.form.f4')}</label>
                            <div className='radio-buttons'>
                                <div className='radio-button'>
                                    <Field type="radio" id="male" name="sex" value="male" />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className='radio-button'>
                                    <Field type="radio" id="female" name="sex" value="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className='radio-button'>
                                    <Field type="radio" id="other" name="sex" value="other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                            <span className="error"> {props?.errors?.sex ? props?.errors?.sex : ""}</span>
                            </div>
                            <div className='input-block'>
                            <label htmlFor="exampleInputWeight" >{t('EditProfilePage.form.f7')}</label>
                            <input type="text" name="weight"  placeholder={t('EditProfilePage.form.f15')} value={props?.values?.weight} id="exampleInputWeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.weight ? props?.errors?.weight : ""}</span>
                        </div>
                        <div className='input-block'>
                            <label htmlFor="exampleInputHeight" >{t('EditProfilePage.form.f8')}</label>
                            <input type="text" name="height" placeholder={t('EditProfilePage.form.f16')}  value={props?.values?.height} id="exampleInputHeight" onChange={props?.handleChange} />
                            <span className="error"> {props?.errors?.height ? props?.errors?.height : ""}</span>
                        </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="email" name='email' placeholder='Email*'  onChange={props?.handleChange} value={props?.values?.email}/>
                            <span className="error">  {props?.errors?.email?props?.errors?.email:""}</span>
                </div>
                <div className='input-block'>
                    <label>Contact Number</label>
                    <input type="text" name='contact_number' placeholder='Contact Number*'   value={props?.values?.contact_number} onChange={props?.handleChange} />
                            <span className="error">{props?.errors?.contact_number?props?.errors?.contact_number:""}</span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practice_name' placeholder='Practice name*'  onChange={props?.handleChange} value={props?.values?.practice_name}/>
                            <span className="error">{props?.errors?.practice_name?props?.errors?.practice_name:""}</span>
                </div>  
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practice_address' placeholder='Practice Address*'  onChange={props?.handleChange} value={props?.values?.practice_address} />
                            <span className="error">{props?.errors?.practice_address?props?.errors?.practice_address:""}</span>
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
