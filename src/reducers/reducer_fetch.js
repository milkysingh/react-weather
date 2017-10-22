import {
    FETCH_WEATHER
} from '../actions/index'
const defaultState = [];
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            {
                console.log("Action recieved " + action.payload);
                return [...state, action.payload.data]
            }
        default:
            {
                return state;
            }
    }

}