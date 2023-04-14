import { MenuItem, Select } from '@mui/material'
import React, {useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import { CreateClinician } from '../../services/AdminService';

export default function AddClinician({ clinicianStaff, setOpen }) {
    const { t } = useTranslation()

    const [countryCode, setcountryCode] = useState('+91');
    const [imageUrl, setImgSrc] = useState("/images/user-picture-placeholder.png");
    const [addNewStaff, setAddNewStaff] = useState({
        "id": clinicianStaff?.length + 1,
        "title": "Dr",
        "firstname": "",
        "lastname": "",
        "email": "",
        "number": "",
        "practicename":"",
        "practiceaddress": "",
        "password":"",
        "userprofile": "",
        "countrycode":""
        
    })
        

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const LoginSchema = Yup.object({
        id: Yup.string(),
        title: Yup.string(),
       
        userprofile: Yup.string(),
        countrycode: Yup.string(),
        firstname: Yup.string().required("This field is required*")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        lastname: Yup.string().required("This field is required*")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        email: Yup.string().required("This field is required*")
            // eslint-disable-next-line no-useless-escape
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
        
        practicename :Yup.string()
        .required("This field is required*")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
        practiceaddress: Yup.string().required("This field is required*"),
        password:Yup.string()
        .required("This field is required*")
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        number: Yup.string().required(t('SignUpPage.validation.common1'))
            .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
            .min(10, t('SignUpPage.validation.mobile.short'))
            .max(10, t('SignUpPage.validation.mobile.long')),
        
    });



    const handleChange = (event) => {
        setcountryCode(event.target.value);
    };


    const handleImages = (files) => {
        let validImages = [files].filter((file) =>
            ['image/jpeg', 'image/png'].includes(file?.type || {})
        );

        validImages.forEach(uploadImages);


    };
    const uploadImages = (file) => {

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgSrc(reader?.result)

        };

    }










    const handleSubmitForm =async (data) => {

        const apiData={
            first_name:data.firstname,
            last_name:data.lastname,
            email:data.email,
            contact_number: `${countryCode} ${data.number}`,
            password:data.password,
            practice_address:data.practiceaddress,
            type:"create"
        }
       
       let res=await CreateClinician(apiData)
        console.log(res);
        // const finalData = {
        //     "id": data?.id,
        //     "name": data?.firstname,
        //     "email": data?.email,
        //     "phone": `${countryCode} ${data?.number}`,
        //     "lastlogin": data?.date,
        //     "firstname":data?.firstname,
        //     "lastname":data?.lastname,
        //     "practicename":data?.practicename,
        //     "meta_data": [
        //         {
        //             "id": 11,
        //             "meta_key": "full_name",
        //             "meta_value": `${data?.title} ${data?.firstname} ${data?.lastname}`
        //         },
        //         {
        //             "id": 13,
        //             "meta_key": "zip",
        //             "meta_value": data?.zip
        //         },
        //         {
        //             "id": 207,
        //             "meta_key": "image",
        //             "meta_value": imageUrl
        //         },
        //         {
        //             "id": 211,
        //             "meta_key": "address",
        //             "meta_value": data?.practiceaddress
        //         }
        //     ]

        // }
        // clinicianStaff.push(finalData)
        setOpen(false)
        setAddNewStaff({
            "id": "",
            "firstname": "",
            "lastname": "",
            "email": "",
            "number": "",
            "lastlogin": "",
            "practicename": "",
            "zip": "",
            "practiceaddress": "",
            "password": "",
            "userprofile": ""

        })




    }





    return (
        <Formik
            initialValues={addNewStaff}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => { handleSubmitForm(values) }}
        >
            {(props) => (
                <>
                    <div className='my-profile-form'>
                        <div className='dialog-title'>
                            <h2>Add Clinician</h2>
                        </div>
                        <form onSubmit={props.handleSubmit} autoComplete="off">
                            <div className='input-block update-profile'>
                                <div className='image-block'>
                                    <img name="userprofile" src={imageUrl} alt="Staf User" />
                                </div>
                                <div>
                                    <input id="file" type="file" onChange={(e) => handleImages(e.target.files[0])} />
                                </div>
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
                            <div className='input-block'>
                                <label>Password</label>
                                <input type="password" name='password' value={props?.values?.password} onChange={props?.handleChange} autoComplete="new-password"  />
                                <span className="error">{props.errors.password ? props.errors.password : ""}</span>
                            </div>

                            {/* <div className='input-block'>
                                <label>Connected Patients</label>
                                <input type="number" name='connectedpatients' value={props?.values?.connectedpatients} onChange={props?.handleChange} />
                                <span className="error"> {props.errors.connectedpatients ? props.errors.connectedpatients : ""}</span>
                            </div> */}

                            {/* <div className='input-block'>
                                <label>Pending Patients</label>
                                <input type="number" name='pendingpatients' value={props?.values?.pendingpatients} onChange={props?.handleChange} />
                                <span className="error"> {props.errors.pendingpatients ? props.errors.pendingpatients : ""}</span>
                            </div> */}

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

                                    <input type="text" name="number" value={props?.values?.number} onChange={props?.handleChange}></input>
                                    <span className="error"> {props.errors.number ? props.errors.number : ""}</span>
                                </div>
                            </div>
                            <div className='submit-block'>
                                <button type="submit">Add Clinician</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </Formik>
    )
}
