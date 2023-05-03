import { getAllPatients } from "../../../services/AdminService";
import { getCurrentUserData } from "../../../services/UserService";
import { LOADING, PATIENT_DETAILS, USER_DETAILS } from "../actionConstant/ActionConstant";




function IsLoading(type) {
  return {
    type: LOADING,
    payload: type,
  };
}


export const getAllLoginUserData = () => async (dispatch) => {

  try {
    // dispatch(IsLoading(true))
    const result = getCurrentUserData()
    dispatch({
      type: USER_DETAILS,
      payload: result,
    });
    // dispatch(IsLoading(false))

  } catch (error) {
    return error;
  }

};

