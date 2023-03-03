import { createContext, useEffect, useState } from "react";
import { GetUserDailyBodyData } from "../services/HelthData";
import { BodyObject } from "../Utility/DefaultObject";

export const UserContext = createContext();
export const UserBodyContext = createContext();




const UserBodyContextProvider = ({ children }) => {
  // the value that will be given to the context
  
  const[userBodyData,SetDailyBodyData] =useState({
    data:[BodyObject],
    type:'',
    user:{},
    version:'',
    _id:''
});

  // fetch a user from a fake backend API
  useEffect(() => {
    async function fetchData() {
        await GetUserDailyBodyData().then(response => response?.data?.requested_data ).then(response =>{
            
            
            SetDailyBodyData({...response});
        })
   }

   fetchData();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserBodyContext.Provider value={userBodyData?.data[0]}>
      {children}
    </UserBodyContext.Provider>
  );
};

export { UserBodyContextProvider };