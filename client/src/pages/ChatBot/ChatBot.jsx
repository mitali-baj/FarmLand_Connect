// npm install react-transition-group @material-ui/core @material-ui/icons

import React, { useContext, useState, useEffect } from "react";
import "./Chatbot.css";
import Header from "../../components/Header/Header";
import { PuffLoader } from "react-spinners";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to LegalAId! How can I assist you today?", sender: "assistant" },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: inputMessage, sender: "user" }]);
    setInputMessage("");

    // Add your code here to generate a response from the chatbot
    const response = "Sure, I can help you with that!";
    setMessages([...messages, { text: response, sender: "assistant" }]);
  };

  return (
    <div className="chatbot-container-wrapper bg-color">
      <Header/>
      <div className="chatbot-container">
        <div className="chat-header">
          <h2>LegalAId</h2>
        </div>
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            className="message-input"
            placeholder="Type your message here..."
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;