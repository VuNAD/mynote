const express = require("express");

const noteController = require("../controllers/note-controller");
const { check } = require("express-validator");

const router = express.Router();

router.post("/", [check("text").not().isEmpty()], noteController.createNote);
router.get("/", noteController.getAllNotes);
router.delete("/:nid", noteController.deleteNote);

module.exports = router;
