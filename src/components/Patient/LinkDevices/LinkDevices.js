import React from "react";
import { connectDevice, disconnectDevice } from "../../../services/PatientsService";
import { getCurrentUserData } from "../../../services/UserService";
import { getProviderTerraId } from "../../../services/PatientsService";
import { useTranslation } from "react-i18next";
import { ConnectDeviceData } from "../../../Utility/DefaultObject";
import { Backdrop, CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

export default function LinkDevices() {
  const [loading, setLoading] = React.useState(false);
  const [terraId, setTerraId] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const finalId = terraId?.data?.map((item) => item?.provider);
  const { t } = useTranslation();

  const onConnect = (e, type) => {
    const userData = getCurrentUserData();
    const formData = new FormData();
    formData.append("providers", type);
    formData.append("reference_id", userData?.id);
    formData.append("auth_success_redirect_url", "http://localhost:3000/editlinkdevice");
    setLoading(true);
    connectDevice(formData)
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          window.open(res.data.url, "_blank");
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };


  const onDisconnect = async(e,type) =>{
    setOpen(true);
    const newArray = terraId.data.filter(function (el) {return el.provider === type});
    const formData = new FormData();
    formData.append("user_id", newArray[0].terra_id);
    formData.append("id", newArray[0].id);

    disconnectDevice(formData)
      .then(async(res) => {
        if (res.data.status === "success") {
          await fetchData();
          toast.success(`Device disconnected successfully`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      })}

    const  fetchData = async() => {
        const result = await getProviderTerraId();
        setTerraId(result);
      }

  React.useEffect(() => {
   
    fetchData();
  }, []);

  return (
    <>
        <ToastContainer />

      <div className="devices-wrapper">
      <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

        {loading ? (
          <div className="LoginError">{t("EditProfilePage.loader.l1")}</div>
        ) : (
          ""
        )}
        <br />

        {ConnectDeviceData?.map((el) => {
          
          return (
            <>
           <div>   
    </div>
            <div className="device-block">
              <div className="text-block d-flex align-items-center">
                <span className="icon d-flex justify-content-center">
                  <img src={el?.img} alt="Fitbit Icon" />
                </span>
                <span className="text">{el?.lable}</span>
              </div>
              { finalId?.includes(el?.type) === true ?  <div className="btn-block">
                <button
                  onClick={(e) => onDisconnect(e, el?.type)}
                  type="button"
                  className="btnData"
                >
                 Connected
                </button>
              </div>:  <div className="btn-block">
                <button
                  onClick={(e) => onConnect(e, el?.type)}
                  type="button"
                  className="btn"
                >
                 Connect
                </button>
              </div>}
             
            </div>
            </>
          );  
        })}
      </div>
    </>
  );
}
