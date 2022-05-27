import * as ActionTypes from './ActionTypes';

export const onChange = (prop, val) => ({
  type: ActionTypes.ON_LOGIN_CHNAGE,
  payload: { prop, val },
});