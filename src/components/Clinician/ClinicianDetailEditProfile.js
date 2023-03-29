
import { MenuItem, Select } from '@mui/material'
import React, {useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';
import { Formik } from 'formik';
import { MetaFormeting } from '../../Utility/functions';

export default function ClinicianDetailEditProfile({ profileBarData,setOpenProfile }) {
    const metaData=MetaFormeting(profileBarData)
    const [countryCode, setcountryCode] = useState('+91');
    const [imageUrl, setImgSrc] = useState("/images/user-picture-placeholder.png");
    const [addNewStaff] = useState({
        "title": "Dr",
        "firstname": profileBarData?.firstname,
        "lastname": profileBarData?.lastname,
        "email": profileBarData?.email,
        "number": profileBarData?.contact_number,
        "practicename":profileBarData?.practicename,
        "practiceaddress": metaData?.address,
        "userprofile": "",
        "countrycode":""
        
    })
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    // const LoginSchema = Yup.object({
    //     id: Yup.string(),
    //     title: Yup.string(),
       
    //     userprofile: Yup.string(),
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










    const handleSubmitForm = (data) => {
        
        setOpenProfile(false)



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
                    <div className='my-profile-form'>
                        <div className='dialog-title'>
                            <h2>Clinician Profile</h2>
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
                            {/* <div className='input-block'>
                                <label>Password</label>
                                <input type="password" name='password' value={props?.values?.password} onChange={props?.handleChange} autoComplete="new-password"  />
                                <span className="error">{props.errors.password ? props.errors.password : ""}</span>
                            </div> */}

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
                                <button type="submit">Update Clinician</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </Formik>
    )
}
