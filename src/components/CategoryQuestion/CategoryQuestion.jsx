// import React, { useState } from "react";

// const CategorizedForm = () => {
//   // Initialize state to store form data
//   const [categories, setCategories] = useState([
//     {
//       categoryName: "",
//       answers: [""],
//     },
//   ]);

//   // Handle changes in category name and answer inputs
//   const handleCategoryChange = (index, value) => {
//     const updatedCategories = [...categories];
//     updatedCategories[index].categoryName = value;
//     setCategories(updatedCategories);
//   };

//   const handleAnswerChange = (categoryIndex, answerIndex, value) => {
//     const updatedCategories = [...categories];
//     updatedCategories[categoryIndex].answers[answerIndex] = value;
//     setCategories(updatedCategories);
//   };

//   // Add and remove form fields for answers
//   const addAnswerField = (categoryIndex) => {
//     const updatedCategories = [...categories];
//     updatedCategories[categoryIndex].answers.push("");
//     setCategories(updatedCategories);
//   };

//   const removeAnswerField = (categoryIndex, answerIndex) => {
//     const updatedCategories = [...categories];
//     updatedCategories[categoryIndex].answers.splice(answerIndex, 1);
//     setCategories(updatedCategories);
//   };

//   // Add and remove form fields for categories
//   const addCategoryField = () => {
//     setCategories([...categories, { categoryName: "", answers: [""] }]);
//   };

//   const removeCategoryField = (index) => {
//     const updatedCategories = [...categories];
//     updatedCategories.splice(index, 1);
//     setCategories(updatedCategories);
//   };

//   // Render the form
//   return (
//     <div>
//       {categories.map((category, categoryIndex) => (
//         <div key={categoryIndex}>
//           <input
//             type="text"
//             value={category.categoryName}
//             onChange={(e) =>
//               handleCategoryChange(categoryIndex, e.target.value)
//             }
//             placeholder="Category Name"
//           />
//           {category.answers.map((answer, answerIndex) => (
//             <div key={answerIndex}>
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) =>
//                   handleAnswerChange(categoryIndex, answerIndex, e.target.value)
//                 }
//                 placeholder="Answer"
//               />
//               {category.answers.length > 1 && (
//                 <button
//                   onClick={() => removeAnswerField(categoryIndex, answerIndex)}
//                 >
//                   Remove Answer
//                 </button>
//               )}
//             </div>
//           ))}
//           <button onClick={() => addAnswerField(categoryIndex)}>
//             Add Answer
//           </button>
//           {categories.length > 1 && (
//             <button onClick={() => removeCategoryField(categoryIndex)}>
//               Remove Category
//             </button>
//           )}
//         </div>
//       ))}
//       <button onClick={addCategoryField}>Add Category</button>
//       <button>Submit</button>
//     </div>
//   );
// };

// export default CategorizedForm;

import { React, useState } from "react";

const CategoryQuestion = () => {
  const [categoryQuestions, setcategoryQuestions] = useState();

  return (
    <>
      <div>CategoryQuestion</div>;
    </>
  );
};

export default CategoryQuestion;
