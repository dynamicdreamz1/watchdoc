import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { MetaFormeting } from "../../../Utility/functions";

export const PatientProfileOverlay = ({ handleClose, data }) => {
  const { first_name, last_name, sex, dob, height, weight } = MetaFormeting(
    data?.user_data
  );
  const { t } = useTranslation();

  const handleSubmitForm = (data) => {
    handleClose();
  };

  return (
    <Formik
      initialValues={""}
      enableReinitialize={true}
      validationSchema=""
      onSubmit={(values) => {
        handleSubmitForm(values);
      }}
    >
      {(props) => (
        <>
          <div className="dialog-title">
            <h2>Profile</h2>
          </div>
          <form id="main_form">
            <div className="input-block">
              <label htmlFor="exampleInputFirstName">First name</label>
              <input
                type="text"
                name="firstName"
                placeholder={t("EditProfilePage.form.f13")}
                value={first_name}
                id="exampleInputFirstName"
              />
            </div>
            <div className="input-block">
              <label htmlFor="exampleInputLastName">Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder={t("EditProfilePage.form.f14")}
                value={last_name}
                id="exampleInputLastName"
              />
            </div>
            <div className="input-block">
              <label htmlFor="exampleInputDOB">Date of birth</label>
              <input type="text" name="dob" value={dob} id="exampleInputDOB" />
            </div>
            <div className="input-block">
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
            </div>
            <div className="input-block">
              <label htmlFor="exampleInputHeight">Height (cm)</label>
              <input
                type="text"
                name="height"
                placeholder={t("EditProfilePage.form.f16")}
                value={height}
                id="exampleInputHeight"
              />
            </div>
            <div className="input-block">
              <label>Email address</label>
              <input type="email" name="email" value={data?.user_data?.email} />
            </div>
            <div className="input-block">
              <label>Weight</label>
              <input type="email" name="email" value={weight} />
            </div>
            <div className="input-block country-code">
              <label id="country-code">Contact number</label>
              <div className="inputs-wrapper">
                <input
                  type="text"
                  name="number"
                  value={data?.user_data?.contact_number}
                ></input>
              </div>
            </div>
          </form>
        </>
      )}
    </Formik>
  );
};
