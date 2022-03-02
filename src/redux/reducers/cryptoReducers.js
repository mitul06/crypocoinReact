import { CRYPO_COINS, CRYPO_COINS_FAILED, CRYPO_COINS_SUCCESS } from "../actions/crypoTypes"

const initialState = {
    success : false,
    error : false,
    data: null
}

export const cryptoReducers = (state = initialState, action) => {
    switch (action.type) {
        case CRYPO_COINS:
            return {
                ...state,
                success: false,
                error: false,
                data: null
            }
        
        case CRYPO_COINS_SUCCESS: 
            return {
                ...state,
                success:true,
                error: false,
                data: action.payload
            }

        case CRYPO_COINS_FAILED:
            return {
                ...state,
                success:false,
                error: true,
                data: null
            }
    
        default:
            return state;
    }
}