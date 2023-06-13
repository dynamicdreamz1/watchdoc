import axios from "axios";
import { headersClinician } from "../Utility/functions";
// import fetch from 'node-fetch';


export async function getLatestMeasurement() {
    try {
        const response = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_ENDPOINT}me`,
            headers: headersClinician
            
        })

        return response;
    } catch (error) {
        return error.response.data.message;
    }
}

export async function getLatestpatientDetails(id) {
    try {
        const response = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_ENDPOINT}clinician/providers_with_profile?user_id=${id}`,
            headers: headersClinician
            
        })
        return response;
    } catch (error) {
        return error?.response?.data?.message;
    }
}

export const getProviderTerraId = async () => {
    try {
        const response = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_ENDPOINT}user/providers`,
            headers: headersClinician
        })
        return response;
    } catch (error) {
        return error;
    }
}



export const AddEmergencyContact=async(data)=>{
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}user/desert-emergency-contact`
    try {
        const response = await axios({
            method: 'post',
            url: tempUrl,   
            headers: headersClinician,
            data:data
        })  
        return response
    } catch (error) {
        return error
    }

}

export const connectDevice = async () => {
    // const options = {
    //     method: 'POST',
    //     headers: {
    //       accept: 'application/json',
    //       'dev-id': 'testingTerra',
    //       'content-type': 'application/json',
    //       'x-api-key': 'ussv5SAQ53a1nNTxsMr9G41zj2KUhYMk5eDU1hjG'
    //     },
    //     body: JSON.stringify({
    //       providers: 'GARMIN,WITHINGS,FITBIT,GOOGLE,OURA,WAHOO,PELOTON,ZWIFT,TRAININGPEAKS,FREESTYLELIBRE,DEXCOM,COROS,HUAWEI,OMRON,RENPHO,POLAR,SUUNTO,EIGHT,APPLE,CONCEPT2,WHOOP,IFIT,TEMPO,CRONOMETER,FATSECRET,NUTRACHECK,UNDERARMOUR',
    //       language: 'en'
    //     })
    //   };
      
    //   fetch('https://api.tryterra.co/v2/auth/generateWidgetSession', options)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       console.log("response", data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
  };