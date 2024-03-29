import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormHeader from "./components/FormHeader/FormHeader";
import CategoryQuestion from "./components/CategoryQuestion/CategoryQuestion";
import ClozeQuestion from "./components/ClozeQuestion/ClozeQuestion";
import ComprehensionQuestion from "./components/ComprehensionQuestion/ComprehensionQuestion";
import CategoryQuestionRenderer from "./components/CategoryQuestion/CategoryQuestionRenderer";
import ClozedQuestionRenderer from "./components/ClozeQuestion/ClozedQuestionRenderer";
import ComprehensionQuestionRenderer from "./components/ComprehensionQuestion/ComprehensionQuestionRenderer";

const BuilderPage = () => {
  return (
    <>
      <div style={{ width: "70%", margin: "auto" }}>
        <FormHeader />
      </div>
      <ClozeQuestion />
      <CategoryQuestion />
      <ComprehensionQuestion />
    </>
  );
};
const RendererPage = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <FormHeader />
      <div className="question-type-section">
        <h2 className="section-heading">Clozed Questions</h2>
        <ClozedQuestionRenderer />
      </div>
      <div className="question-type-section">
        <h2 className="section-heading">Category Questions</h2>
        <CategoryQuestionRenderer />
      </div>
      <div className="question-type-section">
        <h2 className="section-heading">Comprehension Questions</h2>
        <ComprehensionQuestionRenderer />
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BuilderPage />} />
          <Route exact path="/renderer" element={<RendererPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
