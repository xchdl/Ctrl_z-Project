document.querySelector('#butn').onclick = function(){
    if(document.querySelector('#todo input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#list').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#todo input').value}
                </span>
                <button class="delete">
                </button>
            </div> `;

        var current_list = document.querySelectorAll(".delete");
        for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var list = document.querySelectorAll(".task");
        for(var i=0; i<list.length; i++){
            list[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#todo input").value = "";
    }
}
