import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@mui/material/Typography";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ClozedQuestionRenderer = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://custom-form-builder-server.onrender.com/api/cloze-questions"
      )
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const questionIndex = formData.findIndex(
      (ques) => ques.questionType === "fill_blank"
    );

    if (questionIndex !== -1) {
      const updatedWords = [...formData[questionIndex].underlinedWords];

      const [movedWord] = updatedWords.splice(sourceIndex, 1);
      updatedWords.splice(destinationIndex, 0, movedWord);

      const updatedFormData = [...formData];
      updatedFormData[questionIndex].underlinedWords = updatedWords;

      setFormData(updatedFormData);
    }
  };

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
                {i + 1}. {strippedPreviewContent}
              </Typography>
              <div className="add_question_top"></div>

              <DragDropContext onDragEnd={handleDragEnd}>
                <div className="underlined_words_list">
                  <h4>Underlined Words:</h4>
                  <ul>
                    <Droppable droppableId="underlined_words">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          class="underlined_words_list"
                        >
                          {ques.underlinedWords.map((word, index) => (
                            <Draggable
                              draggableId={index.toString()}
                              key={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="add_question_body"
                                  key={index}
                                >
                                  <h3 key={index}>{word}</h3>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                      )}
                    </Droppable>
                  </ul>
                </div>
              </DragDropContext>
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
