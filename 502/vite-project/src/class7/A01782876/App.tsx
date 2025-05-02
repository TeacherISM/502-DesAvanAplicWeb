import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Class 7: Real-Time Updates with WebSockets.</h1>

      <Chat />
    </div>
  );
};

export default App;
