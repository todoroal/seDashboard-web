import {
    GET_NEWS
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: action.payload.length > 0 ? false : true
            }
        default:
            return state;

    }


}