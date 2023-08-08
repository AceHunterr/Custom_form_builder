import { React, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import axios from "axios";
import Switch from "@material-ui/core/Switch";
import { BsTrash } from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import "./ClozeQuestion.css";

const ClozeQuestion = () => {
  const [clozeQuestions, setClozeQuestions] = useState([
    {
      questionText: "A quick brown box jumps over the fence",
      questionType: "fill_blank",
      open: true,
      required: false,
      underlinedWords: [],
      previewContent: "",
    },
  ]);

  const [previewContent, setPreviewContent] = useState("");

  const saveClozeQuestions = () => {
    axios
      .post("http://localhost:5000/api/cloze-questions", {
        formData: clozeQuestions,
      })
      .then((response) => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  function changeQuestion(text, i) {
    const regex = /<u>(.*?)<\/u>/g;
    const matches = text.match(regex);

    const previewSentence = text.replace(regex, (match, word) => {
      return "___".repeat(word.length);
    });

    if (matches) {
      const words = matches.map((match) => match.replace(/<\/?u>/g, ""));
      const updatedQuestions = clozeQuestions.map((question, index) => {
        if (index === i) {
          return {
            ...question,
            questionText: text,
            underlinedWords: words,
            previewContent: previewSentence,
          };
        }
        return question;
      });
      setClozeQuestions(updatedQuestions);
      setPreviewContent(text);
    } else {
      setClozeQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[i].questionText = text;
        updatedQuestions[i].underlinedWords = [];
        updatedQuestions[i].previewContent = previewSentence;
        return updatedQuestions;
      });
      setPreviewContent(text);
    }
  }

  // Question Specific Functions
  function copyQuestion(i) {
    let qs = [...clozeQuestions];
    var newQuestion = qs[i];
    setClozeQuestions([...clozeQuestions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...clozeQuestions];
    if (clozeQuestions.length > 1) {
      qs.splice(i, 1);
    }
    setClozeQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...clozeQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setClozeQuestions(reqQuestion);
  }

  // Generalised Question Field
  function addMoreQuestionField() {
    setClozeQuestions([
      ...clozeQuestions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
        underlinedWords: [],
        previewContent: "",
      },
    ]);
  }

  // function copyQuestion(i) {
  //   // expandCloseAll();
  //   let qs = [...clozeQuestions];
  //   var newQuestion = qs[i];
  //   setClozeQuestions([...clozeQuestions, newQuestion]);
  // }

  // function deleteQuestion(i) {
  //   let qs = [...clozeQuestions];
  //   if (clozeQuestions.length > 1) {
  //     qs.splice(i, 1);
  //   }
  //   setClozeQuestions(qs);
  // }

  function requiredQuestion(i) {
    var reqQuestion = [...clozeQuestions];
    reqQuestion[i].required = !reqQuestion[i].required;
    alert(reqQuestion[i].required + " " + i);
    setClozeQuestions(reqQuestion);
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
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {i + 1}. {clozeQuestions[i].questionText}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>
        {/* <RichTextEditor /> */}

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
              Sentence
            </Typography>
            <RichTextEditor
              value={ques.questionText}
              onChange={(value) => {
                changeQuestion(value, i);
                setPreviewContent(value);
              }}
            />
            <div className="add_question_top">
              <CropOriginalIcon
                style={{ color: "#5f6368", marginBottom: "20px" }}
              />
            </div>
            <div className="preview_field">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "0",
                  paddingTop: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Preview
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: ques.previewContent }} />
            </div>
            <div className="underlined_words_list">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  paddingTop: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Underlined Words
              </Typography>
              <ul>
                {ques.underlinedWords.map((word, index) => (
                  <div className="add_question_body" key={index}>
                    <input type="checkbox" />
                    {word}
                  </div>
                ))}
              </ul>
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
              onClick={saveClozeQuestions}
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
            {/* <ClozedQuestionRenderer formData={clozeQuestions} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClozeQuestion;
