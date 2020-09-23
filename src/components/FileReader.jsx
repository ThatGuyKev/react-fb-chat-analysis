import React, { useContext, useEffect, useState } from "react";
import Files from "react-files";
import ChatContext from "../context/chatContext";

const Reader = ({ onUpload: pushUpload }) => {
  const chatContext = useContext(ChatContext);

  const { chat, setChat } = chatContext;

  const fileReader = new FileReader();
  useEffect(() => {
    fileReader.onload = (event) => {
      setChat(JSON.parse(event.target.result));
    };
  });

  return (
    <div className="files">
      <Files
        className="files-dropzone"
        onChange={(file) => {
          fileReader.readAsText(file[0]);
          pushUpload();
        }}
        onError={(err) => console.log(err)}
        accepts={[".json"]}
        multiple
        maxFiles={3}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Drop files here or click to upload
      </Files>
    </div>
  );
};
export default Reader;
