const data = [
  {
    id: 1,
    question: "What does the 'I' in Iphone stand for?",
    answers: [
      { answer: "Interactive", isCorrect: true },
      { answer: "Intelligent", isCorrect: false },
      { answer: "Irreplaceable", isCorrect: false },
      { answer: "Integral", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How long does it take for Sun's light to reach Earth?",
    answers: [
      { answer: "5 1/3 minutes", isCorrect: false },
      { answer: "Instant", isCorrect: false },
      { answer: "3 minutes", isCorrect: false },
      { answer: "8 1/3 minutes", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    answers: [
      { answer: "Neptune", isCorrect: false },
      { answer: "Mercury", isCorrect: false },
      { answer: "Jupiter", isCorrect: true },
      { answer: "Venus", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What year was the iphone 6 created?",
    answers: [
      { answer: "2014", isCorrect: true },
      { answer: "2013", isCorrect: false },
      { answer: "2015", isCorrect: true },
      { answer: "2012", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is the capital of canada?",
    answers: [
      { answer: "Montreal", isCorrect: false },
      { answer: "Ontario", isCorrect: true },
      { answer: "Vancouver", isCorrect: false },
      { answer: "Toronto", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Eminem full name is?",
    answers: [
      { answer: "The real slim shady", isCorrect: false },
      { answer: "Marshal Marthers III", isCorrect: false },
      { answer: "Marshall Mathers III", isCorrect: true },
      { answer: "Marshal Marters III", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "The Sony Play station 2 was released in?",
    answers: [
      { answer: "2001", isCorrect: false },
      { answer: "2004", isCorrect: false },
      { answer: "2002", isCorrect: false },
      { answer: "2000", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "Tom and Jerry was created in what year?",
    answers: [
      { answer: "1980", isCorrect: false },
      { answer: "1930", isCorrect: false },
      { answer: "1940", isCorrect: true },
      { answer: "1992", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const questionScreen = document.querySelector(".question");
const answerScreen = document.querySelector(".answer");
const submitButton = document.querySelector(".submit");
const resultScreen = document.querySelector(".result");
const playAgain = document.querySelector(".play");

let questionIndex = 0;
let selectedAnswer;
let correctCount = 0;
let wrongCount = 0;

const showQuestion = (qNumber) => {
  if (questionIndex === data.length) {
    return showResult();
  }
  questionScreen.textContent = data[qNumber].question;
  answerScreen.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class=answer>
    <input type='radio' id=${index} value=${item.isCorrect} name="quiz "/>
    <label for=${index}>${item.answer}</label>
  </div>`
    )
    .join("");
  selectAnswerInput();
};

const selectAnswerInput = () => {
  answerScreen.querySelectorAll("input").forEach((item) =>
    item.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    })
  );
};

const submitAnswer = () => {
  submitButton.addEventListener("click", () => {
    if (selectedAnswer !== undefined) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else {
      alert("Please select an answer");
    }
  });
};

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";
  resultScreen.querySelector(".correct").textContent =
    `Correct answers: ${correctCount}`;
  resultScreen.querySelector(".wrong").textContent =
    `Wrong answers: ${wrongCount}`;
};

const resetGame = ()=> {
    questionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    showQuestion(questionIndex)
}

playAgain.addEventListener("click", ()=> {
    gameScreen.style.display ="block";
    resultScreen.style.display = "none"; 
    resetGame()
})

showQuestion(questionIndex);
submitAnswer();
