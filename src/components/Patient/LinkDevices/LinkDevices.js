import React from "react";
import { connectDevice } from "../../../services/PatientsService";
import { getCurrentUserData } from "../../../services/UserService";
import { getProviderTerraId } from "../../../services/PatientsService";
import { useTranslation } from "react-i18next";
import { ConnectDeviceData } from "../../../Utility/DefaultObject";

export default function LinkDevices() {
  const [loading, setLoading] = React.useState(false);
  const [terraId, setTerraId] = React.useState([]);
  const finalId = terraId?.data?.map((item) => item?.provider);
  const { t } = useTranslation();

  const onConnect = (e, type) => {
    const userData = getCurrentUserData();
    const data = {
      providers: type,
      reference_id: userData?.id,
    };
    setLoading(true);
    connectDevice(data)
      .then((res) => {
        setLoading(false);
        if (res.data.status == "success") {
          window.open(res.data.url, "_blank");
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  React.useEffect(() => {
    async function fetchData() {
      const result = await getProviderTerraId();
      setTerraId(result);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="devices-wrapper">
        {loading ? (
          <div className="LoginError">{t("EditProfilePage.loader.l1")}</div>
        ) : (
          ""
        )}
        <br />

        {ConnectDeviceData?.map((el) => {
          console.log("ConnectDevice",el);
          return (
            <div className="device-block">
              <div className="text-block d-flex align-items-center">
                <span className="icon d-flex justify-content-center">
                  <img src={el?.img} alt="Fitbit Icon" />
                </span>
                <span className="text">{el?.lable}</span>
              </div>
              <div className="btn-block">
                <button
                  onClick={(e) => onConnect(e, el?.type)}
                  type="button"
                  className="btn"
                >
                  Connect
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
