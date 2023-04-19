/*function myFunction(x) {
    document.getElementById("OverlayMenu").style.width = "250px";
  
  }
  function closebtn(){
    document.getElementById("OverlayMenu").style.width = "0";
  }*/
// Define variables
const newEntryForm = document.getElementById('new-entry-form');
const entryList = document.getElementById('entry-list');

// Define functions
function addEntry(title, text) {
  // Create new entry
  const entry = document.createElement('li');
  entry.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
    <div class="entry-actions">
      <button class="edit-entry">Edit</button>
      <button class="delete-entry">Delete</button>
    </div>
  `;
  
  // Add entry to list
  entryList.appendChild(entry) 
}


