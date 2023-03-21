import { createContext, useState} from "react";
import { BodyObject } from "../Utility/DefaultObject";

export const UserContext = createContext();
export const UserBodyContext = createContext();


const UserBodyContextProvider = ({ children }) => {

  // the value that will be given to the context
  
  const[userBodyData,
    // SetDailyBodyData
  ] = useState({
    data:[BodyObject],
    type:'',
    user:{},
    version:'',
    _id:''
});
  // fetch a user from a fake backend API
  // useEffect(() => {
  //   async function fetchData() {
  //       await GetUserHeartRateData(currentUserData,Date,"hourly").then(response => response.data).then(response =>{
  
  //         // setHeartRateValue(response);
  //       })
  //  }
  
  //  fetchData();
  // }, []);

  return (
    // the Provider gives access to the context to its children
    <UserBodyContext.Provider value={userBodyData?.data[0]}>
      {children}
    </UserBodyContext.Provider>
  );
};

export { UserBodyContextProvider };