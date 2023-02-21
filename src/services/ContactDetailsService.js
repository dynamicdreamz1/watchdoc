import axios from "axios"

export const VerifyMobileN = (data) => {

    let token = sessionStorage.getItem('token')
    // console.log(token)

    return axios({

        method: "post",
        url: `${process.env.REACT_APP_mobile_number_verify}`,
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