// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the MongoDB database
mongoose
  .connect(
    "mongodb+srv://Mehul:mehulaggz26@nodeexpressproject.cvvfoyz.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define the Mongoose schema for the clozeQuestions data
const clozeQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: { type: String, required: true },
  open: { type: Boolean, default: true },
  required: { type: Boolean, default: false },
  underlinedWords: { type: [String], default: [] },
  previewContent: { type: String, default: "" },
});

const ClozeQuestion = mongoose.model("ClozeQuestion", clozeQuestionSchema);

app.use(cors());
app.use(bodyParser.json());

// API endpoint to get all clozeQuestions data
app.get("/api/cloze-questions", async (req, res) => {
  try {
    const clozeQuestions = await ClozeQuestion.find();
    console.log("Reached");
    res.json({ formData: clozeQuestions });
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to create a new clozeQuestion
app.post("/api/cloze-questions", async (req, res) => {
  try {
    const newClozeQuestion = new ClozeQuestion(req.body);
    await newClozeQuestion.save();
    res.json({ message: "Cloze question created successfully" });
  } catch (error) {
    console.error("Error creating cloze question:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
