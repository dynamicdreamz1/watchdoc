import axios from "axios"

export const RegisterMobNumber = async (data) => {
    try {
        let token = sessionStorage.getItem('token')
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}user/mobile_number_verify`,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`

            }
        })
        return response;
    } catch (error) {
        return error;
    }
}


export async function ProfileCreation(data) {
    try {
        let token = sessionStorage.getItem('token')
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/createprofile`,
            data: data,
            headers: { "Content-Type": "multipart/form-data", Accept: "application/json, text/plain, */*", Authorization: `Bearer ${token}` },
        })
        return response;
    } catch (error) {
        return error;
    }
}


export async function RegisterUser(data) {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}register`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" }
        })
        return response;
    } catch (error) {
        return error;
    }
}


export const userConsent = async (data) => {
    try {
        let token = sessionStorage.getItem('token')
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}user/user_terms`,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`

            }
        })
        return response;
    } catch (error) {
        return error;
    }
}


export async function VerifyEmail(data) {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/verification`,
            data: data,
            headers: { "Content-Type": "multipart/form-data", Accept: "application/json" }
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const VerifyMobileNumber = async (data) => {
    try {
        let token = sessionStorage.getItem('token')
        const response = await axios({

            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/check_mobile_verification`,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`

            }
        })
        return response;
    } catch (error) {
        return error;
    }
}


