import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Field, Formik } from "formik";
import { MetaFormeting } from "../../../Utility/functions";
import { toast } from "react-toastify";
import { updatepatientDetailinAdmin } from "../../../services/AdminService";
import * as Yup from "yup";
import SimpleBackdrop from "../../../Utility/Skeleton";


export const PatientProfileOverlayForAdmin = ({id,handleClose, data,fetchData }) => {
  const { first_name, last_name, sex, dob, height, weight } = MetaFormeting(data?.user_data);
  const { t } = useTranslation();
  const [spinner, setSpinner] = useState(false)
  const [patientData] = useState({
    "first_name": first_name || "",
    "last_name": last_name || "",
    "email": data?.user_data?.email || "",
    "dob": dob || "",
    "sex": sex || "",
    "weight": weight || "",
    "height": height || "",
    "contact_number": data?.user_data?.contact_number || ""
  })
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const LoginSchema = Yup.object({
    dob: Yup.string(),
    first_name: Yup.string().required("This field is required*")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    last_name: Yup.string().required("This field is required*")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().required("Email Is Required")
      // eslint-disable-next-line no-useless-escape
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email"),
    height: Yup.string().required("This field is required*"),
    weight: Yup.string().required("This field is required*"),
    sex: Yup.string().required("This field is required*"),
    contact_number: Yup.string().required(t('SignUpPage.validation.common1'))
      .matches(phoneRegExp, t('SignUpPage.validation.mobile.v1'))
      .min(10, t('SignUpPage.validation.mobile.short'))
      .max(10, t('SignUpPage.validation.mobile.long')),

  });




  const handleSubmitForm = async (data) => {
    setSpinner(true)
  
      const formData = new FormData();
      formData.append("id",id);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("contact_number", data?.contact_number);
      formData.append("sex", data.sex);
      formData.append("dob", data.dob);
      formData.append("weight", data?.weight);
      formData.append("height", data?.height);

      updatepatientDetailinAdmin(formData)
            .then(async(res) => {
                if (res?.status === 200) {
                    setSpinner(true)
                    await fetchData()
                    toast.success(res?.data?.message, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                    });                    
                    handleClose();
                }
                else{
                setSpinner(false)
                const key = Object.keys(res.response.data.error)[0];
                  toast.error(res?.response?.data.error[key][0], {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });

              }
            })
            .catch((error) => {
              setSpinner(false)
                const key = Object.keys(error.response.data.error.email)[0];
                if (error.response.data.status === 422) {
                    toast.error(error.response.data.error[key][0], {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                    });
                }
                else {
                  toast.error(error, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
                    handleClose();
                }
              
            })
            setSpinner(true)
    


    //   const res = await updatepatientDetailinAdmin(formData)
    //   if(res?.status===200){
    //     await fetchData()
    //     toast.success(res?.data?.message, {
    //       position: 'top-right',
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,       
    //       pauseOnHover: true,
    //       draggable: true,
    //       theme: "colored",
    //     });
    //   }
      
    // } catch (error) {
    //   toast.error(error, {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     theme: "colored",
    //   });
    // }
    // setSpinner(false)
    // handleClose();
  };

  return (
 <>
 <SimpleBackdrop open={spinner} />
    <Formik
      initialValues={patientData}
      enableReinitialize={true}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        handleSubmitForm(values);
      }}
    >
      {(props) => (
        <>
          <div className="dialog-title">
            <h2>Profile</h2>
          </div>
          <form id="main_form" onSubmit={props.handleSubmit}>
            <div className="input-block">
              <label htmlFor="exampleInputFirstName">First name</label>
              <input
                type="text"
                name="first_name"
                placeholder={t("EditProfilePage.form.f13")}
                value={props?.values?.first_name}
                onChange={props?.handleChange}
                id="exampleInputFirstName"
              />
                 <span className="error">{props?.errors?.first_name ? props?.errors?.first_name : ""}</span>
            </div>
            <div className="input-block">
              <label htmlFor="exampleInputLastName">Last name</label>
              <input
                type="text"
                name="last_name"
                placeholder={t("EditProfilePage.form.f14")}
                value={props?.values?.last_name}
                onChange={props?.handleChange}
                id="exampleInputLastName"
              />
                 <span className="error">{props?.errors?.last_name ? props?.errors?.last_name : ""}</span>

            </div>
            {/* <div className="input-block">
              <label htmlFor="exampleInputDOB">Date of birth</label>                
              <input type="text" name="dob" value={props?.values?.dob} onChange={props?.handleChange}  id="exampleInputDOB" />
            </div> */}
            <div className='input-block'>
              <label htmlFor="exampleInputDOB" >{t('EditProfilePage.form.f3')}</label>
              <input type="date" name="dob" value={props?.values?.dob} id="exampleInputDOB" onChange={props?.handleChange} />
              <span className="error"> {props?.errors?.dob ? props?.errors?.dob : ""}</span>
            </div>
            {/* <div className="input-block">
              <label htmlFor="exampleInputSex">
                {t("EditProfilePage.form.f4")}
              </label>
              <div className="radio-buttons">
                <div className="radio-button">
                  <input
                    checked={sex === "male"}
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                  />
                  <label htmlFor="male">{t("EditProfilePage.form.f10")}</label>
                </div>
                <div className="radio-button">
                  <input
                    checked={sex === "female"}
                    type="radio"
                    id="female"
                    name="sex"
                    value="female"
                  />
                  <label htmlFor="female">
                    {t("EditProfilePage.form.f11")}
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    checked={sex === "other"}
                    type="radio"
                    id="other"
                    name="sex"
                    value="other"
                  />
                  <label htmlFor="other">{t("EditProfilePage.form.f12")}</label>
                </div>
              </div>
            </div> */}
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
            </div>
            <div className="input-block">
              <label htmlFor="exampleInputHeight">Height (cm)</label>
              <input
                type="text"
                name="height"
                placeholder={t("EditProfilePage.form.f16")}
                value={props?.values?.height}
                onChange={props?.handleChange}
                id="exampleInputHeight"
              />
                 <span className="error">{props?.errors?.height ? props?.errors?.height : ""}</span>

            </div>
            <div className="input-block">
              <label>Email address</label>
              <input type="email" name="email" value={props?.values?.email} onChange={props?.handleChange} />
              <span className="error">{props?.errors?.email ? props?.errors?.email : ""}</span>

            </div>
            <div className="input-block">
              <label>Weight</label>
              <input type="text" name="weight" value={props?.values?.weight} onChange={props?.handleChange} />
              <span className="error">{props?.errors?.weight ? props?.errors?.weight : ""}</span>

            </div>
            <div className="input-block country-code">
              <label id="country-code">Contact number</label>
              <div className="inputs-wrapper">
                <input
                  type="text"
                  name="contact_number"
                  value={props?.values?.contact_number}
                  onChange={props?.handleChange}
                ></input>
              <span className="error">{props?.errors?.contact_number ? props?.errors?.contact_number : ""}</span>

              </div>
            </div>
            <button type="submit">{t('EditProfilePage.form.f9')}</button>
          </form>
        </>
      )}
    </Formik>
 </>
  );
};
