import axios from "axios"
import { headersAdmin } from "../Utility/functions"
import { StoreCookie } from "../Utility/sessionStore"


export const getStaffUsers = async (recordPerPage,currentPage) => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getstaffusers?limit=${recordPerPage}&page=${currentPage}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}


export const getPendingClinicians = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?query=clinicians-pending`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}


export const getAllClinicians = async (dataLimit,currentPage) => {
    // https://raq.dynamicdreamz.com/watchdoc-app/api/admin/getallclinician?limit=5&page=${currentPage}
    
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?limit=${dataLimit}&page=${currentPage}`,
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
            data:apiData,
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
            data:apiData,
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
            data:data,
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
            data:data,
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

export const getAllPatients = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/allpatients`,
            headers:headersAdmin
        })
        return response
    } catch (error) {
        return error
    }

}

export const getPendingPatients = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?query=pending-patients`,
            headers:headersAdmin
        })
        return response
    } catch (error) {
        return error
    }

}