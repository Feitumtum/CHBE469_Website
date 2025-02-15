import React from "react";
import "../LecturePages.css";
import Checklist from "../../LectureMaterial/Checklist";
import NavFooter from "../../NavFooter/NavFooter";
import Footer from "../../Footer/Footer";
import CodeHighlighter from "../../LectureMaterial/CodeHighlighter";

function PythonStatements() {
  const objectives = [
    "Objective 1: Understand how to use 'If...If Else' Statements",
    "Objective 2: Understand how to use 'For' Statements",
    "Objective 3: Understand how to use 'While' Statements",
  ];

  const code1 = "";
  return (
    <>
      <div>
        <h1 style={{ margin: "15px" }}>Module 1 - Lec 5: Python Statements</h1>
        <div className="title-image-container">
          {/* <img
                src={require("../../../images/python-data-structures.webp")}
                alt="Italian Trulli"
                className="title-image"
                height="350"
              ></img> */}
        </div>
        <div className="objective-container">
          <h3 className="information-container-header">Learning Objectives</h3>
          <Checklist objectives={objectives} />
        </div>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Introduction</h3>
        <p>
          In this lecture, we will introduce three main python statements that
          are commonly used in programming.
        </p>
        <p>
          We go over these data structures and how to use them
          <ul>
            <li>If...If Else...Else</li>
            <li>For Loops</li>
            <li>While Loops</li>
          </ul>
        </p>
        <h3 className="information-container-header">Materials</h3>
        <a
          href="https://github.com/Feitumtum/CHBE469-Lecture-Code/blob/main/Module-1/Lec-5-Python-Statements-CODE.ipynb"
          rel="noreferrer"
          target="_blank"
        >
          <p className="lecture-link">
            <i className="fa-brands fa-square-github fa-2xl"></i> Module 1:
            Lec-5-Python-Statements-CODE.ipynb
          </p>
        </a>
        <iframe
          title="Install vscode"
          src="https://www.youtube.com/embed/CKyboLKthI4"
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <div className="information-container">
        <h3 className="information-container-header">Concept Overview</h3>
        <ol>
          <li>
            If you have experience in Python and want a refresher/review the
            topics, feel free to take a look at some of the code that we went
            over and decide if you would like to go through this lecture
          </li>
          <li>
            For people who just finished watching the video, use this as a
            summary to see if you understand and recall all the examples and
            main concepts
          </li>
        </ol>
        <CodeHighlighter code={code1} language="python"></CodeHighlighter>
      </div>

      <NavFooter
        backPath="/modules/python-data-structures"
        forwardPath="/modules/functions"
      />

      <Footer></Footer>
    </>
  );
}

export default PythonStatements;
