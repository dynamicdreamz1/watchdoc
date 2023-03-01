import axios from "axios"
import { StoreCookie } from "../Utility/sessionStore"

export const getCurrentUser = () => {
    return StoreCookie.getItem("token");
  };
  
  export  const getCurrentUserData = () => {
  
    return StoreCookie.getItem("user_details");
  
  };
  
export const getCurrentUserRole=()=>{
    return StoreCookie.getItem("role");
}

export const getCurrentUserIsActive=()=>{
    return StoreCookie.getItem("is_active");
}

let token = StoreCookie.getItem('token')

let headersWithToken ={
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    Authorization: `Bearer ${token}`
}


export const RegisterMobNumber = async (data) => {
    try {
        // let token = StoreCookie.getItem('token')
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}user/mobile_number_verify`,
            data: data,
            headers: headersWithToken
        })
        return response;
    } catch (error) {
        return error;
    }
}


export async function ProfileCreation(data) {
    try {
        let token = StoreCookie.getItem('token')
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/upsertprofile`,
            data: data,
            headers: { "Content-Type": "multipart/form-data", Accept: "application/json", Authorization: `Bearer ${token}` },
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
        return response.data;
    } catch (error) {
        return error.response.data.message;
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
        console.log(error);
        return error.response.data;
    }
}

export const VerifyMobileNumber = async (data) => {
    try {
        let token = StoreCookie.getItem('token')
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
        return error?.response?.data?.message;
    }
}



export const logout = () => {
    StoreCookie.removeItem("token");
    StoreCookie.removeItem("profileCheck");
    StoreCookie.removeItem("user_details");
    StoreCookie.removeItem("role");
    StoreCookie.removeItem("is_active");
    //const response = await axios.post(API_ENDPOINT + "signout");
    return true;
  };