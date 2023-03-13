import axios from "axios"
import { headersClinician } from "../Utility/functions";

export const searchClinician = async (data) => {


    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}user/clinician?clinician_name=${data.clinician_name}&practice_name=${data.practice_name}&zip=${data.zip}&limit=&page=`,
            headers: headersClinician
        })

        return response;
    }
    catch (error) {
        return error;
    }
}

export const addDoctor = async (data) => {

    try {
        const response = await axios({
            method: 'post',
            data: data,
            url: `${process.env.REACT_APP_ENDPOINT}user/desert_clinician`,
            headers: headersClinician

        })
        return response;
    }

    catch (error) {
        return error;
    }

}

export const getClinicianData = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}user/get_related_clinician`,
            headers: headersClinician
        })

        return response
    } catch (error) {
        throw error
    }
}