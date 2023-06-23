




//------------------------------------------- updated on 23-06-2023------------------------
import { useNavigate } from "react-router-dom";
import { StoreCookie } from "../Utility/sessionStore";
import { useEffect } from "react";
import { getCurrentUserData } from "../services/UserService";



function PrivateRoute({ Component, allowedRoles }) {
  let token = StoreCookie.getItem('token')
  const navigate = useNavigate();
  const userData = getCurrentUserData();
  useEffect(() => {
    if (!token) {
      navigate(`/signin`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (token) {
    if (allowedRoles?.includes(userData?.roles[0]?.name)) {
      return <Component />
    }
    else {
      navigate('/dashboard')
    }
  }
}
export default PrivateRoute;







// ----------------------old Code ---------------------------------------------------

// import { useNavigate } from "react-router-dom";
// import { StoreCookie } from "../Utility/sessionStore";
// import { useEffect } from "react";



// function PrivateRoute({ Component }) {
// let token = StoreCookie.getItem('token')
//   const navigate = useNavigate();
    
//     useEffect(() => {
//         if (!token) {
//           navigate(`/signin`);
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, [token]);
    
//     if (token) {
//         return <Component />;
//     }      

// }


// export default PrivateRoute;








