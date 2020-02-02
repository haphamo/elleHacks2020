const data = [
  {
    id: 1,
    question: "The hackathon is over and you've hopefully caught up on sleep. You are leaving the house.",
    option1: "Leave the house with a reusable bag?",
    option2: "You're in a rush, forget the bag!",
    correct: "Leave the house with a reusable bag?"
  },
  {
    id: 2,
    question: "You are craving apples so you head to the grocery store.",
    option1: "You buy the locally grown apples.",
    option2: "You buy the apples from Mexico.",
    correct: "You buy the locally grown apples."
  },
  {
    id: 3,
    question: "You happen to see a glass jar with a metal lid on the floor.",
    option1: "You throw the item into the recycling bin.",
    option2: "You toss the glass jar into the recycle bin and the metal lid in the garbage.",
    correct: "You toss the glass jar into the recycle bin and the metal lid in the garbage."
  },
  {
    id: 4,
    question: "Your get a reminder to replace your old home appliances with energy efficient ones.",
    option1: "You will think about it later.",
    option2: "You purchase the energy efficient appliances.",
    correct: "You purchase the energy efficient appliances."
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
  document.getElementById("list-of-rewards").style.visibility = "visible";
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

  if (currentId < data.length) {
    if (choice === correct) {
      totalScore += 5;
      handleEvents();
    } else {
 
      totalScore -= 1;
      handleEvents();
    } 
  }
  
  // check data.length before increasing counter
  if (currentId < data.length -1) {
    
    currentId += 1;
    assign();
    handleEvents();
  } else {
    if (currentId === data.length){
     return 

    } else {
      
      console.log("congrats");
      console.log("currentId", currentId);
      complete();
      handleEvents();
    }
  }
  
};

function change_background_image(url) {
  document.body.style.backgroundImage = url;
}

const assign = function() {
  let eventQuestion = document.getElementById("question");

  let eventOption1 = document.getElementById("option1");
  let eventOption2 = document.getElementById("option2");
  const { question, option1, option2 } = data[currentId];
  eventQuestion.innerHTML = question;
  eventOption1.innerHTML = option1;
  eventOption2.innerHTML = option2;
};

function complete(){
  document.getElementById('video').style.display = "";

}
