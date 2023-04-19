const emojiButtons = document.querySelectorAll('.emoji-button');
const moodAverage = document.querySelector('#mood-average');

let moods = [];

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    moods.push(button.value);
  });
});

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const averageMood = calculateAverageMood(moods);

  moodAverage.textContent = `Average Mood: ${averageMood}`;

  moods = [];
});

function calculateAverageMood(moods) {
  const totalMoods = moods.length;
  const totalPoints = moods.reduce((acc, mood) => {
    if (mood === '😊') {
      return acc + 5;
    } else if (mood === '😐') {
      return acc + 3;
    } else if (mood === '😢') {
      return acc + 1;
    } else if (mood === '😡') {
      return acc + 2;
    } else if (mood === '😴') {
      return acc + 4;
    }
  }, 0);

  const averagePoints = totalPoints / totalMoods;

  if (averagePoints >= 4.5) {
    return '😊';
  } else if (averagePoints >= 3.5) {
    return '😐';
  } else if (averagePoints >= 2.5) {
    return '😢';
  } else if (averagePoints >= 1.5) {
    return '😡';
  } else{
    return '😴';
  }

}

function toggleButton(id) {
    var buttons = document.querySelectorAll(".emoji-button");
    var clickedButton = document.getElementById(id);
    if (clickedButton.classList.contains("selected")) {
      clickedButton.classList.remove("selected");
    } else {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
      }
      clickedButton.classList.add("selected");
    }
  }

function myFunction(x) {
    document.getElementById("OverlayMenu").style.width = "250px";
  
  }
  function closebtn(){
    document.getElementById("OverlayMenu").style.width = "0";
  }
