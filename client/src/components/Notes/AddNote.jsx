import React from "react";
import { useState } from "react";
import "./addNote.css";
import { useNavigate } from "react-router-dom";
const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const saveNoteHandler = async (event) => {
    event.preventDefault();
    const date = new Date();
    try {
      const response = await fetch("http://localhost:5000/api/note", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          text: noteText,
          date: date.toLocaleDateString(),
        }),
      });
      const responseData = await response.json();
      // console.log(responseData);
      if (!responseData.ok) {
        throw new Error(responseData.message);
      }
      navigate("/");
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
    setNoteText("");
  };

  return (
    <div className="new-note">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>100 characters remaining</small>
      </div>
      <button className="save" onClick={saveNoteHandler}>
        Save
      </button>
    </div>
  );
};

export default AddNote;
