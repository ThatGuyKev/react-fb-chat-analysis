import { SET_CHAT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        chat: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
