import './Learn.css';
import { useState } from 'react';

export default function Learn() {
  // Variables section outputs
  const variablesOutput = [`Language: JavaScript`, `Version: 2023`];
  const constLetOutput = [
    "const is block-scoped and can't be reassigned.",
    "let is block-scoped and can be reassigned.",
  ];

  // Quiz state
  const quizData = [
    {
      question: "Which loop runs as long as a condition is true?",
      options: ["for loop", "while loop", "do-until loop", "switch"],
      answer: "while loop",
    },
    {
      question: "What keyword is used to define a function in JavaScript?",
      options: ["define", "function", "method", "func"],
      answer: "function",
    },
    {
      question: "What does the following return? add(2, 3) if add is: const add = (a, b) => a + b;",
      options: ["5", "23", "undefined", "Error"],
      answer: "5",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <section id="learn">
      <h1 className="abt">Learn</h1>

      {/* Variables Section */}
      <div className="section">
        <h2 className="section-title">📦 Variables</h2>
        <p className="txt">
          Variables store data that can be used and changed during a program’s execution.
        </p>

        <h3 className="examples">Examples</h3>
        <div className="codes">
          <h4>Basic Variable Declaration</h4>
          <pre>
            <code>{`let name = "JavaScript";
let version = 2023;
console.log("Language:", name);
console.log("Version:", version);`}</code>
          </pre>
          <p><strong>Output:</strong></p>
          <pre className='margin'><code>{variablesOutput.join('\n')}</code></pre>

          <h4>const vs let</h4>
          <pre>
            <code>{`const pi = 3.14;
let counter = 0;`}</code>
          </pre>
          <p><strong>Explanation:</strong></p>
          <pre><code>{constLetOutput.join('\n')}</code></pre>
        </div>
      </div>

      {/* 🧠 Quiz Section */}
      <div className="section">
        <h2 className="section-title">🧠 Quiz: Loops & Functions</h2>
        <p className="txt">
          Test your understanding of loops and functions by answering the following multiple-choice questions.
        </p>

        {quizData.map((q, index) => (
          <div key={index} className="quiz-question">
            <p className="question-text"><strong>Q{index + 1}:</strong> {q.question}</p>
            {q.options.map((option, i) => (
              <label key={i} className="quiz-option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  disabled={showResults}
                />
                {option}
              </label>
            ))}
            {showResults && (
              <p className={`feedback ${selectedAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}>
                {selectedAnswers[index] === q.answer ? '✅ Correct!' : `❌ Incorrect. Correct answer: ${q.answer}`}
              </p>
            )}
          </div>
        ))}

        {!showResults && (
          <button className="quiz-submit" onClick={handleSubmit}>Submit Answers</button>
        )}
      </div>
    </section>
  );
}
