import React from "react";
import { useTranslation } from "react-i18next";
// import ReminderOptions from "../../Patient/Reminder/ReminderOptions";

export default function HighHeartrateOverlay({setOpenReminder}) {

  const {t}=useTranslation()
  const handleClose = () => {
    setOpenReminder(false);
  };

  const handleClickOpen = () => {
    setOpenReminder(true);
  };
  return (
    <>
      <div  className="high-heart-rate">
        <div className="dialog-title">
          <h2>Reminder Type</h2>
          <p></p>
        </div>
        <form>
            <div className="reminder-card">
              {/* <ReminderOptions /> */}
              <div className="icon-block">
                <div className="reminder-icon">
                  <img
                    src="/images/person-weight-icon.svg"
                    alt="Person Weight Icon"
                  />
                </div>
              </div>
              <div className="content-block">
                <div className="r-title">
                  <h4>MEDICATION</h4>
                </div>
                <div className='reminder-date'>
                    <button onClick={handleClickOpen}>Add Reminder</button>
                </div>
              </div>
            
            </div>
            <br/>
            <div className="reminder-card">
              {/* <ReminderOptions /> */}
              <div className="icon-block">
                <div className="reminder-icon">
                  <img
                    src="/images/person-weight-icon.svg"
                    alt="Person Weight Icon"
                  />
                </div>
              </div>
              <div className="content-block">
                <div className="r-title">
                  <h4>WEIGHT</h4>
                </div>
                <div className='reminder-date'>
                    <button onClick={handleClickOpen}>Add Reminder</button>
                </div>
              </div>
            </div>
            <br/>
            <div className="reminder-card">
              {/* <ReminderOptions /> */}
              <div className="icon-block">
                <div className="reminder-icon">
                  <img
                    src="/images/person-weight-icon.svg"
                    alt="Person Weight Icon"
                  />
                </div>
              </div>
              <div className="content-block">
                <div className="r-title">
                  <h4>BLOOD PRESSURE</h4>
                </div>
                <div className='reminder-date'>
                    <button onClick={handleClickOpen}>Add Reminder</button>
                </div>
              </div>
            </div>
            <br/>
            <div className="reminder-card">
              {/* <ReminderOptions /> */}
              <div className="icon-block">
                <div className="reminder-icon">
                  <img
                    src="/images/person-weight-icon.svg"
                    alt="Person Weight Icon"
                  />
                </div>
              </div>
              <div className="content-block">
                <div className="r-title">
                  <h4>CUSTOME</h4>
                </div>
                <div className='reminder-date'>
                    <button onClick={handleClickOpen}>Add Reminder</button>
                </div>
              </div>
            </div>
            <br/>
        </form>
      </div>
    </>
  );
}
