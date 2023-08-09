// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
// Connect to the MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

const categoryQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  categories: [
    {
      category: { type: String, required: true },
      objects: [
        {
          objectText: { type: String, required: true },
        },
      ],
    },
  ],
  open: { type: Boolean, default: true },
  required: { type: Boolean, default: false },
});

const CategoryQuestion = mongoose.model(
  "CategoryQuestion",
  categoryQuestionSchema
);

const comprehensionQuestionSchema = new mongoose.Schema({
  comprehensionText: { type: String, required: true },
  questions_list: [
    {
      questionText: { type: String, required: true },
      questionType: { type: String, required: true },
      options: [
        {
          optionText: { type: String, required: true },
        },
      ],
    },
  ],
  open: { type: Boolean, default: true },
  required: { type: Boolean, default: false },
});

const ComprehensionQuestion = mongoose.model(
  "ComprehensionQuestion",
  comprehensionQuestionSchema
);

app.use(cors());
app.use(bodyParser.json());

app.post("/api/cloze-questions", async (req, res) => {
  const { formData } = req.body;
  console.log("Server post hit");

  try {
    const newClozeQuestions = await ClozeQuestion.insertMany(formData);
    res.json({ message: "Data saved successfully!", data: newClozeQuestions });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/cloze-questions", async (req, res) => {
  try {
    const allClozeQuestions = await ClozeQuestion.find();
    res.json({ data: allClozeQuestions });
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/category-questions", async (req, res) => {
  const { formData } = req.body;
  console.log("Server category post hit");

  try {
    const newCategoryQuestions = await CategoryQuestion.insertMany(formData);
    res.json({
      message: "Data saved successfully!",
      data: newCategoryQuestions,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/category-questions", async (req, res) => {
  console.log(" category Server get hit");
  try {
    const allCategoryQuestions = await CategoryQuestion.find();
    res.json({ data: allCategoryQuestions });
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/comprehension-questions", async (req, res) => {
  const { formData } = req.body;
  console.log("Comprehension Server post hit");

  try {
    const newComprehensionQuestions = await ComprehensionQuestion.insertMany(
      formData
    );
    res.json({
      message: "Data saved successfully!",
      data: newComprehensionQuestions,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/comprehension-questions", async (req, res) => {
  console.log("Comprehension Server get hit");

  try {
    const allComprehensionQuestions = await ComprehensionQuestion.find();
    res.json({ data: allComprehensionQuestions });
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
