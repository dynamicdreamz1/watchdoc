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


export const getFilteredClinicians = async (page,pageCount) => {
    
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}admin/getallclinician?limit=${pageCount}&page=${page}`,
            headers: headersAdmin
        })
        return response
    } catch (error) {
        return error
    }
}