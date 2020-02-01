const data = [
  {
    id: 1,
    question: "You wake up after the hackathon and about to leave the house.",
    option1: "Leave the house with a reusable bag?",
    option2: "You're in a rush, forget the bag!",
    correct: "Leave the house with a reusable bag?"
  },
  {
    id: 2,
    question: "You wake up after the hackathon and about to leave the house.",
    option1: "Leave the house with a reusable bag?",
    option2: "You're in a rush, forget the bag!",
    correct: "Leave the house with a reusable bag?"
  },
  {
    id: 3,
    question: "You wake up after the hackathon and about to leave the house.",
    option1: "Leave the house with a reusable bag?",
    option2: "You're in a rush, forget the bag!",
    correct: "Leave the house with a reusable bag?"
  },
  {
    id: 4,
    question: "You wake up after the hackathon and about to leave the house.",
    option1: "Leave the house with a reusable bag?",
    option2: "You're in a rush, forget the bag!",
    correct: "Leave the house with a reusable bag?"
  }
];

const handleNameInput = function() {
  const username = document.getElementById(`name`).value;
  // if the input name is not defined, toggle error
  if (!username) {
    document.getElementById("name-error").style.visibility = "visible";
    return;
  } else {
    // toggle error if visible and remove start up window
    document.getElementById("name-error").style.visibility = "hidden";
    document.getElementById("input-container").style.display = "none";
  }
  // display the input name and scoreboard on screen
  document.getElementById("saved-username").style.visibility = "visible";
  document.getElementById("scoreboard").style.visibility = "visible";
  document.getElementById("event-card").style.visibility = "visible";
  document.getElementById("rewards").style.visibility = "visible";
  document.getElementById("saved-username").innerText = username;

  assign();
};

let totalScore = 0;

const handleEvents = function() {
  let score = document.getElementById("points");

  score.innerText = totalScore;
};

let currentId = 0;

const isCorrect = function(choice) {
  const { correct } = data[currentId];

  if (choice === correct) {
    totalScore += 5;
    handleEvents();
  } else {
    totalScore -= 1;
    handleEvents();
  }
  // check data.length before increasing counter
  if (currentId < data.length - 1) {
    currentId += 1;
  } else {
    console.log("congrats");
  }
};

function change_background_image(url) {
  document.body.style.backgroundImage = url;
}

const assign = function() {
  let eventQuestion = document.getElementById("question");

  let eventOption1 = document.getElementById("option1");
  let eventOption2 = document.getElementById("option2");
  const { question, id, option1, option2, correct } = data[currentId];
  eventQuestion.innerHTML = question;
  eventOption1.innerHTML = option1;
  eventOption2.innerHTML = option2;
};
