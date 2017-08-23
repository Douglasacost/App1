//Actions will be here. Please define the actions and later use them in actions creator functions.
import * as Types from '../constants/ActionTypes';

export const setState = (state) => {
    return {
        type: Types.SET_STATE,
        state
    };
}
export function setMessage() {
    console.log("HERE")
    return {
      meta: {remote: true},
      type: 'SET_MESSAGE',
      message: "REMOTE MESSAGE"
    };
  }