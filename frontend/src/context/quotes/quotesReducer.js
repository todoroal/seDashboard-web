import {
    GET_QUOTES
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case GET_QUOTES:
            return {
                ...state,
                quotes: action.payload,
                loading: action.payload.length > 0 ? false : true
            }
        default:
            return state;

    }


}