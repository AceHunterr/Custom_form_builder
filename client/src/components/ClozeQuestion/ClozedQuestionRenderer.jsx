import React from "react";

const ClozedQuestionRenderer = ({ formData }) => {
  function renderQuestion(question) {
    if (question.questionType === "fill_blank") {
      return (
        <div key={question.id}>
          <h4>{question.questionText}</h4>
          <p dangerouslySetInnerHTML={{ __html: question.previewContent }} />
          {question.underlinedWords.map((word, index) => (
            <input
              type="text"
              key={index}
              placeholder={`Enter answer for ${word}`}
            />
          ))}
        </div>
      );
    } else if (question.questionType === "radio") {
      return (
        <div key={question.id}>
          <h4>{question.questionText}</h4>
          {question.options.map((option, index) => (
            <label key={index}>
              <input type="radio" name={`radio_${question.id}`} />
              {option.optionText}
            </label>
          ))}
        </div>
      );
    }
    // Add other question types here as needed
    return null;
  }

  return <div>{formData.map((question) => renderQuestion(question))}</div>;
};

export default ClozedQuestionRenderer;
