// Generate outputs for loops
const forOutput = [];
for (let i = 0; i <= 10; i++) {
  forOutput.push(`Hello ${i}`);
}
document.getElementById("forOutput").textContent = forOutput.join('\n');

const whileOutput = [];
let number = 0;
while (true) {
  whileOutput.push(`Hello ${number}`);
  number++;
  if (number >= 10) break;
}
document.getElementById("whileOutput").textContent = whileOutput.join('\n');

// Generate outputs for functions
const greetOutput = [];
function greet(name) {
  greetOutput.push(`Hello, ${name}!`);
}
greet("Justin");
document.getElementById("greetOutput").textContent = greetOutput.join('\n');

const addOutput = [];
const add = (a, b) => a + b;
addOutput.push(add(5, 3));
document.getElementById("addOutput").textContent = addOutput.join('\n');


// === Variables section outputs ===
const variablesOutput = [`Language: JavaScript`, `Version: 2023`];
const constLetOutput = [
  "const is block-scoped and can't be reassigned.",
  "let is block-scoped and can be reassigned.",
];

// Display in HTML
document.getElementById("variablesOutput").textContent = variablesOutput.join('\n');
document.getElementById("constLetOutput").textContent = constLetOutput.join('\n');

// === Quiz Data ===
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

// === Render Quiz ===
const quizContainer = document.getElementById("quizContainer");

quizData.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "quiz-question";

  const questionText = document.createElement("p");
  questionText.className = "question-text";
  questionText.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}`;
  questionDiv.appendChild(questionText);

  q.options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "quiz-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${index}`;
    input.value = option;

    label.appendChild(input);
    label.append(` ${option}`);
    questionDiv.appendChild(label);
  });

  quizContainer.appendChild(questionDiv);
});

// === Handle Submit ===
document.getElementById("submitQuiz").addEventListener("click", () => {
  const allQuestions = quizContainer.querySelectorAll(".quiz-question");

  allQuestions.forEach((questionDiv, index) => {
    const selected = questionDiv.querySelector("input:checked");
    const feedback = document.createElement("p");
    feedback.className = "feedback";

    if (selected && selected.value === quizData[index].answer) {
      feedback.textContent = "✅ Correct!";
      feedback.classList.add("correct");
    } else {
      feedback.textContent = `❌ Incorrect. Correct answer: ${quizData[index].answer}`;
      feedback.classList.add("incorrect");
    }

    // Prevent multiple feedback messages
    const oldFeedback = questionDiv.querySelector(".feedback");
    if (oldFeedback) oldFeedback.remove();

    questionDiv.appendChild(feedback);

    // Disable all inputs after submitting
    const inputs = questionDiv.querySelectorAll("input");
    inputs.forEach((i) => (i.disabled = true));
  });

  // Disable submit button
  document.getElementById("submitQuiz").disabled = true;
});
