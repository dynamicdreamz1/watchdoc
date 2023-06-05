import axios from "axios";
import { headersClinician } from "../Utility/functions";

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