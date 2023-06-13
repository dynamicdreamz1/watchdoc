import React from "react";
import { connectDevice } from "../../../services/PatientsService";
import { getCurrentUserData } from "../../../services/UserService";

export default function LinkDevices() {
  const onConnect = (e, type) => {
    const userData = getCurrentUserData();
    const data = {
      providers: type,
      reference_id: userData?.id,
    };
    connectDevice(data)
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <>
      <div className="devices-wrapper">
        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Fitbit-icon.svg" alt="Fitbit Icon" />
            </span>
            <span className="text">Fitbit</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "FITBIT")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img
                src="/images/Apple-Health-icon.svg"
                alt="Apple Health Icon"
              />
            </span>
            <span className="text">Apple Health</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "APPLE")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Garmin-icon.svg" alt="Garmin Icon" />
            </span>
            <span className="text">Garmin</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "GARMIN")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Google-FIt-icon.svg" alt="Google Fit Icon" />
            </span>
            <span className="text">Google FIt</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "GOOGLE")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Oura-icon.svg" alt="Oura Icon" />
            </span>
            <span className="text">Oura</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "OURA")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Samsung-icon.svg" alt="Samsung Icon" />
            </span>
            <span className="text">Samsung</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "SAMSUNG")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="device-block">
          <div className="text-block d-flex align-items-center">
            <span className="icon d-flex justify-content-center">
              <img src="/images/Withings-icon.svg" alt="Withings Icon" />
            </span>
            <span className="text">Withings</span>
          </div>
          <div className="btn-block">
            <button
              onClick={(e) => onConnect(e, "WITHINGS")}
              type="button"
              className="btn"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
