// ============================================
// QUIZ APP
// ============================================

// This quiz app works by:
// 1. Selecting random questions from a pool
// 2. Displaying one question at a time with multiple choice options
// 3. Immediately showing correct/wrong feedback when user selects an answer
// 4. Tracking score and showing results at the end
//
// Key features:
// - selectedAnswer starts as null (not 0) to distinguish "no selection" from "first option"
// - When user clicks an answer, it immediately shows if it's correct or wrong
// - Correct answer is always highlighted in green
// - Options are locked after selection to prevent changing answers
// - Next button is enabled only after user selects an answer

// ============================================
// GET HTML ELEMENTS
// ============================================
let questionEl = document.querySelector(".question");
let list = document.getElementById("options");
let progressEl = document.getElementById("progress");
let skipBtn = document.getElementById("skip-btn");
let nextBtn = document.getElementById("next-btn");

let mainQuiz = document.querySelector(".container");
let endResult = document.querySelector(".show-result");
let resultp = document.getElementById("resultp");
let resultn = document.getElementById("resultn");
let restartBtn = document.querySelector(".restartButton");

// ============================================
// QUIZ STATE
// ============================================
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
const TOTAL_QUESTIONS = 10;

// ============================================
// SHUFFLE AND SELECT QUESTIONS
// ============================================
function shuffleArray(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

let quizQuestions = shuffleArray(questions).slice(0, TOTAL_QUESTIONS);

// ============================================
// LOAD QUESTION
// ============================================
function loadQuestion() {
  selectedAnswer = null;
  nextBtn.disabled = true;

  let currentQuestion = quizQuestions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;
  progressEl.textContent = currentQuestionIndex + 1 + "/" + TOTAL_QUESTIONS;

  list.innerHTML = "";
  let letters = ["A", "B", "C", "D"];

  currentQuestion.options.forEach(function (option, index) {
    let li = document.createElement("li");
    li.className = "option";
    li.setAttribute("data-index", index);
    li.innerHTML = "" + letters[index] + ". " + option;
    li.addEventListener("click", function () {
      selectOption(index);
    });
    list.appendChild(li);
  });
}

// ============================================
// SELECT OPTION
// ============================================
function selectOption(index) {
  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = index;
  nextBtn.disabled = false;

  let currentQuestion = quizQuestions[currentQuestionIndex];
  let allOptions = document.querySelectorAll(".option");

  allOptions.forEach(function (option) {
    option.style.pointerEvents = "none";
  });

  if (selectedAnswer === currentQuestion.correct) {
    score++;
    allOptions[selectedAnswer].classList.add("correct");
  } else {
    allOptions[selectedAnswer].classList.add("wrong");
    allOptions[currentQuestion.correct].classList.add("correct");
  }
}

// ============================================
// NEXT QUESTION
// ============================================
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= TOTAL_QUESTIONS) {
    showResult();
  } else {
    loadQuestion();
  }
}

// ============================================
// SKIP QUESTION
// ============================================
function skipQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= TOTAL_QUESTIONS) {
    showResult();
  } else {
    loadQuestion();
  }
}

// ============================================
// SHOW RESULT
// ============================================
function showResult() {
  let percentage = Math.round((score / TOTAL_QUESTIONS) * 100);

  mainQuiz.style.display = "none";
  endResult.style.display = "block";

  resultp.textContent = percentage + "%";
  resultn.textContent =
    "You got " + score + " / " + TOTAL_QUESTIONS + " correct!";

  restartBtn.onclick = function () {
    location.reload();
  };
}

// ============================================
// EVENT LISTENERS
// ============================================
nextBtn.addEventListener("click", function () {
  nextQuestion();
});

skipBtn.addEventListener("click", function () {
  skipQuestion();
});

// ============================================
// INITIALIZE QUIZ
// ============================================
endResult.style.display = "none";
loadQuestion();
