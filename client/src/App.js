import FormHeader from "./components/FormHeader/FormHeader";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import CategorizedForm from "./components/CategoryQuestion/CategoryQuestion";
import ClozedQuestionRenderer from "./components/ClozeQuestion/ClozedQuestionRenderer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DraggableComponent from "./components/DraggableComponent/DraggableComponent";
import ClozeQuestion from "./components/ClozeQuestion/ClozeQuestion";
import ComprehensionQuestion from "./components/ComprehensionQuestion/ComprehensionQuestion";
import "./index.css";

const ClozeQuestionPage = () => {
  return (
    <>
      <FormHeader />
      <ClozeQuestion />
      <ComprehensionQuestion />
    </>
  );
};
const ClozeQuestionRendererPage = () => {
  return (
    <>
      <FormHeader />
      <ClozedQuestionRenderer />
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ClozeQuestionPage />} />
          <Route
            exact
            path="/renderer"
            element={<ClozeQuestionRendererPage />}
          />
        </Routes>
      </Router>

      {/* <FormHeader /> */}
      {/* <QuestionForm /> */}
      {/* <ClozeQuestion /> */}
      {/* <CategorizedForm /> */}
      {/* <DraggableComponent /> */}
    </div>
  );
}

export default App;
