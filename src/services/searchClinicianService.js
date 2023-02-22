import axios from "axios"

export const searchClinician = () => {

    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_searchClinician}`,
        // data: data,
        // headers: { "Content-Type": "multipart/form-data", Accept: "application/json, text/plain, */*", Authorization: `Bearer ${token}` },

    })

        .then((response) => {

            console.log(response)
            return response

        })

        .catch((error) => {
            console.log(error)
            throw error
        })

}