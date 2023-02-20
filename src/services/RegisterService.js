import axios from "axios"

export function RegisterUser(data) {

    // console.log(data)
    return axios({
        method: "post",
        url: `${process.env.REACT_APP_Register}`,
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



