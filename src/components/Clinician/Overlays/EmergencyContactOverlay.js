import React from "react";
import "../../../css/Dialog.css";

export default function EmergencyContactOverlay({ data }) {
  const emergencyContact = data?.user_data?.meta_data?.map((item) =>
    item.meta_key === "emergency_contact" ? JSON.parse(item?.meta_value) : null
  );

  return (
    <>
      <div className="dialog-title">
        <h2>Emergency Contacts</h2>
      </div>
      {emergencyContact?.length > 0  ? (
        emergencyContact?.map((emergency,I) => (
          <>
          {emergency != null ? 
          <> 
            <div class="card">
               <div className="emergency-content">
              <h5>
                {emergency?.first_name
                  ? emergency?.first_name
                  : emergency?.first_name}{" "}
                {emergency?.last_name
                  ? emergency?.last_name
                  : emergency?.last_name}
              </h5>
              <span>
                <a href="tel:0433 396 113">{emergency?.mobile_number}</a>
              </span>
              <span>
                <a href="mailto:trish@thefamousgroup.com.au">
                  {emergency?.email_address}
                </a>
              </span>
            </div> 
            </div>
            <br/>
            </>
            : ''  }</> 
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
}
