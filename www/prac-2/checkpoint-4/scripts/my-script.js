let currentQuestionNumber = 0;

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
  currentQuestionNumber++;

  if (currentQuestionNumber < questions.length) {
    getQuestion();

    clearSelection("choices");
  } else {
    event.target.style.display = "none";
  }
}

function init() {
  const player = document.getElementById("player-name");
  player.innerText = getUrlParam("name");

  getQuestion();

  const nextButton = document.querySelector("input[type='button']");
  nextButton.addEventListener("click", next);
}

init();
