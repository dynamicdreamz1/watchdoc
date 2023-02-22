import axios from "axios"

export const VerifyMobileService= (data) => {
    // console.log(data)
    let token = sessionStorage.getItem('token')

    return axios({

        method: 'post',
        url: `${process.env.REACT_APP_mobile_number_VerificationCode}`,
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