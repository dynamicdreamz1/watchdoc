import { MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';
import { Formik } from 'formik';
import * as Yup from "yup";
import { DatePicker } from '@mui/x-date-pickers';

export default function AddStaffUser({staffUser,setOpen}) {

    const [countryCode, setcountryCode] = useState('');
    const [ imageUrl, setImgSrc ] = useState("/images/user-picture-placeholder.png");
    const [addNewStaff,setAddNewStaff]=useState({
        "id": staffUser.length+1,
        "firstname":"",
        "lastname":"",
        "email": "",
        "number": "",
        "lastlogin" : "",
        "practicename":"",
        "zip":"",
        "practiceaddress":"",
        "password":"",
        "userprofile":""        
        
    })


    // const LoginSchema = Yup.object({
    //     firstname: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     lastname: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     email: Yup.string().required("Email Is Required")
    //     .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
    //     practicename: Yup.string().required("This field is required*")
    //     .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    //     practiceaddress: Yup.string().required("This field is required*")
        
    // });



    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };


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
        const finalData={
            "id": data?.id,
            "name": data?.firstname,
            "email": data.email,
            "phone": data?.number,
            "lastlogin" : "",
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": `${data?.firstname} ${data?.lastname}`
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value":data?.zip
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": imageUrl
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": data?.practiceaddress
                }
            ]
            
        }
        staffUser.push(finalData)
        setOpen(false)
        setAddNewStaff({
            "id": "",
            "firstname":"",
            "lastname":"",
            "email": "",
            "number": "",
            "lastlogin" : "",
            "practicename":"",
            "zip":"",
            "practiceaddress":"",
            "password":"",
            "userprofile":""        
            
        })

        
        
        
    }





    return (
        <Formik 
        initialValues={addNewStaff}
        enableReinitialize={true}
        validationSchema=""
        onSubmit={(values) =>
        { handleSubmitForm(values)}} 
    > 
    {(props) => (
    <>
        <div className='my-profile-form'>
            <div className='dialog-title'>
                <h2>Add Staff User</h2>
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className='input-block update-profile'>
                    <div className='image-block'>
                        <img  src={imageUrl} alt="Staf User" />
                    </div>
                    <div>
                        <input id="file" type="file"  onChange={(e)=>handleImages(e.target.files[0])}/>
                    </div>
                </div>
                <div className='input-block'>
                    <div className='inputs-wrapper'>
                        <div className='input-item'>
                            <label>Title</label>
                            <select name='title'>
                                <option value="Dr">Dr</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                        </div>
                        <div className='input-item'>
                            <label>First name</label>
                            <input type="text" name='firstname' value={props?.values?.firstname} onChange={props?.handleChange}/>
                            <span className="error"></span>
                        </div>
                        <div className='input-item'>
                            <label>Last name</label>
                            <input type="text" name='lastname' value={props?.values?.lastname} onChange={props?.handleChange}/>
                            <span className="error"></span>
                        </div>
                    </div>
                </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="email" name='email' value={props?.values?.email} onChange={props?.handleChange}/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practicename' value={props?.values?.practicename} onChange={props?.handleChange}/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practiceaddress' value={props?.values?.practiceaddress} onChange={props?.handleChange}/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Password</label>
                    <input type="password" name='password' value={props?.values?.password} onChange={props?.handleChange}/>
                </div>
                <div className='input-block country-code'>
                <label id="country-code">Enter new phone number</label>
                <div className='inputs-wrapper'>
                  <Select
                    labelId="country-code"
                    value={countryCode}
                    label="Age"
                    onChange={handleChange}
                  >
                    {allTimeZone.map((data, i) => (
                      <MenuItem key={i} value={data.Name}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                    ))}
                  </Select>
                  <input type="text" name="number" value={props?.values?.number} onChange={props?.handleChange}></input>
                </div>
              </div>
                <div className='submit-block'>
                    <button type="submit">Add Staff User</button>
                </div>
            </form>
        </div>
    </>
    )}
    </Formik>
  )
}
