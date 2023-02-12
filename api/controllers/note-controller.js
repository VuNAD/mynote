const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");

const Note = require("../models/note-model");

const createNote = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { text, date } = req.body;
  const createdNote = new Note({
    text,
    date,
  });

  try {
    createdNote.save();
  } catch (err) {
    const error = new HttpError("Create note failed", 500);
    return next(error);
  }
  res.status(201).json({ note: createdNote });
};

const getAllNotes = async (req, res, next) => {
  let notes;
  try {
    notes = await Note.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching Notes failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    notes: notes.map((note) => note.toObject({ getters: true })),
  });
};

const deleteNote = async (req, res, next) => {
  const noteId = req.params.nid;
  let note;
  try {
    note = await Note.findById(noteId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete note.",
      500
    );
    return next(error);
  }

  try {
    await note.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete actor.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted note." });
};

exports.createNote = createNote;
exports.getAllNotes = getAllNotes;
exports.deleteNote = deleteNote;
