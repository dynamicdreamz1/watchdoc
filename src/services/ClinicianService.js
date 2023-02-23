import axios from "axios"
let token = sessionStorage.getItem('token')

export const searchClinician = async (data) => {


    try {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_ENDPOINT}user/clinician?clinician_name=${data.clinician_name}&practice_name=${data.practice_name}&zip=${data.zip}&limit=5`,

            headers: {
                
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }

        })
        
        return response;
    } 
    catch (error) {
        return error;
    }
}

export const addDoctor=async(ID)=>{
    // console.log(typeof ID.toString())
    try {
        const response = await axios({
            method: 'post',
            data:ID.toString(),
            url:`${process.env.REACT_APP_ENDPOINT}user/add_clinician`,
            headers: {
                
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }

        })
        return response;
    }

    catch(error){
        return error;
    }

}