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

  const onDeleteNote = (idToDelete) => {
    /* For each note, we're lokking at the note id,and if is not equal to 
   "idToDelete" then is going to stay in the array (true), otherwise is 
   going to get delete (false)
   */
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
