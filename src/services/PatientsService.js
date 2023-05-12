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