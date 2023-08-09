import React, { useState } from "react";
import "./CategoryQuestion.css";
import RichTextEditor from "../RichTextEditor";
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
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const CategoryQuestion = () => {
  const [categoryQuestion, setCategoryQuestion] = useState([
    {
      questionText: "Question text",
      categories: [
        {
          category: "Cars",
          objects: [{ objectText: "Car A" }, { objectText: "Car B" }],
        },
        {
          category: "Bikes",
          objects: [
            { objectText: "Bike A" },
            { objectText: "Bike B" },
            { objectText: "Bike C" },
          ],
        },
      ],
      open: true,
      required: false,
    },
  ]);

  const saveCategoryQuestions = () => {
    axios
      .post("http://localhost:5000/api/category-questions", {
        formData: categoryQuestion,
      })
      .then((response) => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  function changeQuestionText(text, i) {
    const updatedCategoryQuestion = [...categoryQuestion];
    updatedCategoryQuestion[i] = {
      ...updatedCategoryQuestion[i],
      questionText: text,
    };
    setCategoryQuestion(updatedCategoryQuestion);
  }
  function changeCategoryText(text, i, j) {
    // console.log("Hello");
    // console.log(categoryQuestion[i].categories[j].category);
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

  function addCategory(i) {
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];

    newCategories.push({
      category: "New Cat",
      objects: [{ objectText: "New Obj 1" }, { objectText: "New Obj 2" }],
    });

    newCategoryQuestion[i] = {
      ...newCategoryQuestion[i],
      categories: newCategories,
    };

    setCategoryQuestion(newCategoryQuestion);
  }

  function removeCategory(i, j) {
    var newCategoryQuestion = [...categoryQuestion];
    var newCategories = [...newCategoryQuestion[i].categories];

    newCategories.splice(j, 1);

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
              {!categoryQuestion[i].open ? (
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
                    Categories and Objects
                  </Typography>
                </div>
              ) : (
                ""
              )}
            </AccordionSummary>
            <div className="question_boxes">
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
                  Category Questions
                </Typography>
                <RichTextEditor
                  value={ques.questionText}
                  onChange={(value) => {
                    changeQuestionText(value, i);
                  }}
                />

                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "0",
                    paddingTop: "50px",
                    paddingLeft: "10px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Categories with Objects:
                </Typography>

                {ques.categories.map((category, j) => (
                  <div>
                    <div key={j}>
                      <span>{j + 1}. </span>
                      <input
                        id="options-text"
                        type="text"
                        className="text_input category_categories"
                        placeholder="Category"
                        value={category.category}
                        onChange={(e) => {
                          changeCategoryText(e.target.value, i, j);
                        }}
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          marginTop: "10px",
                          textTransform: "uppercase",
                        }}
                      />
                      <IconButton aria-label="delete">
                        <CloseIcon
                          onClick={() => {
                            removeCategory(i, j);
                          }}
                        />
                      </IconButton>
                    </div>
                    {category.objects.map((object, k) => (
                      <div
                        className="add_question_body"
                        key={k}
                        style={{ paddingLeft: "20px" }}
                      >
                        {" "}
                        <span>{k + 1}. </span>
                        <input
                          style={{ marginLeft: "5px" }}
                          id="options-text"
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

                    <div style={{ paddingLeft: "25px" }}>
                      <input
                        id="options-text"
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add other"
                      ></input>
                      <Button
                        size="small"
                        onClick={() => {
                          addObject(i, j);
                        }}
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontsize: "13px",
                          fontweight: "600",
                        }}
                      >
                        Add Option
                      </Button>
                    </div>
                  </div>
                ))}
                <div style={{ paddingLeft: "2px" }}>
                  {/* <input
                    id="options-text"
                    type="text"
                    className="text_input"
                    style={{ fontSize: "13px", width: "60px" }}
                    placeholder="Add other"
                  ></input> */}
                  <Button
                    size="large"
                    onClick={() => {
                      addCategory(i);
                    }}
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontsize: "13px",
                      fontweight: "600",
                      marginTop: "10px",
                    }}
                  >
                    Add Category
                  </Button>
                </div>

                <div className="add_footer">
                  <div className="add_question_bottom_left">
                    <Button
                      size="small"
                      style={{
                        textTransform: "none",
                        color: "#4285f4",
                        fontsize: "13px",
                        fontweight: "600",
                      }}
                    >
                      <NorthEastIcon
                        style={{
                          border: "2px solid #4285f4",
                          padding: "2px",
                          marginRight: "8px",
                        }}
                      />
                      Answer key
                    </Button>
                  </div>
                  <div className="add_question_bottom">
                    <IconButton
                      aria-label="Copy"
                      onClick={() => {
                        copyQuestion(i);
                      }}
                    >
                      <FilterNoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteQuestion(i);
                      }}
                    >
                      <BsTrash />
                    </IconButton>
                    <span style={{ color: "#5f6368", fontsize: "13px" }}>
                      Required
                    </span>
                    <Switch
                      name="checkedA"
                      color="primary"
                      onClick={() => {
                        requiredQuestion(i);
                      }}
                    />
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={saveCategoryQuestions}
                  style={{ width: "50%" }}
                >
                  Save Form Data
                </Button>
              </AccordionDetails>
              <div className="question_edit">
                <AddCircleOutlineIcon
                  className="edit"
                  style={{ fontSize: 38 }}
                  onClick={addMoreQuestionField}
                />
                <OndemandVideoIcon className="edit" style={{ fontSize: 38 }} />
                <CropOriginalIcon className="edit" style={{ fontSize: 38 }} />
                <TextFieldsIcon className="edit" style={{ fontSize: 38 }} />
              </div>
            </div>
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
          <div className="section">{questionUI()}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryQuestion;
