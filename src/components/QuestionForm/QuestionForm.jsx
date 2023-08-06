import "./QuestionForm.css";
import { React, useState, useEffect } from "react";
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

const QuestionForm = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of karnataka?",
      questionType: "radio",
      options: [
        { optionText: "Bengaluru" },
        { optionText: "Belgavi" },
        { optionText: "Hubli" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Accordion expanded={ques.open} className={ques.open ? "add border" : ""}>
        <AccordionSummary
          aria-controls="panella-content"
          id="panella-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!questions[i].open ? (
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
                {i + 1}. {questions[i].questionText}
              </Typography>

              {ques.options.map((op, j) => (
                <div key={j}>
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      style={{ marginLeft: "5px", marginBottom: "5px" }}
                      disabled
                      control={
                        <input
                          type={ques.questionType}
                          color="primary"
                          style={{ marginRight: "3px" }}
                          required={ques.type}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: "13px",
                            fontweight: "400",
                            letterSpacing: ".2px",
                            lineHeight: "20px",
                            color: "#202124",
                          }}
                        >
                          {ques.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
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
              <Select
                className="select"
                style={{ color: "#5f6368", fontSize: "13px" }}
              >
                <MenuItem id="text" value="Text">
                  <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                </MenuItem>
                <MenuItem id="checkbox" value="Checkbox">
                  <CheckBoxIcon
                    style={{ marginRight: "10px", color: "#70757a" }}
                    checked
                  />
                  Checkboxes
                </MenuItem>
                <MenuItem id="radio" value="Radio">
                  <Radio
                    style={{ marginRight: "10px", color: "#70757a" }}
                    checked
                  />
                  Multiple Choice
                </MenuItem>
              </Select>
            </div>

            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {ques.questionType != "text" ? (
                  <input
                    type={ques.questionType}
                    style={{ marginRight: "10px" }}
                  />
                ) : (
                  <ShortTextIcon style={{ marginRight: "10px" }} />
                )}
                <div>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="option"
                    value={ques.options[j].optionText}
                  ></input>
                </div>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <IconButton aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </div>
            ))}

            {ques.options.length < 5 ? (
              <div className="add_question_body">
                <FormControlLabel
                  disabled
                  control={
                    ques.questionType != "text" ? (
                      <input
                        type={ques.questionType}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        disabled
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )
                  }
                  label={
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add other"
                      ></input>
                      <Button
                        size="small"
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
                <IconButton aria-label="Copy">
                  <FilterNoneIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <BsTrash />
                </IconButton>
                <span style={{ color: "#5f6368", fontsize: "13px" }}>
                  Required
                </span>
                <Switch name="checkedA" color="primary" />
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          </AccordionDetails>
          <div className="question_edit">
            <AddCircleOutlineIcon className="edit" style={{ fontSize: 38 }} />
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

export default QuestionForm;
