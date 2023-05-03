import { LOADING,USER_DETAILS } from '../actionConstant/ActionConstant';








const initialState = {
    loading: false,
    alluserData: [],
    allPatient:[]

}



const loginUserDetail = (state = initialState, action) => {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case USER_DETAILS:
            return {
                ...state,
                alluserData: action.payload,
            }
        default:
            return state;



    }
}
export default loginUserDetail;
