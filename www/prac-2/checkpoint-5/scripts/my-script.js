
let currentQuestionNumber = 0;

let correctAnswers = 0;
function getSelection(name) {
  const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
  return selectedOption ? selectedOption.value : "";
}

function clearSelection(name) {
  const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
  if (selectedOption) {
      selectedOption.checked = false;
  }
}

function getQuestion() {
  const questionNumberText = document.querySelector("#quiz p:nth-child(1)");
  questionNumberText.textContent = `Question ${currentQuestionNumber + 1}`;

  const questionText = document.querySelector("#quiz p:nth-child(2)");
  questionText.textContent = questions[currentQuestionNumber]["question"];

  const choiceALabel = document.querySelector("#choice-A");
  choiceALabel.textContent = questions[currentQuestionNumber]["choiceA"];

  const choiceBLabel = document.querySelector("#choice-B");
  choiceBLabel.textContent = questions[currentQuestionNumber]["choiceB"];

  const choiceCLabel = document.querySelector("#choice-C");
  choiceCLabel.textContent = questions[currentQuestionNumber]["choiceC"];
}

function next(event) {
  
  const playerSelection = getSelection("choices");

  const correctAnswer = questions[currentQuestionNumber]["answer"];

  if (playerSelection === correctAnswer) {
      correctAnswers++;
  }

  currentQuestionNumber++;

  if (currentQuestionNumber < questions.length) {
    
      getQuestion();

      clearSelection("choices");
  } else {
     
      event.target.style.display = "none";
      showResults();
  }
}

function showResults() {
  
  const scorePercentage = (correctAnswers / questions.length) * 100;

  const quizDiv = document.getElementById("quiz");
  const resultsDiv = document.getElementById("results");

  const resultsParagraph = resultsDiv.querySelector("p");

  if (scorePercentage < 30) {
      resultsParagraph.textContent = `Bad luck. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${questions.length}).`;
  } else if (scorePercentage >= 30 && scorePercentage <= 75) {
      resultsParagraph.textContent = `Not bad. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${questions.length}).`;
  } else {
      resultsParagraph.textContent = `Impressive. Your final score was ${scorePercentage.toFixed(1)}% (${correctAnswers}/${questions.length}).`;
  }

  quizDiv.style.display = "none";
  resultsDiv.style.display = "block";
}

function init() {
  const player = document.getElementById("player-name");
  player.innerText = getUrlParam("name");

  getQuestion();

  const nextButton = document.querySelector("input[type='button']");
  nextButton.addEventListener("click", next);
}

init();
