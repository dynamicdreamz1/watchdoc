import React,{useState} from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import { MetaFormeting } from '../../../Utility/functions';
import { getCurrentUserData } from '../../../services/UserService';

export default function MyProfile(props) {
    const userData = getCurrentUserData();
    const metaData=  MetaFormeting(userData);
    const [ imageUrl, setImgSrc ] = useState("/images/user-picture-placeholder.png");
    const [editClinicianProfileData, setEditClinicianProfileData] = useState({
        "title":"",
        "firstname": metaData?.full_name,
        "lastname": "",
        "email": userData?.email,
        "practicename": "",
        "practiceaddress": metaData?.address
    })

    const LoginSchema = Yup.object({
        firstname: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        lastname: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup.string().required("Email Is Required")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        practicename: Yup.string().required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        practiceaddress: Yup.string().required("This field is required*")
        
    });



    const handleImages = (files) => {
        let validImages = [files].filter((file) => 
            ['image/jpeg', 'image/png'].includes(file?.type||{})
        );      
      
        validImages.forEach(uploadImages);
      
      
      };
        const uploadImages =(file)=>{

          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setImgSrc(reader?.result)
           
          };
      
        }










    const handleSubmitForm = (data) => {
        console.log("111-data",data)
        setEditClinicianProfileData({...data})
        // ProfileCreation(data)
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
            <form onSubmit={props.handleSubmit}>
            <div className='input-block update-profile'>
                <div className='image-block'>
                    <img src={imageUrl} alt="" />
                </div>
                <form>
                    <input id="file"  type="file" onChange={(e)=>handleImages(e.target.files[0])}/>
                </form>
            </div>
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        <select name='title' defaultValue={props?.values?.title} onChange={props?.handleChange}>
                            <option value="Dr">Dr</option>
                            <option value="Hospital">Hospital</option>
                        </select>
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='firstname' placeholder='First Name*'  onChange={props.handleChange} value={props.values.firstname}/>
                        <span className="error">{props.errors.firstname?props.errors.firstname:""}</span>
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='lastname' placeholder='Last Name*'  onChange={props.handleChange} value={props.values.lastname} />
                            <span className="error"> {props.errors.lastname?props.errors.lastname:""}</span>
                    </div>
                </div>
            </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="email" name='email' placeholder='Email*'  onChange={props.handleChange} value={props.values.email}/>
                            <span className="error">  {props.errors.email?props.errors.email:""}</span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practicename' placeholder='Practice name*'  onChange={props.handleChange} value={props.values.practicename}/>
                            <span className="error">{props.errors.practicename?props.errors.practicename:""}</span>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practiceaddress' placeholder='Practice Address*'  onChange={props.handleChange} value={props.values.practiceaddress} />
                            <span className="error">{props.errors.practiceaddress?props.errors.practiceaddress:""}</span>
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
