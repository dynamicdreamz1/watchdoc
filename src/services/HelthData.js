/* eslint-disable no-unused-vars */
import axios from "axios";
import { StoreCookie } from "../Utility/sessionStore";

let token = StoreCookie.getItem('token')

let headers ={
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
}

let headersWithToken ={
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    Authorization: `Bearer ${token}`
}
export const GetUserDailyBodyData = async () =>{

    const data = {
        type:'body',
        userid:'2dc9fa77-6540-4be5-97b7-40174b43e77c'
    }

    try {
        
        const response = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_ENDPOINT}terra/userdata`,
            headers: headersWithToken,
            data: data,
        })
        return response;
    } catch (error) {
        return error;
    }
   

}
