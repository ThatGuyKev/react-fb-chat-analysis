import React from "react";
import { render } from "react-dom";
import App from "./App";
import ChatState from "./context/chatState";

render(
  <ChatState>
    <App />
  </ChatState>,
  document.getElementById("root")
);
