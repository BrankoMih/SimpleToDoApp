const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        // create an li element an store it in variable
        let li = document.createElement("li");

        // create a span element for the cross icon
        let span = document.createElement("span");

        // set the text in the li element to the value of the input field
        li.innerHTML = inputBox.value;

        // set the text in the span element to the cross icon code
        span.innerHTML = "\u00d7";

        // add the span element to li
        li.appendChild(span);

        // append the new li element to the list
        listContainer.appendChild(li);
    }
    // clear input filed
    inputBox.value = "";
    // save content
    saveData();
}

// function to check/uncheck and remove tasks from the list
listContainer.addEventListener("click", function(e){
    // check where th user clicked
    //if user clicks the task
    if(e.target.tagName === "LI"){
        // toggle between checked and unchecked
        e.target.classList.toggle("checked");
        saveData();
    }
    // if the user clickes the cross
    else if(e.target.tagName === "SPAN"){
        // remove task from list
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function to store the list content(tasks) to local storage
function saveData(){
    // save list content to local storage under name data
    localStorage.setItem("data", listContainer.innerHTML);
}

// show previously saved content
function showTask(){
    // load the save data to the list
    listContainer.innerHTML = localStorage.getItem("data");
}
// on start load local storage
showTask();