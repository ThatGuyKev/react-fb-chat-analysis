import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { SET_CHAT } from "./types";

const ChatState = (props) => {
  const initialState = {
    chat: null,
    isFetching: false,
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Get Orders
  const setChat = (chat) => {
    dispatch({
      type: SET_CHAT,
      payload: chat,
      isFetching: true,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chat: state.chat,
        setChat,
        isFetching: state.isFetching,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
