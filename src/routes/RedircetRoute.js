import { useNavigate } from "react-router-dom";
import { StoreCookie } from "../Utility/sessionStore";
import { useEffect } from "react";



function RedircetRoute({ Component,redirectComponent }) {
let token = StoreCookie.getItem('token')
  const navigate = useNavigate();
    
    useEffect(() => {
        if (token) {
          navigate(`/${redirectComponent}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [token]);
    
    if (!token) {
        return <Component />;
    }      

}


export default RedircetRoute;