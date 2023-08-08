import "./ComprehensionQuestion.css";
import { React, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import axios from "axios";

import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxicon from "@material-ui/icons/CheckBox";
import SubjectIcon from "@material-ui/icons/Subject";
import { BsTrash } from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import { BsFileText } from "react-icons/bs";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import { FCRightUp } from "react-icons/fc";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ShortTextIcon from "@material-ui/icons/ShortText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const ComprehensionQuestion = () => {
  const [comprehensionQuestions, setComprehensionQuestions] = useState([
    {
      comprehensionText: "This is the comprehension text ",
      questions_list: [
        {
          questionText: "Which is the capital city of karnataka?",
          questionType: "radio",
          options: [
            { optionText: "Bengaluru" },
            { optionText: "Belgavi" },
            { optionText: "Hubli" },
            { optionText: "Mandya" },
          ],
        },
      ],
      open: true,
      required: false,
    },
  ]);

  //   const savecomprehensionQuestions = () => {
  //     axios
  //       .post("http://localhost:5000/api/cloze-questions", {
  //         formData: comprehensionQuestions,
  //       })
  //       .then((response) => {
  //         console.log("Data saved successfully!");
  //       })
  //       .catch((error) => {
  //         console.error("Error saving data:", error);
  //       });
  //   };

  function changeComprehensionQuestion(text, i) {
    var newQuestion = [...comprehensionQuestions];
    newQuestion[i].comprehensionText = text;
    setComprehensionQuestions(newQuestion);
  }
  function changeQuestionText(text, i, j) {
    var newQuestion = [...comprehensionQuestions];
    newQuestion[i].questions_list[j].questionText = text;
    setComprehensionQuestions(newQuestion);
  }

  function changeOptionValue(text, i, j, k) {
    var optionsQuestion = [...comprehensionQuestions];
    console.log(optionsQuestion);
    console.log("HEllo");
    console.log(optionsQuestion[i].questions_list[j].options[k].optionText);
    console.log("Bye");
    optionsQuestion[i].questions_list[j].options[k].optionText = text;
    setComprehensionQuestions(optionsQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...comprehensionQuestions];
    qs[i].questionType = type;
    setComprehensionQuestions(qs);
  }

  function removeOption(i, j, k) {
    console.log("Calling removeOption with i:", i, "j:", j, "k:", k);

    var RemoveOptionQuestion = [...comprehensionQuestions];
    console.log("Hello");
    console.log(RemoveOptionQuestion[i].questions_list[j]);
    console.log("Bye");
    if (RemoveOptionQuestion[i].questions_list[j].options.length > 1) {
      RemoveOptionQuestion[i].questions_list[j].options.splice(k, 1);
      setComprehensionQuestions(RemoveOptionQuestion);
    }
  }

  function addOption(i, j) {
    var optionsOfQuestion = [...comprehensionQuestions];
    if (optionsOfQuestion[i].questions_list[j].options.length < 5) {
      console.log(optionsOfQuestion[i].questions_list[j].options);
      optionsOfQuestion[i].questions_list[j].options.push({
        optionText:
          "Option" +
          (optionsOfQuestion[i].questions_list[j].options.length + 1),
      });
      console.log(optionsOfQuestion[i].questions_list[j].options.length);
    } else {
      alert("Cannot add more than 5 options");
    }
    setComprehensionQuestions(optionsOfQuestion);
  }

  // Question Specific Functions
  function copyQuestion(i) {
    let qs = [...comprehensionQuestions];
    var newQuestion = qs[i];
    setComprehensionQuestions([...comprehensionQuestions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...comprehensionQuestions];
    if (comprehensionQuestions.length > 1) {
      qs.splice(i, 1);
    }
    setComprehensionQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...comprehensionQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setComprehensionQuestions(reqQuestion);
  }

  // Generalised Question Field
  function addMoreQuestionField() {
    setComprehensionQuestions([
      ...comprehensionQuestions,
      {
        comprehensionText: "Default comprehension text ",
        questions_list: [
          {
            questionText: "Question 1",
            questionType: "radio",
            options: [{ optionText: "Option 1" }],
          },
        ],
        open: true,
        required: false,
      },
    ]);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...comprehensionQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setComprehensionQuestions(reqQuestion);
  }

  function questionsUI() {
    return comprehensionQuestions.map((ques, i) => (
      <Accordion expanded={ques.open} className={ques.open ? "add border" : ""}>
        <AccordionSummary
          aria-controls="panella-content"
          id="panella-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!comprehensionQuestions[i].open ? (
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
                {i + 1}. {comprehensionQuestions[i].comprehensionText}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>
        {/* <RichTextEditor /> */}

        <div className="question_boxes">
          <AccordionDetails className="add_question">
            {/* <div dangerouslySetInnerHTML={{ __html: ques.previewContent }} /> */}
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
              Comprehension
            </Typography>
            <RichTextEditor
              value={ques.comprehensionText}
              onChange={(value) => {
                changeComprehensionQuestion(value, i);
              }}
            />
            {/* <CropOriginalIcon style={{ color: "#5f6368" }} /> */}

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
              MCQs
            </Typography>
            {ques.questions_list.map((question, j) => (
              <div className="question_boxes" key={j}>
                <AccordionDetails className="add_question">
                  <div className="add_question_top">
                    <input
                      id="options-text"
                      type="text"
                      className="question"
                      placeholder="Question"
                      value={question.questionText}
                      onChange={(e) => {
                        changeQuestionText(e.target.value, i, j);
                      }}
                    />
                  </div>
                  {question.options.map((op, k) => (
                    <div className="add_question_body" key={k}>
                      {question.questionType != "text" ? (
                        <input
                          type={question.questionType}
                          style={{ marginRight: "10px" }}
                        />
                      ) : (
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      )}
                      <div>
                        <input
                          id="options-text"
                          type="text"
                          className="text_input"
                          placeholder="option"
                          value={op.optionText}
                          onChange={(e) => {
                            changeOptionValue(e.target.value, i, j, k);
                          }}
                        ></input>
                      </div>
                      {/* <CropOriginalIcon style={{ color: "#5f6368" }} /> */}
                      <IconButton aria-label="delete">
                        <CloseIcon
                          onClick={() => {
                            if (
                              question.options &&
                              question.options.length > k
                            ) {
                              removeOption(i, j, k);
                            }
                          }}
                        />
                      </IconButton>
                    </div>
                  ))}

                  {question.options.length < 5 ? (
                    <div className="add_question_body">
                      <FormControlLabel
                        disabled
                        control={
                          ques.questionType != "text" ? (
                            <input
                              type="radio"
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                              disabled
                            />
                          ) : (
                            <ShortTextIcon style={{ marginRight: "10px" }} />
                          )
                        }
                        label={
                          <div>
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
                                addOption(i, j);
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
                        }
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </AccordionDetails>
              </div>
            ))}

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
            {/* <Button
              variant="contained"
              color="primary"
              onClick={saveComprehensionQuestions}
              style={{ width: "50%" }}
            >
              Save Form Data
            </Button> */}
            {/* <button onClick={savecomprehensionQuestions}>Save Form Data</button> */}
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
    ));
  }

  return (
    <>
      <div>
        <div className="question_form">
          <br></br>
          <div className="section">
            {/* <div className="question_title_section">
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
            </div> */}

            {questionsUI()}
            {/* <ClozedQuestionRenderer formData={comprehensionQuestions} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensionQuestion;
