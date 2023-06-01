import React from "react";
import "../../../css/Dialog.css";
import { MetaFormeting } from "../../../Utility/functions";

export default function EmergencyContactOverlay({ data }) {
  const latestData = MetaFormeting(data?.user_data);
  const emergency = latestData?.emergency_contact
    ? JSON.parse(latestData?.emergency_contact)
    : null;

  return (
    <>
      <div className="dialog-title">
        <h2>Emergency Contacts</h2>
      </div>
      {emergency ? (
        <div className="emergency-content">
          <h5>
            {emergency?.first_name
              ? emergency?.first_name
              : emergency?.first_name}{" "}
            {emergency?.last_name ? emergency?.last_name : emergency?.last_name}
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
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
}
