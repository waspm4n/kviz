const QUIZ = [
  {
    id: 1,
    question: "Koja je najveca planina na svetu?",
    answers: ["Kilimandzaro", "Kopaonik", "Fudzi", "Mont Everest", "K2"],
    correct_answer: "Mont Everest",
    points: 5,
  },
  {
    id: 2,
    question: "Koliko minuta traje fudbalska utakmica?",
    answers: [45, 60, 90, 75, 120],
    correct_answer: 90,
    points: 10,
  },
  {
    id: 3,
    question: "Koja se valuta koristi u Japanu?",
    answers: ["Dinar", "Rublja", "Dolar", "Yen"],
    correct_answer: "Yen",
    points: 15,
  },
  {
    id: 4,
    question: "Glavni grad Kanade je?",
    answers: ["Otava", "Kvebek", "Toronto", "Vankuver"],
    correct_answer: "Otava",
    points: 20,
  },
  {
    id: 5,
    question: "Najveci okean na svetu je?",
    answers: ["Tihi", "Atlanski", "Indijski"],
    correct_answer: "Tihi",
    points: 1,
  },
];
let currScore = 0;
let currQuestion = 0;
let btnSubmit = document.querySelector("#btn-submit");

function initializeQuiz() {
  const questionContainer = document.querySelector("#pitanje");
  const answersContainer = document.querySelector("#odgovori");
  questionContainer.textContent = "";
  answersContainer.textContent = "";
  questionContainer.textContent = QUIZ[currQuestion].question;
  QUIZ[currQuestion].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    answersContainer.appendChild(button);
    button.addEventListener("click", () => {
      if (answer === QUIZ[currQuestion].correct_answer) {
        currScore += QUIZ[currQuestion].points;
      }
      currQuestion++;
      if (currQuestion < QUIZ.length) {
        initializeQuiz();
      } else {
        questionContainer.style.display = "none";
        answersContainer.style.display = "none";
        document.querySelector("#naziv").style.display = "none";
        displayResults();
      }
    });
    console.log(currScore);
  });
}
function displayResults() {
  const quizContainer = document.querySelector("#main");
  const resultContainer = document.querySelector("#result-container");
  const scoreContainer = document.querySelector("#score");
  resultContainer.classList.add("rezultat");
  resultContainer.style.display = "";
  const nameInput = document.querySelector("#name"); // selektujemo inpute
  const lastNameInput = document.querySelector("#lastName");
  scoreContainer.textContent = `Congrats! ${nameInput.value} ${lastNameInput.value} Your total score is ${currScore} points!`;
  scoreContainer.classList.add("score-container");
}
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); // sprecava restetovanje
  const formContainer = document.querySelector("#form");
  formContainer.style.display = "none"; 
  initializeQuiz(); // load kviz
});
