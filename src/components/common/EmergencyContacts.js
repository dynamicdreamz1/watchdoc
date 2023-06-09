import { Formik } from "formik";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { t } from "i18next";
import * as Yup from "yup";
import { AddEmergencyContact } from "../../services/PatientsService";
import { toast } from "react-toastify";
import { getEmergencyContact } from "../../Utility/functions";
import SimpleBackdrop, { TableSkeleton } from "../../Utility/Skeleton";
import Email from "./Table/Email";
import Phone from "./Table/Phone";
import { StoreCookie } from "../../Utility/sessionStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const EmergencyContacts = () => {
  const emergencyData = getEmergencyContact()
  const [finalData, setFinalData] = useState(emergencyData)
  const [initialData, setInitialData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    emergencyNumber: "",
  });
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const LoginSchema = Yup.object({
      first_name: Yup.string()
        .required("This field is required*")
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
      last_name: Yup.string()
        .required("This field is required*")
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
      emergencyNumber: Yup.string()
        .required(t("SignUpPage.validation.common1"))
        .matches(phoneRegExp, t("SignUpPage.validation.mobile.v1"))
        .min(10, t("SignUpPage.validation.mobile.short"))
        .max(10, t("SignUpPage.validation.mobile.long")),
      email: Yup.string()
        .required("Email Is Required")
        .matches(
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          "Please Enter Valid Email"
        ),
    });
    
  const handleClick = () => {
    if(!toggle){
      setInitialData({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        emergencyNumber: ""
      })
    }
    setToggle(!toggle);
  };

  const handleClickEdit = (data, id, type) => {
    setToggle(true)
    setInitialData({
      id: id,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email_address,
      emergencyNumber: data?.mobile_number
    })

  }



  const handleSubmitForm = async (data, id, type) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id", type === 1 ? "" : id)
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("mobile_number", data?.emergencyNumber);
    formData.append("email_address", data?.email);
    formData.append("action", type === 1 ? "insert" : type === 2 ? "delete" : "update");
    const res = await AddEmergencyContact(formData);
    if (res?.status === 200) {
      setLoading(false);
      const array = [];
      let object = {};
      // res?.data?.user_data?.meta_data?.map((item) => {
      //   if (item.meta_key === 'emergency_contact') {
      //     object = { id: item.id, meta_key: item.meta_key, metaData: JSON.parse(item.meta_value) }
      //     array.push(object)
      //   }
      // })
      res?.data?.user_data?.meta_data?.map((item) => {
        if (item.meta_key === 'emergency_contact') {
          object = { id: item.id, meta_key: item.meta_key, metaData: JSON.parse(item.meta_value) };
          array.push(object);
          return null; // Add this line to provide a return value
        }
        return null; // Add this line to provide a return value if the condition is not met
      });
      
      setFinalData(array);
      toast.success(res?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      StoreCookie.setItem("user_details", JSON.stringify(res?.data?.user_data));
      setmessage(res?.data?.message);
      setInitialData({
        first_name: "",
        last_name: "",
        email: "",
        emergencyNumber: ""
      })
      setToggle(false)
      setTimeout(() => setmessage(""), 2000);
    }
    else{
      setFinalData(emergencyData)
    }
  };

  return (
    <>
        <SimpleBackdrop open={loading} />

      <div className="page-title">
        <h1>
          Add Emergency Contact
          <button onClick={() => handleClick()} type="button">
            <img src="/images/Add-Button-White.svg" alt="button" />
          </button>
        </h1>
      </div>
      {toggle === true ? (
        <Formik
          initialValues={initialData}
          enableReinitialize={true}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleSubmitForm(values,values?.id?values?.id:"",values?.id?3:1);
          }}
        >
          {(props) => (
            <>
              <div className="my-profile-form">
                <div className="title-block">
                </div>
                <form onSubmit={props.handleSubmit}>
                  <div className="input-block">
                    <div className="inputs-wrapper">
                      <div className="input-item">
                        <label>First name</label>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name*"
                          onChange={props?.handleChange}
                          value={props?.values?.first_name}
                        />
                        <span className="error">
                          {props?.errors?.first_name
                            ? props?.errors?.first_name
                            : ""}
                        </span>
                      </div>
                      <div className="input-item">
                        <label>Last name</label>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name*"
                          onChange={props?.handleChange}
                          value={props?.values.last_name}
                        />
                        <span className="error">
                          {" "}
                          {props?.errors?.last_name
                            ? props?.errors?.last_name
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Emergency number</label>
                    <input
                      type="text"
                      name="emergencyNumber"
                      placeholder="Emergency Number*"
                      onChange={props?.handleChange}
                      value={props?.values?.emergencyNumber}
                    />
                    <span className="error">
                      {props.errors.emergencyNumber
                        ? props.errors.emergencyNumber
                        : ""}
                    </span>
                  </div>
                  <div className="input-block">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      onChange={props?.handleChange}
                      value={props?.values?.email}
                    />
                    <span className="error">
                      {" "}
                      {props?.errors?.email ? props?.errors?.email : ""}
                    </span>
                  </div>
                  <div className="input-block">
                    {/* <span className="error">{loading ? "Loading..." : ""}</span> */}
                    <span className="error">{message ? message : ""}</span>
                  </div>
                  <div className="submit-block">
                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
            </>
          )}
        </Formik>
      ) : (
        ""
      )}
      {loading === true ? <TableSkeleton /> :
        <>
          {finalData?.length > 0 ?
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{t('MyClinicians.tableCell1')}</TableCell>
                  <TableCell>{t('MyClinicians.tableCell2')}</TableCell>
                  <TableCell>{t('MyClinicians.tableCell3')}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {finalData?.map(el => {
                  return <TableRow key={el?.id}>
                    <TableCell className='user-profile-cell'>
                      {`${el?.metaData.first_name} ${el?.metaData.last_name}`}
                    </TableCell>
                    <TableCell>
                      <Email email={el?.metaData?.email_address} />
                    </TableCell>
                    <TableCell>
                      <Phone number={el?.metaData?.mobile_number} />
                    </TableCell>
                    <TableCell align="center" > <button onClick={() => handleClickEdit(el?.metaData, el.id, 3)}><EditIcon/><img src="" alt="" /> </button></TableCell>
                    <TableCell align="center" > <button onClick={() => handleSubmitForm(el?.metaData, el.id, 2)}> <DeleteIcon /><img src="" alt="" /> </button></TableCell>
                    
                  </TableRow>
                })}
              </TableBody>
            </Table>
            : <>{t('MyClinicians.notAdd')}</>}
        </>
      }
    </>
  );
};

export default EmergencyContacts;
