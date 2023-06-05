import { Formik } from "formik";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { t } from "i18next";
import * as Yup from "yup";
import { AddEmergencyContact } from "../../services/PatientsService";
import { toast } from "react-toastify";
import {  getEmergencyContact } from "../../Utility/functions";
import { TableSkeleton } from "../../Utility/Skeleton";
import UserProfile from "../common/UserProfile";
import Email from "../common/Table/Email";
import Phone from "../common/Table/Phone";

const EmergencyContacts = () => {
    const emergencyData = getEmergencyContact()
  const [initialData] = useState({
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
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    last_name: Yup.string()
      .required("This field is required*")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    emergencyNumber: Yup.string()
      .required(t("SignUpPage.validation.common1"))
      .matches(phoneRegExp, t("SignUpPage.validation.mobile.v1"))
      .min(10, t("SignUpPage.validation.mobile.short"))
      .max(10, t("SignUpPage.validation.mobile.long")),
    email: Yup.string()
      .required("Email Is Required")
      // eslint-disable-next-line no-useless-escape
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please Enter Valid Email"
      ),
  });

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleSubmitForm = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("mobile_number", data?.emergencyNumber);
    formData.append("email_address", data?.email);
    formData.append("action", "insert");

    const res = await AddEmergencyContact(formData);
    if (res?.status === 200) {
      setLoading(false);
      toast.success(res?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setmessage(res?.data?.message);
      setTimeout(() => setmessage(""), 2000);
    }
  };

  return (
    <>
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
            handleSubmitForm(values);
          }}
        >
          {(props) => (
            <>
              <div className="my-profile-form">
                <div className="title-block">
                  {/* <h2>Emergency Contact</h2> */}
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
                    <span className="error">{loading ? "Loading..." : ""}</span>
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
                        {emergencyData?.length > 0 ?
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{t('MyClinicians.tableCell1')}</TableCell>
                                        <TableCell>{t('MyClinicians.tableCell2')}</TableCell>
                                        <TableCell>{t('MyClinicians.tableCell3')}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {emergencyData?.map(el => {
                                        return <TableRow>
                                            <TableCell className='user-profile-cell'>
                                               {`${el.metaData.first_name} ${el.metaData.last_name}`}
                                            </TableCell>
                                            <TableCell>
                                                <Email email={el?.metaData?.email_address} />
                                            </TableCell>
                                            <TableCell>
                                                <Phone number={el?.metaData?.mobile_number} />
                                            </TableCell>
                                            <TableCell align="center" > <button > Delete<img src="" alt="" /> </button></TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table> : <>{t('MyClinicians.notAdd')}</>}
                    </>
                }
    </>
  );
};

export default EmergencyContacts;
