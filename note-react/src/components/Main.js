import React from "react";

function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus placeholder="Note Title" />
        <textarea id="body" placeholder="Write your note here..." />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Preview Title</h1>
      </div>
    </div>
  );
}

export default Main;
