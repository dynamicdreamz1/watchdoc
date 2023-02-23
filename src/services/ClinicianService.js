import axios from "axios"

export const searchClinician = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}user/clinic`,
        })
        return response;
    } catch (error) {
        return error;
    }
}