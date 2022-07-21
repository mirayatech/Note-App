import React, { useState } from "react";
import uuid from "react-uuid";
import "./style/App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [notes, setNotes] = useState([]);

  // Notes
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
