import React, { useContext, useEffect } from "react";
import Analysis from "./components/Analysis";
import Timings from "./components/Timings";
import vader from "vader-sentiment";
import NewAnalysis from "./components/NewAnalysis";
import ChatContext from "./context/chatContext";

export default function App() {
  const chatContext = useContext(ChatContext);
  const { chat } = chatContext;
  const rowData = [];

  const hours = [];
  var intensity = { pos: 0, neu: 0, neg: 0 };
  var name = "";

  if (chat) {
    for (let item of chat["messages"]) {
      try {
        const content = item["content"] ? item["content"] : "";
        const timestamp = item["timestamp_ms"];
        const hour = new Date(timestamp).getHours();
        rowData.push(content);
        hours.push(hour);
      } catch (e) {
        console.log(e);
      }
    }
    name = chat["title"];

    intensity = vader.SentimentIntensityAnalyzer.polarity_scores(
      rowData.join(" ")
    );
  }
  return (
    <>
      <NewAnalysis />
      <Analysis name={name} intensity={intensity} />
      <Timings hours={hours} />
    </>
  );
}
