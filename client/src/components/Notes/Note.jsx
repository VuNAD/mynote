import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import "./note.css";
const Note = ({
  id,
  text,
  date,
  isEdited,
  deleteNoteHandler,
  editNoteHandler,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState(false);

  const editingNote = (
    <div>
      <div className="note-text-edit">{text}</div>
      <div className="note-footer-edit">
        <div className="note-date-edit">{date}</div>
        aaaaaaa
      </div>
    </div>
  );

  const addNewNote = (
    <div className="note">
      <div className="note-text">{text}</div>
      <div className="note-footer">
        <div className="note-date">{date}</div>
        <DeleteOutline
          className="delete-icon"
          onClick={() => deleteNoteHandler(id)}
        />
        <EditIcon className="edit-note" onClick={() => editNoteHandler(id)} />
      </div>
    </div>
  );

  return (
    <div >{isEdited ? editingNote : addNewNote} </div>

    // <div className="note">
    //   <div className="note-text">{text}</div>
    //   <div className="note-footer">
    //     <div className="note-date">{date}</div>
    //     <DeleteOutline
    //       className="delete-icon"
    //       onClick={() => deleteNoteHandler(id)}
    //     />
    //     <EditIcon className="edit-note" onClick={() => editNoteHandler(id)} />
    //   </div>
    // </div>
  );
};

export default Note;
