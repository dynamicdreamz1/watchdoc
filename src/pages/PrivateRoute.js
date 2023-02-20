
import { Navigate } from "react-router-dom";


function PrivateDashboard({ Component }) {
   

    let ProfileCheck = sessionStorage.getItem('profile')
    let token=sessionStorage.getItem('token');
    // console.log(token)

    if ( ProfileCheck==='1' && token ) {
        return <Component />;
    }

    else {
        return <Navigate to="/" />;
    }


}

export default PrivateDashboard;


