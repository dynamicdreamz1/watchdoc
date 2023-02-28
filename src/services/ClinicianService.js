import axios from "axios"
import { StoreCookie } from "../Utility/sessionStore";

let token = StoreCookie.getItem('token')


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
    
  let id={
    id:ID.toString()
  }

  console.log(id)
    try {
        const response = await axios({
            method: 'post',
            data:id,
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

export const getClinicianData=async()=>{
   
    try {
        const response = await axios({
            method: 'get',
            url:`${process.env.REACT_APP_ENDPOINT}user/get_related_clinician`,
            headers: {
            
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }
            })

            return response
    } catch (error) {
        throw error
    }
}