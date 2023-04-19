showStories();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let stories = localStorage.getItem("stories");
  if (stories == null) {
    storiesObj = [];
  } else {
    storiesObj = JSON.parse(stories);
  }
  storiesObj.push(addTxt.value);
  localStorage.setItem("stories", JSON.stringify(storiesObj));
  addTxt.value = ""; 
  console.log(storiesObj);
  showStories();
});
function showStories() {
    let stories = localStorage.getItem("stories");
    if (stories == null) {
      storiesObj = [];
    } else {
      storiesObj = JSON.parse(stories);
    }
    let html = "";
    storiesObj.forEach(function (element, index) {
      html += `
        <div class="note" >
          <div class="box-body">
            <h5 class="box-title">Story ${index + 1}</h5>
            <p class="text"> ${element}</p>
            <button id="${index}" onclick="editStory(this.id)" class="btn.edit">Edit Story</button>
            <button id="${index}" onclick="deleteStory(this.id)" class="btn.del">Delete Story</button>
          </div>
        </div>`;
    });
    let storiesElm = document.getElementById("stories");
    if (storiesObj.length != 0) {
      storiesElm.innerHTML = html;
    } else {
      storiesElm.innerHTML = `Nothing to show! Use "Write a story" section above to write your story.`;
    }
  }  

function deleteStory(index) {
  let stories = localStorage.getItem("stories");
  if (stories == null) {
    storiesObj = [];
  } else {
    storiesObj = JSON.parse(stories);
  }

  storiesObj.splice(index, 1);
  localStorage.setItem("stories", JSON.stringify(storiesObj));
  showStories();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let storyCards = document.getElementsByClassName('note');
  Array.from(storyCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})
function myFunction(x) {
    document.getElementById("OverlayMenu").style.width = "250px";
  
  }
  function closebtn(){
    document.getElementById("OverlayMenu").style.width = "0";
  }

  function editStory(index) {
    let stories = localStorage.getItem("stories");
    let storiesObj = JSON.parse(stories);
    let story = storiesObj[index];
    let editTxt = prompt("Enter the new story", story);
    if (editTxt === null || editTxt === "") {
      return;
    }
    storiesObj[index] = editTxt;
    localStorage.setItem("stories", JSON.stringify(storiesObj));
    showStories();
  }
  
