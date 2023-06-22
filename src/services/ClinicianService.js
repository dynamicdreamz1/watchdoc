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

export const getClinicianData = async (currentPage,dataLimit,search) => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}user/get_related_clinician?limit=${dataLimit}&search=${search}&page=${currentPage}`,
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
export const reviewUserProfileAlert = async (data) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/review_user_profile_alert`
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

export const getAllProfileAlert = async (id,limit,currentPage) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_all_alert?user_id=${id}&limit=${limit}&page=${currentPage}`
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






export const getCriticalAlertUnreviewed = async (currentPage,limit,search) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_critical_alert_unreviewed?limit=${limit}&page=${currentPage}&search=${search}`
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


export const getCriticalAlertReviewed = async (limit,currentPage,search) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/get_critical_alert_reviewed?limit=${limit}&page=${currentPage}&search=${search}`
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



export const UnreviewedToReviewedAlerts = async (data) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}clinician/review_critical_alert`
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

export async function UpdateClinicianProfile(data) {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}clinician/clinician_update_profile`,
            data: data,
            headers: headersClinician,
        })
        return response;
    } catch (error) {
        return error;
    }
}
