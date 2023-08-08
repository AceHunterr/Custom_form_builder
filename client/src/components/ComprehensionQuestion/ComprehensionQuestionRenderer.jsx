import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@mui/material/Typography";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ComprehensionQuestionRenderer = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/comprehension-questions")
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function renderQuestion(ques, i) {
    const strippedPreviewContent = ques.comprehensionText.replace(
      /<\/?[^>]+(>|$)/g,
      ""
    );
    // console.log(strippedPreviewContent);
    // console.log(ques.open);
    return (
      <Accordion expanded={ques.open} className={ques.open ? "add border" : ""}>
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
              {strippedPreviewContent}
            </Typography>
            {ques.questions_list.map((mcq_ques, j) => (
              <div className="question_boxes" key={j}>
                <AccordionDetails className="add_question">
                  <div className="add_question_top">
                    <h2>{mcq_ques.questionText}</h2>
                  </div>
                  {mcq_ques.options.map((op, k) => (
                    <div className="add_question_body" key={k}>
                      <div>
                        <h5>{op.optionText}</h5>
                      </div>
                      {/* <CropOriginalIcon style={{ color: "#5f6368" }} /> */}
                    </div>
                  ))}
                </AccordionDetails>
              </div>
            ))}

            <div className="add_question_top">
              {/* <CropOriginalIcon
                  style={{ color: "#5f6368", marginBottom: "20px" }}
                /> */}
            </div>
          </AccordionDetails>
        </div>
      </Accordion>
    );
  }

  return (
    <div>
      {formData.map((question, index) => renderQuestion(question, index))}
    </div>
  );
};

export default ComprehensionQuestionRenderer;
