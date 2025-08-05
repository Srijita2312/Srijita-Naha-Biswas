import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [componentToShow, setComponentToShow] = useState("book"); // default

  // 1. If/Else Statement
  function renderWithIfElse() {
    if (componentToShow === "book") return <BookDetails />;
    else if (componentToShow === "blog") return <BlogDetails />;
    else return <CourseDetails />;
  }

  // 2. Using Element Variables
  let elementToRender;
  if (componentToShow === "book") elementToRender = <BookDetails />;
  else if (componentToShow === "blog") elementToRender = <BlogDetails />;
  else elementToRender = <CourseDetails />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setComponentToShow("book")}>Show Book</button>
        <button onClick={() => setComponentToShow("blog")}>Show Blog</button>
        <button onClick={() => setComponentToShow("course")}>Show Course</button>
      </div>

      <h2>1. If/Else Conditional Rendering</h2>
      {renderWithIfElse()}

      <h2>2. Element Variables</h2>
      {elementToRender}

      <h2>3. Ternary Operator</h2>
      {componentToShow === "book" ? (
        <BookDetails />
      ) : componentToShow === "blog" ? (
        <BlogDetails />
      ) : (
        <CourseDetails />
      )}

      <h2>4. Logical && Operator</h2>
      {componentToShow === "book" && <BookDetails />}
      {componentToShow === "blog" && <BlogDetails />}
      {componentToShow === "course" && <CourseDetails />}

      <h2>5. IIFE (Immediately Invoked Function)</h2>
      {
        (() => {
          switch (componentToShow) {
            case "book":
              return <BookDetails />;
            case "blog":
              return <BlogDetails />;
            case "course":
              return <CourseDetails />;
            default:
              return null;
          }
        })()
      }
    </div>
  );
}

export default App;

