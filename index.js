const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const journalController = require("./controllers/journalController");
const journalRoutes = require("./routes/journalRoutes");

const app = express();
const port = 5000;

// Parse incoming request data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Placeholder in-memory data store for journal entries
let journalEntries = [];

// Get all journal entries
app.get("/api/journal-entries", journalController.getAllEntries);

// Create a new journal entry
app.post("/api/journal-entries", journalController.createEntry);

// Update a journal entry
app.put("/api/journal-entries/:id", journalController.updateEntry);

// Delete a journal entry
app.delete("/api/journal-entries/:id", journalController.deleteEntry);

// Mount the journalRoutes
app.use("/api", journalRoutes);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
