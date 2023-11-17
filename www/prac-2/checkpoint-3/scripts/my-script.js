function getQuestion() {
    
    const questionText = document.querySelector("#quiz p:nth-child(2)");
    questionText.textContent = questions[0]["question"];

  
    const choiceALabel = document.querySelector("#choice-A");
    choiceALabel.textContent = questions[0]["choiceA"];

    const choiceBLabel = document.querySelector("#choice-B");
    choiceBLabel.textContent = questions[0]["choiceB"];

    const choiceCLabel = document.querySelector("#choice-C");
    choiceCLabel.textContent = questions[0]["choiceC"];
}

function init()
{
    const player = document.getElementById("player-name");
    player.innerText = getUrlParam("name"); 

    getQuestion();
}

init();
