import axios from "axios"

export const RegisterMobNumber = (data) => {

    let token = sessionStorage.getItem('token')
    // console.log(token)

    return axios({

        method: "post",
        url: `${process.env.REACT_APP_ENDPOINT}user/mobile_number_verify`,
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`

        }
    })

        .then((response) => {

            console.log(response)
            return response

        })


        .catch((error) => {
            console.log(error)
            throw (error)
        })

}


export function ProfileCreation(data) {

    // console.log(data)
    let token=sessionStorage.getItem('token')
    // console.log(token)

  return  axios({
        method: 'post',
        url: `${process.env.REACT_APP_ENDPOINT}user/createprofile`,
        data: data,
        headers: { "Content-Type": "multipart/form-data", Accept: "application/json, text/plain, */*", Authorization: `Bearer ${token}` },


    })

        .then((response) => {
    
                console.log(response)
                return response
             
            })

            
        .catch((error) => {
            console.log(error)
            throw (error.response.data.message)
        })

}


export function RegisterUser(data) {

    // console.log(data)
    return axios({
        method: "post",
        url: `${process.env.REACT_APP_ENDPOINT}register`,
        data: data,
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then((res) => {
            console.log(res)
            return res

        })

        .catch((error) => {

            console.log(error)
            throw (error.response.data.message)
    

        })

}


export const userConsent=(data)=>{
    // console.log(data)
    let token=sessionStorage.getItem('token')
    // console.log(token)

   return axios({
        method:"post",
        url:`${process.env.REACT_APP_ENDPOINT}user/user_terms`,
        data:data,
        headers:{
            "Content-Type":"multipart/form-data",
            "Accept":"application/json",
            Authorization:`Bearer ${token}`

        }
    })

    .then((response)=>{
        console.log(response)
        return response
    })

    .catch((error) => {

        console.log(error)
        throw error
    
    })


}


export function VerifyEmail(data) {

    // console.log(data)
   return axios({
        method: 'post',
        url: `${process.env.REACT_APP_ENDPOINT}user/verification`,
        data: data,
        headers: { "Content-Type": "multipart/form-data", Accept: "application/json" }
    })

        .then((response) => {

            console.log(response)
            return response
            
        })

        .catch((error) => {
            console.log(error)
            throw error.response.data
           
        })

}

export const VerifyMobileNumber= (data) => {
    // console.log(data)
    let token = sessionStorage.getItem('token')

    return axios({

        method: 'post',
        url: `${process.env.REACT_APP_ENDPOINT}user/check_mobile_verification`,
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`

        }
    })

    .then((res)=>{
        console.log(res)
        return res
    })

    .catch((error)=>{
        console.log(error)
        throw error
    })
}


