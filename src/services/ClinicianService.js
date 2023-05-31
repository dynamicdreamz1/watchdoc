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

export const ClinicianGetPatientsRequest = async (dataLimit, currentPage) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_patient_request?limit=${dataLimit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,   
            headers: headersClinician
        })  
        return response
    } catch (error) {
        return error
    }

}

export const ClinicianGetApprovePatientsRequest = async (dataLimit, currentPage) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_patients?limit=${dataLimit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,   
            headers: headersClinician
        })  
        return response
    } catch (error) {
        return error
    }

}



export const ClinicianPatientStatus = async (data) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/approve_patient_request`
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




export const RelatedAllUserClinician = async (id,dataLimit, currentPage) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_users_clinician?user_id=${id}&limit=${dataLimit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,   
            headers: headersClinician,
        })  
        return response
    } catch (error) {
        return error
    }

}



export const StoreReminderData = async (data) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}user/store_reminder`
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




export const DeletereminderCard = async (data) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}user/delete_reminder`
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




