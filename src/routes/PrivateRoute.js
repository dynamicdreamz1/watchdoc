// import { Navigate } from "react-router-dom";


// function PrivateDashboard({ Component }) {


//     let ProfileCheck = sessionStorage.getItem('profile')
//     let token=sessionStorage.getItem('token');

//     if ( ProfileCheck==='1' && token ) {
//         return <Component />;
//     }

//     else {
//         return <Navigate to="/" />;
//     }


// }

// export default PrivateDashboard;

import { useNavigate } from "react-router-dom";
import { StoreCookie } from "../Utility/sessionStore";
import { useEffect } from "react";



function PrivateRoute({ Component }) {
let token = StoreCookie.getItem('token')
  const navigate = useNavigate();
    
    useEffect(() => {
        if (!token) {
          navigate(`/signin`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps

      }, [token]);
    
    if (token) {
        return <Component />;
    }      

}


export default PrivateRoute;





