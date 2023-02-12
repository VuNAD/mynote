import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./notesList.css";
const NotesList = ({
  notes,
  addNoteHandler,
  deleteNoteHandler,
  editNoteHandler,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          isEdited={note.isEdited}
          deleteNoteHandler={deleteNoteHandler}
          editNoteHandler={editNoteHandler}
        />
      ))}
      <AddNote addNoteHandler={addNoteHandler} />
    </div>
  );
};

export default NotesList;
