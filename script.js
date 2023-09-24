const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
if(!inputBox.value){
    alert("Please write Task name to ADD")
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    // const tsk_action = document.createElement("div");
    // tsk_action.classList.add("btnEdit");
    // const edit = document.createElement("button");
    // edit.classList.add("edit");
    // edit.innerHTML = "Edit";
    // tsk_action.appendChild(edit);
    // li.appendChild(tsk_action);    
}
inputBox.value = "";
// saveDate()
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    //saveDate();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    //saveDate();
}
}, false);

function saveDate(){      //used to save the current tasks in browser storage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showRecord(){     //used to show the saved records(in browser)
    listContainer.innerHTML = localStorage.getItem("data");
}
//showRecord();    