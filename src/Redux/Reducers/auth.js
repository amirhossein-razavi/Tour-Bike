import * as ActionTypes from '../actions/ActionTypes';

const Auth = (state = { username: '', password: '', repeatPass: '', email: '' }, action) => {
    switch (action.type) {
        case (ActionTypes.ON_LOGIN_CHNAGE): {
            const { prop, val } = action.payload;
            return {
                ...state,
                [prop]: val
            };
        }
        default:
            return state;
    }
};

export { Auth as default };