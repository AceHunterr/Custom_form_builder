import React, { useState, useEffect } from "react";
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

const ClozedQuestionRenderer = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cloze-questions")
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function renderQuestion(ques, i) {
    const strippedPreviewContent = ques.previewContent.replace(
      /<\/?[^>]+(>|$)/g,
      ""
    );
    if (ques.questionType === "fill_blank") {
      return (
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
            {/* {!ques.open ? (
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
                  {i + 1}. {ques.questionText}
                </Typography>
              </div>
            ) : (
              ""
            )} */}
          </AccordionSummary>

          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <h4 style={{ marginBottom: "10px" }}>Sentence</h4>
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {i + 1}. {strippedPreviewContent}
              </Typography>
              <div className="add_question_top">
                <CropOriginalIcon
                  style={{ color: "#5f6368", marginBottom: "20px" }}
                />
              </div>

              <div className="underlined_words_list">
                <h4>Underlined Words:</h4>
                <ul>
                  {ques.underlinedWords.map((word, index) => (
                    <div className="add_question_body" key={index}>
                      <li key={index}>{word}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </AccordionDetails>
          </div>
        </Accordion>
      );
    }
  }

  return (
    <div>
      {formData.map((question, index) => renderQuestion(question, index))}
    </div>
  );
};

export default ClozedQuestionRenderer;
