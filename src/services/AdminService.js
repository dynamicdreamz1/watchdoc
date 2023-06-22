import axios from "axios"
import { headersAdmin } from "../Utility/functions"
import { StoreCookie } from "../Utility/sessionStore"


export const getStaffUsers = async (recordPerPage, currentPage,search) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getstaffusers?limit=${recordPerPage}&page=${currentPage}&search=${search}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export const deleteStaffUsers = async (id) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/delete_staff_users?user_id=${id}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export const getPendingClinicians = async (limit, pages,search) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?limit=${limit}&page=${pages}&query=clinicians-pending&search=${search}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export const getAllClinicians = async (dataLimit, currentPage,search) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?limit=${dataLimit}&page=${currentPage}&search=${search}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export async function UpdateUserProfile(data) {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}admin/updateprofile`,
            data: data,
            headers: headersAdmin,
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const UpdatePassword = async (apiData) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/upsert_password`,
            data: apiData,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export const CreateClinician = async (apiData) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}admin/upsertclinician`,
            data: apiData,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}

export const addStaffUser = async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}admin/upserprofile`,
            data: data,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}


export const editStaffUser = async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}admin/update_staff_users`,
            data: data,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}





let token = StoreCookie.getItem('token')

export const clinicanProfileUpdate = async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}admin/upsertclinician`,
            data: data,
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${token}`,
                contentType: "multipart/form-data"
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const getAllPatients = async (dataLimit, currentPage) => {
    const tempUrl = `https://raq.dynamicdreamz.com/watchdoc-app/api/admin/allpatients?limit=${dataLimit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }

}


export const allInOneClinicianList = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getclinicianlist?query=clinicians-pending`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}


export const getAdminCriticalAlertReviewed = async (limit,currentPage) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}admin/admin_critical_alert_reviewed?limit=${limit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,   
            headers: headersAdmin,
        })      
        return response
    } catch (error) {
        return error
    }

}

export const getAdminCriticalAlertunReviewed = async (currentPage,limit) => {
    const tempUrl = `${process.env.REACT_APP_ENDPOINT}admin/admin_critical_alert_unreviewed?limit=${limit}&page=${currentPage}`
    try {
        const response = await axios({
            method: 'get',
            url: tempUrl,   
            headers: headersAdmin,
        })      
        return response
    } catch (error) {
        return error
    }

}


export const getAllAdminPatient = async (currentPage,limit,search) => {
    console.log("currentPage,limit,search",currentPage,limit,search);
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/allpatients?limit=${limit}&page=${currentPage}&search=${search}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}
export const deletePatientAndClinician = async (data) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/delete_account?user_id=${data?.id}&role=${data?.role}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}





export const getParticularClinicianDetails = async (id) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/get_single_clinician?clinician_id=${id}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}



export const getParticulatClinicianPatient = async (id,currentPage,limit) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/admin_get_patient_request?clinician_id=${id}&limit=${limit}&page=${currentPage}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}




export const getParticulatClinicianApprovePatient = async (id,currentPage,limit) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/admin_get_approve_patient?clinician_id=${id}&limit=${limit}&page=${currentPage}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}





export const changePendingClinicianStatus = async (id) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/approve_clinician?clinician_id=${id}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}