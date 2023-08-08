import React, { useState } from "react";
import "./CategoryQuestion.css"; // Don't forget to create the CSS file

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BsTrash } from "react-icons/bs";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { MenuItem } from "@material-ui/core";

const CategoryQuestion = () => {
  const [categoryQuestion, setCategoryQuestion] = useState([
    {
      questionText: "Question text",
      categories: [
        {
          category: "Cars",
          objects: [{ objectText: "Asdfsdf" }, { objectText: "asdasdB" }],
        },
        {
          category: "Bikes",
          objects: [
            { objectText: "C" },
            { objectText: "D" },
            { objectText: "E" },
          ],
        },
      ],
      open: true,
      required: false,
    },
  ]);

  // Other functions and JSX components from your previous code...

  function changeQuestionText(text, i) {
    const updatedCategoryQuestion = [...categoryQuestion];
    updatedCategoryQuestion[i] = {
      ...updatedCategoryQuestion[i],
      questionText: text,
    };
    setCategoryQuestion(updatedCategoryQuestion);
  }
  function changeCategoryText(text, i, j) {
    console.log("Hello");
    console.log(categoryQuestion[i].categories[j].category);
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];
    newCategories[j].category = text;

    newCategoryQuestion[i] = {
      ...newCategoryQuestion[i],
      categories: newCategories,
    };

    setCategoryQuestion(newCategoryQuestion);
  }

  function changeObjectValue(text, i, j, k) {
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];
    var newObjects = [...newCategories[j].objects];
    newObjects[k].objectText = text;

    newCategories[j] = {
      ...newCategories[j],
      objects: newObjects,
    };

    newCategoryQuestion[i] = {
      ...newCategoryQuestion[i],
      categories: newCategories,
    };

    setCategoryQuestion(newCategoryQuestion);
  }

  function addObject(i, j) {
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];
    var newObjects = [...newCategories[j].objects];

    newObjects.push({
      objectText: "New Object",
    });

    newCategories[j] = {
      ...newCategories[j],
      objects: newObjects,
    };

    newCategoryQuestion[i] = {
      ...newCategoryQuestion[i],
      categories: newCategories,
    };

    setCategoryQuestion(newCategoryQuestion);
  }

  function removeObject(i, j, k) {
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];
    var newObjects = [...newCategories[j].objects];

    newObjects.splice(k, 1);

    newCategories[j] = {
      ...newCategories[j],
      objects: newObjects,
    };

    newCategoryQuestion[i] = {
      ...newCategoryQuestion[i],
      categories: newCategories,
    };

    setCategoryQuestion(newCategoryQuestion);
  }

  function copyQuestion(i) {
    let qs = [...categoryQuestion];
    var newQuestion = qs[i];
    setCategoryQuestion([...categoryQuestion, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...categoryQuestion];
    if (categoryQuestion.length > 1) {
      qs.splice(i, 1);
    }
    setCategoryQuestion(qs);
  }

  function addMoreQuestionField() {
    setCategoryQuestion([
      ...categoryQuestion,
      {
        questionText: "Question text",
        categories: [
          {
            category: "Cat 1",
            objects: [{ objectText: "Obj1" }],
          },
          {
            category: "Cat 2",
            objects: [{ objectText: "Obj 2" }, { objectText: "Obj 3" }],
          },
        ],
        open: true,
        required: false,
      },
    ]);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...categoryQuestion];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setCategoryQuestion(reqQuestion);
  }

  function questionUI() {
    return categoryQuestion.map((ques, i) => (
      <div>
        <div className="question_form">
          <Accordion
            expanded={ques.open}
            className={ques.open ? "add border" : ""}
          >
            <AccordionSummary
              aria-controls="panella-content"
              id="panella-header"
              elevation={1}
              style={{ width: "100%" }}
            >
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {ques.questionText}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className="add_question">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Categories and Objects
              </Typography>
              <input
                id="question-text"
                type="text"
                className="text_input"
                placeholder="Question text"
                value={ques.questionText}
                onChange={(e) => {
                  changeQuestionText(e.target.value, i);
                }}
              />
              {ques.categories.map((category, j) => (
                <div key={j}>
                  <input
                    id={`category-text-${j}`}
                    type="text"
                    className="text_input"
                    placeholder="Category"
                    value={category.category}
                    onChange={(e) => {
                      changeCategoryText(e.target.value, i, j);
                    }}
                  />
                  {category.objects.map((object, k) => (
                    <div className="add_question_body" key={k}>
                      <input
                        id={`object-text-${k}-${k}`}
                        type="text"
                        className="text_input"
                        placeholder="Object"
                        value={object.objectText}
                        onChange={(e) => {
                          changeObjectValue(e.target.value, i, j, k);
                        }}
                      />
                      <IconButton aria-label="delete">
                        <BsTrash
                          onClick={() => {
                            removeObject(i, j, k);
                          }}
                        />
                      </IconButton>
                    </div>
                  ))}
                  <Button
                    size="small"
                    onClick={() => {
                      addObject(i, j);
                    }}
                  >
                    Add Object
                  </Button>
                </div>
              ))}
              {/* Other sections of your accordion */}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    ));
  }

  // Return JSX
  return (
    <>
      <div>
        <div className="question_form">
          <br></br>
          <div className="section">
            <div className="question_title_section">
              <div className="question_form_top">
                <input
                  type="text"
                  className="question_form_top_name"
                  style={{ color: "black" }}
                  placeholder="Untitled document"
                ></input>
                <input
                  type="text"
                  className="question_form_top_desc"
                  placeholder="Form Description"
                ></input>
              </div>
            </div>

            {questionUI()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryQuestion;
