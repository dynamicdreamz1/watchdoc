import { MenuItem, Select } from '@mui/material'
import React, {useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { allTimeZone } from '../../Utility/countryCode';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import { CreateClinician} from '../../services/AdminService';
import { useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import SimpleBackdrop from '../../Utility/Skeleton';


export default function AddClinician({setOpen,dataLimit,currentPage ,getAllClinicianData}) {
    const { t } = useTranslation()
    const [loading,setLoading]=useState(false)
    const location=useLocation();
    const [countryCode, setcountryCode] = useState('+61');
    const [imageUrl, setImgSrc] = useState("/images/user-picture-placeholder.png");
    const [fileSizeErrorMessage, setFileSizeErrorMessage] = useState("");
    const [addNewStaff, setAddNewStaff] = useState({
        "title": "Dr",
        "firstname": "",
        "lastname": "",
        "email": "",
        "number": "",
        "practicename":"",
        "practiceaddress": "",
        "password":"",
        "userprofile": imageUrl,
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
        const file = files;
        if (file) {
            const fileSizeInMB = file.size / (1024 * 1024);
            if (fileSizeInMB <= 2) {
                setImgSrc(files);
                setFileSizeErrorMessage("")
            } else {
                setImgSrc("")
                setFileSizeErrorMessage('Image size should be less than 2 MB')
                toast.error('Image size should be less than 2 MB', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
            }
        }
    }
    
    const handleSubmitForm = async (data) => {
        setLoading(true);
        const formData = new FormData();
        if (typeof imageUrl === "object") {
            formData.append("profile_pic", imageUrl);
        }
        formData.append("first_name", data?.firstname);
        formData.append("last_name", data?.lastname);
        formData.append("email", data?.email);
        formData.append("contact_number", `${countryCode} ${data.number}`);
        formData.append("password", data?.password);
        formData.append("practice_address", data?.practiceaddress);
        formData.append("practice_name", data?.practicename);
        formData.append("type", "create");
    
        try {
            const res = await CreateClinician(formData);
            setLoading(false);
            if (res.status === 200) {
                toast.success(res.data.message, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
                setImgSrc("");
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
                });
                setOpen(false);
                if (location.pathname !== "/cliniciandetails") {
                    getAllClinicianData(dataLimit, currentPage);
                }
            } else {
                const key = Object.keys(res.response.data.error)[0];
                toast.error(res.response.data.error[key][0], {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
            }
        } catch (error) {
            setLoading(false);
            let errorMessage = "An error occurred";
            if (error.response) {
                const key = Object.keys(error.response.data.error)[0];
                if (error.response.data.status === 422) {
                    errorMessage = error.response.data.error[key][0];
                } else {
                    errorMessage = error.response.data.message;
                }
            }
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    return (
        <>
        <SimpleBackdrop open={loading}/>
        <Formik
            initialValues={addNewStaff}
            enableReinitialize={true}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                if(fileSizeErrorMessage==="")
                handleSubmitForm(values)
            }}
        >
            {(props) => (
                <>
                    <div className='my-profile-form'>
                        <div className='dialog-title'>
                            <h2>Add Clinician</h2>
                        </div>
                        <form onSubmit={props.handleSubmit} autoComplete="off">
                        <div className='input-block'>
                                <span className="error">{fileSizeErrorMessage && fileSizeErrorMessage}</span>
                            </div>
                            <div className='input-block update-profile'>
                                <div className='image-block'>
                                    <img name="userprofile" src={typeof imageUrl==="object" ?URL.createObjectURL(imageUrl):imageUrl} alt="Staf User" />
                                </div>
                                <div>
                                    <input id="file" type="file" onChange={(e) => handleImages(e.target.files[0])} />
                                </div>
                            </div>
                            <div className='input-block'>
                                <div className='inputs-wrapper'>
                                    <div className='input-item'>
                                        <label>Title</label>
                                        <input type="text" name='title' value={props?.values?.title} onChange={props?.handleChange} disabled/>

                                        {/* <select name='title' defaultValue={props?.values?.title} onChange={props?.handleChange}>
                                            <option value="Dr">Dr</option>
                                            <option value="Hospital">Hospital</option>
                                        </select> */}
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
                                        disabled={true}
                                    >
                                        {allTimeZone?.map((data, i) => (
                                            <MenuItem key={i} value={data.MobileCode}><span className={`fi fi-${data.Code.toLowerCase()}`}></span>{data.MobileCode}</MenuItem>
                                        ))}
                                    </Select>

                                    <input type="text" name="number" value={props?.values?.number} onChange={props?.handleChange}></input>
                                    <span className="error"> {props.errors.number ? props.errors.number : ""}</span>
                                </div>
                            </div>
                            <div className='LoginError'>{loading?'Loading...':""}</div>
                            <div className='submit-block'>
                                <button type="submit">Add Clinician</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </Formik>
        </>
        
    )
}
