import axios from "axios"

export function Verify(data) {

    // console.log(data)
   return axios({
        method: 'post',
        url: `${process.env.REACT_APP_Verification}`,
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