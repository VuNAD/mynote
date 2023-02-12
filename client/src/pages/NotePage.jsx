import React, { useEffect, useState } from "react";
import NotesList from "../components/Notes/NotesList";
// import { v4 as uuid } from "uuid";
// import AddNote from "../components/Notes/AddNote";
const NotePage = () => {
  // const [notes, setNotes] = useState([
  //   {
  //     id: uuid(),
  //     text: "This is my first note!",
  //     date: "09/15/2022",
  //   },
  //   {
  //     id: uuid(),
  //     text: "This is my second note!",
  //     date: "09/15/2022",
  //   },
  //   {
  //     id: uuid(),
  //     text: "This is my third note!",
  //     date: "09/15/2022",
  //   },
  //   {
  //     id: uuid(),
  //     text: "This is my fourth note!",
  //     date: "09/15/2022",
  //   },
  // ]);

  const [loadedNotes, setLoadedNotes] = useState([]);
  const [editNote, setEditNote] = useState(false);

  // const deleteNote = (id) => {
  //   // const newNotes = notes.filter((note) => note.id !== id);
  //   // setNotes(newNotes);
  //   const newNotes = loadedNotes.filter((note) => note.id !== id);
  //   setLoadedNotes(newNotes);
  //   console.log(loadedNotes);
  //   console.log("deleted");
  // };

  const editNoteHandler = (id) => {
    setEditNote(true);
    console.log(editNote);
    // console.log(id === loadedNotes.id);
    // setLoadedNotes(loadedNotes);
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/note/${id}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      window.location.reload(true);
      // console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  // const addNote = (text) => {
  //   const date = new Date();
  //   const newNote = {
  //     text: text,
  //     date: date.toLocaleDateString(),
  //   };
  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // };

  // const addNote = async (event, text) => {
  //   event.preventDefault();
  //   const date = new Date();
  //   fetch("http://localhost:5000/api/note", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       text: text,
  //       date: date.toLocaleDateString(),
  //     }),
  //   });
  // };

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/note");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedNotes(responseData.notes);
      } catch (err) {
        console.log(err.message);
      }
    };
    sendRequest();
  }, []);
  return (
    <div className="note-page">
      {
        <NotesList
          notes={loadedNotes}
          addNoteHandler
          deleteNoteHandler={deleteNote}
          editNoteHandler={editNoteHandler}
        />
      }
    </div>
  );
};

export default NotePage;
