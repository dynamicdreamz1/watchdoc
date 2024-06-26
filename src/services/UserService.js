import axios from "axios"
import { headersUser,headers } from "../Utility/functions";
import { StoreCookie } from "../Utility/sessionStore"

export const getCurrentUser = () => {
    return StoreCookie.getItem("token");
};

export const getCurrentUserData = () => {
    return StoreCookie.getItem("user_details");
};

export const getCurrentUserRole = () => {
    return StoreCookie.getItem("role");
}

export const getCurrentUserIsActive = () => {
    return StoreCookie.getItem("is_active");
}
  
export const RegisterMobNumber = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}user/mobile_number_verify`,
            data: data,
            headers: headersUser
        })
        return response;
    } catch (error) {
        return error;
    }
}

export async function ProfileCreation(data) {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/upsertprofile`,
            data: data,
            headers: headersUser,
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export async function ProfileUpdate(data) {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/update_profile`,
            data: data,
            headers: headersUser,
        })
        return response;
    } catch (error) {
        throw error;
    }
}
export async function UserLogin(data) {
        try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}login`,
            data: data,
        })

        return response;
    } catch (error) {
        return error.response.data.message;
    }
}

export async function ForgotUserPassword(data) {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}forgot_password`,
            data: data,
        })

        return response;
    } catch (error) {
        return error.response.data.message;
    }
}

export async function ClinicianRegister(data) {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}clinician_signup`,
            data: data,
            headers: headers
        })

                return response;
    } catch (error) {
        return error.response.data.error;
    }
}

export async function RegisterUser(data) {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}register`,
            data: data,
            headers: headers
        })

        return response;
    } catch (error) {
        return error.response.data.message;
    }
}

export const userConsent = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_ENDPOINT}user/user_terms`,
            data: data,
            headers: headersUser
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
            headers: headers
        })
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}

export const VerifyMobileNumber = async (data) => {
    try {
        const response = await axios({

            method: 'post',
            url: `${process.env.REACT_APP_ENDPOINT}user/check_mobile_verification`,
            data: data,
            headers: headersUser
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
    StoreCookie.removeItem("name")
    return true;
};