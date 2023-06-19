
import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';
import { Formik } from 'formik';
import { MetaFormeting } from '../../Utility/functions';
import { clinicanProfileUpdate } from '../../services/AdminService';
import { toast } from 'react-toastify';


export default function ClinicianDetailEditProfile({ profileBarData,setOpen,getClinicianDetail}) { 
    const {contact_number,id}=(profileBarData);
    const metaData=MetaFormeting(profileBarData)
    const [countryCode, setcountryCode] = useState('+91');
    const [imageUrl, setImgSrc] = useState(metaData?.profile_pic===undefined?"/images/user-picture-placeholder.png":metaData?.profile_pic);
    const [addNewStaff,setAddNewStaff] = useState({
        "title": "Dr",
        "firstname": metaData?.first_name || "",
        "lastname":metaData?.last_name || "",
        "email": profileBarData?.email || "",
        "number": contact_number || "",
        "practicename":metaData?.practice_name || "",
        "practiceaddress": metaData?.practice_address || "",
        "profile_pic": imageUrl,
        "countrycode":""
        
    })

   useEffect(()=>{
    if (profileBarData?.contact_number?.startsWith("+")) {
        const country_code = profileBarData?.contact_number?.substring(0, profileBarData?.contact_number.length - 10).trim();
        setcountryCode(`${country_code}`)
    }
    if (profileBarData?.contact_number?.startsWith("+")) {
        const mobile_number = profileBarData?.contact_number?.substring(profileBarData?.contact_number.length - 10);
        setAddNewStaff({...addNewStaff,number:mobile_number})
        
      }
     else {
        const mobile_number = profileBarData?.contact_number;
        setAddNewStaff({...addNewStaff,number:mobile_number})

      }
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    // const LoginSchema = Yup.object({
    //     id: Yup.string(),
    //     title: Yup.string(),
       
    //     userprofile_picprofile: Yup.string(),
    //     countrycode: Yup.string(),
    //     firstname: Yup.string().required("This field is required*")
    //         .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    //     lastname: Yup.string().required("This field is required*")
    //         .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    //     email: Yup.string().required("This field is required*")
    //         // eslint-disable-next-line no-useless-escape
    //         .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        
    //     practicename :Yup.string()
    //     .required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    //     practiceaddress: Yup.string().required("This field is required*"),
    //     number: Yup.string().required(t('SignUpPage.validation.common1'))
    //         .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
    //         .min(10, t('SignUpPage.validation.mobile.short'))
    //         .max(10, t('SignUpPage.validation.mobile.long')),
        
    // });

    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };
        
    const handleImages = (files) => {
        setImgSrc(files)
    };

     const handleSubmitForm =async(data) => {
        const formData = new FormData();
        formData.append("id", id.toString());
        formData.append("type", "update");
        formData.append("first_name", data.firstname);
        formData.append("last_name", data.lastname);
        formData.append("email", data.email);
        formData.append("contact_number", `${countryCode}${data.number}`);
        formData.append("password", null);
        formData.append("practice_address", data.practicename);
        formData.append("practice_name", data.practiceaddress);

        if(typeof imageUrl == "object" ){
            formData.append("profile_pic",imageUrl);
        }
        setOpen(false)
        const res=await clinicanProfileUpdate(formData)
        if(res?.status===200){        
        await getClinicianDetail()  
            toast.success('Clinciian Update Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
        }

    }
    
    return (
        <Formik
            initialValues={addNewStaff}
            enableReinitialize={true}
            validationSchema=""
            onSubmit={(values) => { handleSubmitForm(values) }}
        >
            {(props) => (
                <>
                <>
                    <div className='my-profile-form'>
                        <div className='dialog-title'>
                            <h2>Clinician Profile</h2>
                        </div>
                        <form onSubmit={props.handleSubmit} autoComplete="off">
                            <div className='input-block update-profile'>
                                <div className='image-block'>
                                    <img name="profile_pic" src={typeof imageUrl==="object" ?URL.createObjectURL(imageUrl):imageUrl} alt="Staf User" />
                                </div>
                                <div>
                                    <input id="file" type="file" onChange={(e) => handleImages(e.target.files[0])} />
                                </div>
                            </div>
                            <div className='input-block'>
                                <div className='inputs-wrapper'>
                                    <div className='input-item'>
                                        <label>Title</label>
                                        <input type="text" name='title' value={props?.values?.title}  onChange={props?.handleChange} disabled/>
                                    </div>
                                    <div className='input-item'>
                                        <label>First name</label>
                                        <input type="text" name='firstname' value={props?.values?.firstname} onChange={props?.handleChange} />
                                        <span className="error">{props.errors.firstname ? props.errors.firstname : ""}</span>
                                    </div>
                                    <div className='input-item'>
                                        <label>Last name</label>
                                        <input type="text" name='lastname' value={props?.values?.lastname} onChange={props?.handleChange} />
                                        <span className="error"> {props.errors.lastname ? props.errors.lastname : ""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='input-block'>
                                <label>Email address</label>
                                <input type="email" name='email' value={props?.values?.email} onChange={props?.handleChange} />
                                <span className="error">  {props.errors.email ? props.errors.email : ""}</span>
                            </div>
                            
                            <div className='input-block'>
                                <label>Practice name</label>
                                <input type="text" name='practicename' value={props?.values?.practicename} onChange={props?.handleChange} />
                                <span className="error">{props.errors.practicename ? props.errors.practicename : ""}</span>
                            </div>
                            <div className='input-block'>
                                <label>Practice Address</label>
                                <input type="text" name='practiceaddress' value={props?.values?.practiceaddress} onChange={props?.handleChange} />
                                <span className="error">{props.errors.practiceaddress ? props.errors.practiceaddress : ""}</span>
                            </div>
                            <div className='input-block country-code'>
                                <label id="country-code">Enter phone number</label>
                                <div className='inputs-wrapper'>
                                    <Select
                                        labelId="country-code"
                                        value={countryCode}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        {allTimeZone?.map((data, i) => (
                                            <MenuItem key={i} value={data.MobileCode}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                                        ))}
                                    </Select>

                                    <input type="text" name="number" value={props?.values?.number || ""} onChange={props?.handleChange}></input>
                                    <span className="error"> {props.errors.number ? props.errors.number : ""}</span>
                                </div>
                            </div>
                            <div className='submit-block'>
                                <button type="submit">Update Clinician</button>
                            </div>
                        </form>
                    </div>
                </>
                </>
            )}
        </Formik>
    )
}
