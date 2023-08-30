// controllers/journalController.js
let journalEntries = []; // In-memory array to store journal entries

// GET all journal entries
const getAllEntries = (req, res) => {
  res.json(journalEntries);
};

// POST a new journal entry
const createEntry = (req, res) => {
  const { title, content } = req.body;
  const newEntry = { id: Date.now(), title, content };
  journalEntries.push(newEntry);
  res.status(201).json(newEntry);
};

// PUT (update) a journal entry by ID
const updateEntry = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const entryToUpdate = journalEntries.find((entry) => entry.id === Number(id));
  if (entryToUpdate) {
    entryToUpdate.title = title;
    entryToUpdate.content = content;
    res.json(entryToUpdate);
  } else {
    res.status(404).json({ error: "Journal entry not found." });
  }
};

// DELETE a journal entry by ID
const deleteEntry = (req, res) => {
  const { id } = req.params;
  const indexToRemove = journalEntries.findIndex(
    (entry) => entry.id === Number(id)
  );
  if (indexToRemove !== -1) {
    const deletedEntry = journalEntries.splice(indexToRemove, 1);
    res.json(deletedEntry[0]);
  } else {
    res.status(404).json({ error: "Journal entry not found." });
  }
};

module.exports = { getAllEntries, createEntry, updateEntry, deleteEntry };
