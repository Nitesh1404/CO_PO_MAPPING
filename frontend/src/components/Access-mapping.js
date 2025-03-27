import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const AccessMapping = () => {
  const subjects = [
    "Distributed Computing",
    "Data Structure Algorithm",
    "Database Management System",
    "Operating Systems "
  ];

  // Mapping of COs for each subject
  const coPoMapping = {
    "Distributed Computing": [
      { co: "CO1", description: "Explain distributed system fundamentals." },
      { co: "CO2", description: "Analyze distributed computing models." },
      { co: "CO3", description: "Design efficient distributed applications." },
      { co: "CO4", description: "Evaluate distributed computing techniques." },
      { co: "CO5", description: "Implement fault-tolerant distributed systems." },
      { co: "CO6", description: "Optimize performance of distributed networks." }
    ],
    "Database Management System": [
      { co: "CO1", description: "Explain database concepts and normalization." },
      { co: "CO2", description: "Design efficient database schemas." },
      { co: "CO3", description: "Implement relational and NoSQL databases." },
      { co: "CO4", description: "Optimize query performance." },
      { co: "CO5", description: "Ensure database security and integrity." },
      { co: "CO6", description: "Apply transactions and concurrency control." }
    ],
    "Data Structure Algorithm": [
      { co: "CO1", description: "Explain algorithm complexity." },
      { co: "CO2", description: "Apply data structures for problem-solving." },
      { co: "CO3", description: "Optimize algorithms for efficiency." },
      { co: "CO4", description: "Design and analyze sorting/searching techniques." },
      { co: "CO5", description: "Use dynamic programming in problem-solving." },
      { co: "CO6", description: "Apply graph and tree algorithms." }
    ],
    "Operating Systems ": [
      { co: "CO1", description: "Implement various CPU scheduling algorithms." },
      { co: "CO2", description: "Evaluate various page replacement algorithms." },
      { co: "CO3", description: "Implement the process of system call." },
      { co: "CO4", description: "Apply various file operations." },
      { co: "CO5", description: "Implement various disk scheduling algorithms." },
      { co: "CO6", description: "Analyze various classical problems." }
    ]
  };

  // PO-based Questions
  const poQuestions = [
    "Do you apply Engineering Knowledge?",
    "Do you analyze problems and identify solutions?",
    "Do you design solutions to complex problems?",
    "Do you conduct investigations and research?",
    "Do you use modern tools and technologies?",
    "Do you understand societal and environmental responsibilities?",
    "Do you apply ethical principles in engineering?",
    "Do you work effectively as an individual and in teams?",
    "Do you communicate effectively?",
    "Do you manage projects and finances efficiently?",
    "Do you engage in lifelong learning?",
    "Do you apply professional knowledge effectively?"
  ];

  const options = [1, 2, 3];

  const [selectedSubject, setSelectedSubject] = useState("");
  const [currentCoIndex, setCurrentCoIndex] = useState(0);
  const [currentPoIndex, setCurrentPoIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showTable, setShowTable] = useState(false);

  const tableRef = useRef(); // Reference for printing

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setCurrentCoIndex(0);
    setCurrentPoIndex(0);
    setResponses({});
    setShowTable(false);
  };

  const handleAnswer = (value) => {
    const currentCO = coPoMapping[selectedSubject][currentCoIndex].co;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [`${currentCO}-PO${currentPoIndex + 1}`]: value
    }));
    moveToNextQuestion();
  };

  const handleSkip = () => {
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentPoIndex < 11) {
      setCurrentPoIndex(currentPoIndex + 1);
    } else {
      if (currentCoIndex < coPoMapping[selectedSubject].length - 1) {
        setCurrentCoIndex(currentCoIndex + 1);
        setCurrentPoIndex(0);
      } else {
        setShowTable(true);
      }
    }
  };

  // Calculate Average for each PO
  const calculateAverages = () => {
    let averages = Array(12).fill(0);
    let counts = Array(12).fill(0);

    coPoMapping[selectedSubject].forEach((coItem) => {
      poQuestions.forEach((_, poIndex) => {
        let key = `${coItem.co}-PO${poIndex + 1}`;
        if (responses[key]) {
          averages[poIndex] += responses[key];
          counts[poIndex]++;
        }
      });
    });

    return averages.map((sum, index) => (counts[index] > 0 ? (sum / counts[index]).toFixed(2) : "-"));
  };

  // Print Table Function
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: `Access_Mapping_${selectedSubject}`,
  });

  return (
    <div className="container mt-4">
      <h2>Access Mapping</h2>

      <h4>Select Subject</h4>
      <select className="form-select mb-4" onChange={handleSubjectChange}>
        <option value="">Choose a subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      {selectedSubject && !showTable && coPoMapping[selectedSubject] && (
        <div className="mt-4">
          <h4>Subject: {selectedSubject}</h4>

          <div className="card p-3 mt-3">
            <h5>
              {coPoMapping[selectedSubject][currentCoIndex].co}:{" "}
              {coPoMapping[selectedSubject][currentCoIndex].description}
            </h5>

            <h6 className="mt-3">Question: {poQuestions[currentPoIndex]}</h6>

            <div className="mt-3 text-center">
              {options.map((option) => (
                <button
                  key={option}
                  className="btn btn-primary mx-2 mt-2 px-4 py-2"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
              <button className="btn btn-secondary mx-2 mt-2 px-4 py-2" onClick={handleSkip}>
                Skip Question
              </button>
            </div>
          </div>
        </div>
      )}

      {showTable && selectedSubject && (
        <div className="mt-4 mb-5">
          <h3>Generated Table</h3>
          <h4>Subject: {selectedSubject}</h4>

          <div ref={tableRef}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>CO</th>
                  <th>Description</th>
                  {poQuestions.map((_, index) => (
                    <th key={index}>PO{index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {coPoMapping[selectedSubject].map((coItem, index) => (
                  <tr key={index}>
                    <td>{coItem.co}</td>
                    <td>{coItem.description}</td>
                    {poQuestions.map((_, poIndex) => (
                      <td key={poIndex}>
                        {responses[`${coItem.co}-PO${poIndex + 1}`] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn btn-success mt-3" onClick={handlePrint}>
            Print Table (PDF)
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessMapping;
