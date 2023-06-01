import React from "react";
import { REMINDER_TYPE_ARRAY } from "../../../Utility/DefaultObject"

export default function HighHeartrateOverlay({ actionReminderTypeOption }) {
  const { setOpenReminder, setreminderType } = actionReminderTypeOption 
  const handleClickOpen = (type) => {
    setreminderType(type)
    setOpenReminder(true);
  };
  
  return (
    <>
      <div className="high-heart-rate">
        <div className="dialog-title">
          <h2>Reminder Type</h2>
          <p></p>
        </div>
        <form>
          {REMINDER_TYPE_ARRAY?.map((el, I) => {
            return (
              <>
              <div className="reminder-card" key={I}>
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
                    <h4>{el?.name}</h4>
                  </div>
                  <div className="reminder-date submit-block-data">
                    <button onClick={() => handleClickOpen(el?.reminder_type)}>
                      {el?.buttonText}
                    </button>
                  </div>
                </div>
              </div>
              <br/>
              </>
            );
          })}
        </form>
      </div>
    </>
  );
}
