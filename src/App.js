import FormHeader from "./components/FormHeader/FormHeader";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import CategorizedForm from "./components/CategoryQuestion/CategoryQuestion";
// import DraggableComponent from "./components/DraggableComponent/DraggableComponent";
import ClozeQuestion from "./components/ClozeQuestion/ClozeQuestion";
import "./index.css";
function App() {
  return (
    <div className="App">
      <FormHeader />
      {/* <QuestionForm /> */}
      <ClozeQuestion />
      {/* <CategorizedForm /> */}
      {/* <DraggableComponent /> */}
    </div>
  );
}

export default App;
