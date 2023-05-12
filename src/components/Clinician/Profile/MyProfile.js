import React,{useContext, useState} from 'react'
import { Formik } from 'formik';
// import * as Yup from "yup";
import { MetaFormeting } from '../../../Utility/functions';
import {getCurrentUserData } from '../../../services/UserService';
import { StoreCookie } from '../../../Utility/sessionStore';
import { UserContext } from '../../../Store/Context';
import { UpdateUserProfile } from '../../../services/AdminService';

export default function MyProfile() {
    const { currentUserData, setCurrentUserData } = useContext(UserContext);
    const userData = getCurrentUserData();
    const metaData=  MetaFormeting(userData);
    const {first_name,last_name,profile_pic,practice_address,practice_name}=metaData
    const [ imageUrl, setImgSrc ] = useState((profile_pic===null ||profile_pic===undefined )?"/images/user-picture-placeholder.png":profile_pic);
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [editClinicianProfileData, setEditClinicianProfileData] = useState({
        "title":"Dr",
        "first_name": first_name,
        "last_name": last_name,
        "email": userData?.email,
        "practicename": practice_name,
        "practiceaddress": practice_address,
        "profile_pic":imageUrl
    })
    // const LoginSchema = Yup.object({
    //     first_name: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     last_name: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     email: Yup.string().required("Email Is Required")
    //     // eslint-disable-next-line no-useless-escape
    //     .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
    //     practicename: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     practiceaddress: Yup.string().required("This field is required*")
        
    // });

    const handleImages = (files) => {
        setImgSrc(files)

    //     let validImages = [files].filter((file) => 
    //         ['image/jpeg', 'image/png'].includes(file?.type||{})
    //     );      
      
    //     validImages.forEach(uploadImages);
      
      
    //   };
    //     const uploadImages =(file)=>{

    //       let reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onloadend = () => {
    //         setImgSrc(reader?.result)
           
    //       };
      
        }









    const handleSubmitForm = async(data) => {

        setLoading(true)
        const formData = new FormData();
        formData.append("first_name", data?.first_name);
        formData.append("last_name", data?.last_name);
        formData.append("email", data.email);
        formData.append("practice_name", data?.practicename);
         formData.append("practice_address", data?.practiceaddress);
       
        if(typeof imageUrl == "object" ){

            formData.append("profile_pic",imageUrl);
        }
        
       const updatedUserData=await UpdateUserProfile(formData)
       setLoading(false)
       if(updatedUserData?.status===200){
        setCurrentUserData({ ...currentUserData, userData: updatedUserData?.data?.data })
        StoreCookie.setItem("user_details", JSON.stringify(updatedUserData?.data?.data));
        const tempMetaFormat=  MetaFormeting(updatedUserData?.data?.data);
         setEditClinicianProfileData({
             "first_name": tempMetaFormat?.first_name,
         "last_name": tempMetaFormat?.last_name,
         "email": updatedUserData?.data?.data?.email,
         "practicename": updatedUserData?.practicename,
         "practiceaddress": updatedUserData?.practiceaddress,
         })
        setMessage('Profile updated successfully.')
        setTimeout(() => setMessage(""), 2000);

       }

      
        
    }
    
    return (
        <Formik 
        initialValues={editClinicianProfileData}
        enableReinitialize={true}
        validationSchema=""
        onSubmit={(values) =>
        { handleSubmitForm(values)}} 
    > 
    {(props) => (
    <>
        <div className='my-profile-form'>
            <div className='title-block'>
                <h2>Profile</h2>
            </div>
            <div>{message}</div>
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
                        <input type="text" name='title' placeholder='Title*' disabled  defaultValue={props?.values?.title}/>
                        {/* <select name='title' defaultValue={props?.values?.title} onChange={props?.handleChange}>
                            <option value="Dr">Dr</option>
                            <option value="Hospital">Hospital</option>
                        </select> */}
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
                    <label>Email address</label>
                    <input type="email" name='email' placeholder='Email*'  onChange={props?.handleChange} value={props?.values?.email}/>
                            <span className="error">  {props?.errors?.email?props?.errors?.email:""}</span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practicename' placeholder='Practice name*'  onChange={props?.handleChange} value={props?.values?.practicename}/>
                            <span className="error">{props?.errors?.practicename?props?.errors?.practicename:""}</span>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practiceaddress' placeholder='Practice Address*'  onChange={props?.handleChange} value={props?.values?.practiceaddress} />
                            <span className="error">{props?.errors?.practiceaddress?props?.errors?.practiceaddress:""}</span>
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
