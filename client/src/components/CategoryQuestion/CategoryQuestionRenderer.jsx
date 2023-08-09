import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@mui/material/Typography";

const CategoryQuestionRenderer = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category-questions")
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function renderQuestion(ques, i) {
    const strippedPreviewContent = ques.questionText.replace(
      /<\/?[^>]+(>|$)/g,
      ""
    );

    return (
      <Accordion expanded={ques.open} className={ques.open ? "add border" : ""}>
        <AccordionSummary
          aria-controls="panella-content"
          id="panella-header"
          elevation={1}
          style={{ width: "100%" }}
        ></AccordionSummary>

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
            {ques.categories.map((cat, j) => (
              <div className="question_boxes" key={j}>
                <AccordionDetails className="add_question">
                  <div className="add_question_top">
                    <h2>{cat.category}</h2>
                  </div>
                  {cat.objects.map((ob, k) => (
                    <div className="add_question_body" key={k}>
                      <div>
                        <h5>{ob.objectText}</h5>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </div>
            ))}

            <div className="add_question_top"></div>
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

export default CategoryQuestionRenderer;
