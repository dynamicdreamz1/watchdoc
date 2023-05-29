import React from "react";
// import ReminderOptions from "../../Patient/Reminder/ReminderOptions";

export default function HighHeartrateOverlay({setOpenReminder}) {


const reminderTypeArray=[
  {
    id:1,
    name:"MEDICATION",
    buttonText:"Add Reminder"
  },
  {
    id:2,
    name:"WEIGHT",
    buttonText:"Add Reminder"
  },
   {
    id:3,
    name:"BLOOD PRESSURE",
    buttonText:"Add Reminder"
  },
  {
    id:4,
    name:"CUSTOME",
    buttonText:"Add Reminder"
  }
]








  const handleClose = () => {
    setOpenReminder(false);
  };

  const handleClickOpen = (name) => {
    console.log("1111111-bname",name)
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

          {reminderTypeArray?.map((el,I)=>{
            return(
              <div className="reminder-card" key={I}>
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
                  <h4>{el?.name}</h4>
                </div>
                <div className='reminder-date'>
                    <button onClick={()=>handleClickOpen(el?.name)}>{el?.buttonText}</button>
                </div>
              </div>     

            </div>    

            )
          })
            
}    
        </form>
      </div>
    </>
  );
}
