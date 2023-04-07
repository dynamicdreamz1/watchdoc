import axios from "axios"
import { headersAdmin } from "../Utility/functions"


export const getStaffUsers = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getstaffusers?limit=5`,
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


export const getAllClinicians = async () => {
    
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}


export const getFilteredClinicians = async (data) => {
    
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?limit=${data?.pageCount}&page=${data?.page}`,
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