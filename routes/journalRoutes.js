// routes/journalRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controllers/journalController");

// GET all journal entries
router.get("/api/journal-entries", getAllEntries);

// POST a new journal entry
router.post("/api/journal-entries", createEntry);

// PUT (update) a journal entry by ID
router.put("/api/journal-entries/:id", updateEntry);

// DELETE a journal entry by ID
router.delete("/api/journal-entries/:id", deleteEntry);

module.exports = router;
