import { React, useState } from "react";

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

const ClozeQuestion = () => {
  const [clozeQuestions, setclozeQuestions] = useState([
    {
      questionText: "A quick brown box jumps over the fence",
      questionType: "fill_blank",
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(text, i) {
    var newQuestion = [...clozeQuestions];
    newQuestion[i].questionText = text;
    setclozeQuestions(newQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...clozeQuestions];
    qs[i].questionType = type;
    setclozeQuestions(qs);
  }

  function copyQuestion(i) {
    // expandCloseAll();
    let qs = [...clozeQuestions];
    var newQuestion = qs[i];
    setclozeQuestions([...clozeQuestions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...clozeQuestions];
    if (clozeQuestions.length > 1) {
      qs.splice(i, 1);
    }
    setclozeQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...clozeQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setclozeQuestions(reqQuestion);
  }

  function addMoreQuestionField() {
    setclozeQuestions([
      ...clozeQuestions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  function copyQuestion(i) {
    // expandCloseAll();
    let qs = [...clozeQuestions];
    var newQuestion = qs[i];
    setclozeQuestions([...clozeQuestions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...clozeQuestions];
    if (clozeQuestions.length > 1) {
      qs.splice(i, 1);
    }
    setclozeQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...clozeQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setclozeQuestions(reqQuestion);
  }

  function addMoreQuestionField() {
    setclozeQuestions([
      ...clozeQuestions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  function questionsUI() {
    return clozeQuestions.map((ques, i) => (
      <Accordion expanded={ques.open} className={ques.open ? "add border" : ""}>
        <AccordionSummary
          aria-controls="panella-content"
          id="panella-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!clozeQuestions[i].open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {i + 1}. {clozeQuestions[i].questionText}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>
        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input
                type="text"
                className="question"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e) => {
                  changeQuestion(e.target.value, i);
                }}
              />
              <CropOriginalIcon style={{ color: "#5f6368" }} />
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

            {questionsUI()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClozeQuestion;
