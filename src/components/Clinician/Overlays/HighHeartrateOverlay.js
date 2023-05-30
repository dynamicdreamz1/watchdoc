import React from "react";

export default function HighHeartrateOverlay({ actionReminderTypeOption }) {
  const { setOpenReminder, setreminderType } = actionReminderTypeOption
  const reminderTypeArray = [
    {
      id: 3,
      name: "MEDICATION",
      buttonText: "Add Reminder",
      reminder_type: "medication"
    },
    {

      id: 1,
      name: "WEIGHT",
      buttonText: "Add Reminder",
      reminder_type: "weight"
    },
    {
      id: 2,
      name: "BLOOD PRESSURE",
      buttonText: "Add Reminder",
      reminder_type: "blood_pressure"
    },

    {
      id: 4,
      name: "CUSTOME",
      buttonText: "Add Reminder",
      reminder_type: "custome"
    },
  ];

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
          {reminderTypeArray?.map((el, I) => {
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
