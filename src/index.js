// index.js
import { greeting } from "./greeting.js";
import "./styles.css"
import sampleImage from "./images/boomer-tech-help.png";
import { ToDoItem } from "./create-toDo.js";
import { updateCategory , updateTitle , updateDesc, updatePriority, updateCompletion } from "./update-attributes.js";
import {categoriseTasks, categoryNames, categorySplitter } from "./projects.js";
import {displayAll} from "./display-toDo.js";
import { updateCompletedTask } from "./task-completer.js";
import { addTaskToHtml,displayTaskInModal } from "./html-task-creator.js";
import { submitComment } from "./task-comments.js";
import {format } from "date-fns";


// const image = document.createElement("img");
// image.src = sampleImage;
// document.body.appendChild(image);

export let allToDos = [];

const completedToDos = [];

let namesArray = ["Title", "Description", "Due date","Priority", "Category","Completed"];


let firstTask = new ToDoItem("Shave","beard with shaver", "2025-01-27","low", "personal"); 
// category will be visible here already even though only updated later 
// as console logs object reference not snapshot at time, so most updated one will be visible everywhere.

let secondTask = new ToDoItem("Book flights", "to Bilbao for marathon", "January 31, 2025", "high", "personal");

let thirdTask = new ToDoItem("Ask for 2nd account", "to book 2x lime batteries","2025-01-31", "medium","work");


let fourthTask = new ToDoItem("research dunkerque", "trip with the boys 1st week july", "2025-02-12", "low", "home");

let fifthTask = new ToDoItem("buy lights", "to replace the stolen ones", "2025-03-10", "high", "home" );

// addTaskToGlobalArray(allToDos,firstTask,secondTask,thirdTask,fourthTask);




console.log(completedToDos);

// allToDos.push(firstTask,secondTask,thirdTask,fourthTask, fifthTask);

console.log(allToDos);


format (firstTask.dueDate, "dd/MM/yyyy");



// createHtmlTask(fourthTask,allToDos);


// setting the index of li tasks to match those of the allToDo arrays

// let firstIndex = document.querySelector("#main-tasks > *:first-child");

// firstIndex.setAttribute("data-index","0");

// console.log(firstIndex);

// let secondIndex = document.querySelectorAll("#main-tasks>li")[1];
// secondIndex.setAttribute("data-index","1");


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-dialog");
const mainList = document.querySelector("#main-tasks");


// let titleInput = document.getElementById("title-input");
// let descInput  = document.getElementById("description-input");
// let dueDateInput = document.getElementById("date-input");
// let priorityInput = document.getElementById("priority-input");
// let catInput = document.getElementById("category-input");


showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close()
});




// displayTaskInModal(allToDos[2]);
// console.log(allToDos);

let currentEditingTaskIndex = null;


function editClickedModal() { 

    mainList.addEventListener("click", (event) => {
        const taskCard = event.target.closest(".task-card");
       

        if (!taskCard) return;

        const li = event.target.closest("li");

        if (li) {
            const taskId =li.dataset.index;
            const currentTask = allToDos[taskId];

            taskInModal(currentTask,taskId);
            // displayTaskInModal(allToDos[taskId]);
            dialog.showModal();
        }
    

        console.log(taskCard);

        
        

        // let taskIndex = li.dataset.index;
        // console.log(taskIndex);

        // console.log(allToDos[taskIndex]);
        // dialog.showModal();


    })
}

editClickedModal();

document.getElementById("new-task").addEventListener("submit", function (event) {

    // create new task 
    // and update task being edited 
    event.preventDefault();



   let  titleInput = document.getElementById("title-input").value;
    let descInput  = document.getElementById("description-input").value;
   let dueDateInput = document.getElementById("date-input").value;
   console.log(typeof dueDateInput);
    let priorityInput = document.getElementById("priority-input").value;
    let catInput = document.getElementById("category-input").value;

    if (currentEditingTaskIndex !== null) {
      //specifically if task already exists

        allToDos[currentEditingTaskIndex].title = titleInput;
        allToDos[currentEditingTaskIndex].description = descInput;
        // allToDos[currentEditingTaskIndex].dueDate = dueDateInput; 
        // this is likely just getting string from dueDate.value
        // try to change it back to date object 
        let backToDateObject = new Date(dueDateInput);
        console.log(typeof backToDateObject);
        allToDos[currentEditingTaskIndex].dueDate = backToDateObject;

        allToDos[currentEditingTaskIndex].priority = priorityInput;
        allToDos[currentEditingTaskIndex].category = catInput;

        // Update only the edited task.

        saveTasksToLocalStorage(); // storage when EDITING a TASK
        updateTaskInHtml(currentEditingTaskIndex);

        // Reset the index after saving
        currentEditingTaskIndex = null;
    } else {
        // creating a new task 
        let newTask = new ToDoItem(titleInput,descInput,dueDateInput,priorityInput,catInput);

        console.log(newTask);
        allToDos.push(newTask);
        saveTasksToLocalStorage(); // storage when ADDING a NEW TASK
        addTaskToHtml(allToDos);
    }

    event.target.reset();
    dialog.close();
   
    console.log(allToDos);
    
})

// displayClickedModal();

function taskInModal(task, index) { 

    // bring up task in Modal for editing
    let titleInput = document.getElementById("title-input");
    let descInput  = document.getElementById("description-input");
   let dueDateInput = document.getElementById("date-input");
    let priorityInput = document.getElementById("priority-input");
    let catInput = document.getElementById("category-input");

    titleInput.value = task.title;
    descInput.value = task.description;

    //input type="date" requires YYYY-MM-DD format so need to covert before assigning
    //toISOString() converts to YYYY-MM-DDTHH:mm:ss.sssZ format (back to og)
    // split("T")[0] T splits the string at T (the space between date and time) 
    // this turned into array split at T. at [0] gives us just the first part of array which is date

console.log("Type of dueDate before execution:",typeof task.dueDate, task.dueDate);

// dueDate is converted to string once i've 'edited' the task in modal because when getting a value
// from input type="date" the computer will always return string (yyyy-mm-dd) so i need to ensure to turn it back into date object
// before using to iso string() otherewise it won't work on string. 
    // task.dueDate = new Date(dueDateInput.value);
    

    dueDateInput.value = task.dueDate.toISOString().split("T")[0];

    console.log("Type of dueDate after execution:",typeof task.dueDate, task.dueDate);
    priorityInput.value = task.priority;
    catInput.value = task.category;

    currentEditingTaskIndex = index;
}



function updateTaskInHtml(index) {


    // save changes to displayed task once user finishes editing in modal
    const taskLi = document.querySelector(`li[data-index='${index}']`);

   

    if (!taskLi) {
        console.error(`WARNING Task with data-index='${index}' not found in the DOM.`);
        return;
    }

    const taskCard = taskLi.querySelector(".task-card");

    // Ensure task exists before updating
   if (!taskCard) {
    console.error(`WARNING .task-card not found inside <li data-index='${index}'>`);
        return;
   }

    if (taskCard) {
        console.log(typeof allToDos[index].dueDate,allToDos[index].dueDate);

        let dueDate = new Date(allToDos[index].dueDate);

        // Check if the date is valid before formatting
        if (isNaN(dueDate)) {
            console.error("Invalid date detected:", allToDos[index].dueDate);
            dueDate = new Date(); // Fallback to today's date if invalid;
        }

        let formattedDate = format(dueDate, "d MMM yy");
        console.log(typeof allToDos[index].dueDate, allToDos[index].dueDate);
        taskCard.querySelector(".task-title").textContent = allToDos[index].title;
        taskCard.querySelector(".task-desc").textContent = allToDos[index].description;
        taskCard.querySelector(".task-due-date").textContent = formattedDate;
        // turn 
        taskLi.removeAttribute("class"); // may be a problem if we li has other classes.
        taskLi.classList.add(`${allToDos[index].priority}`);
        // taskCard.querySelector(".task-priority").textContent = allToDos[index].priority;
        // taskCard.querySelector(".task-category").textContent = allToDos[index].category;
    }
}
// when clicked locate closest taskCard 
// if not taskCard clicked (empty space/other part) return
// otherwise
// locate closest li to target
// task






// displayTask(firstTask,namesArray);


// array of objects allToDos containing all arrays not in any particular order
// what i need:
// locate all of the category "key" from each object in array
// group all of the same category objects in to a separate array (reduce?/filter?)
// one way of doing is: 
// use object keys to get all possible keys from objects in array
// using this array of keys, go through the global array and use a filter for each one to create separate arrays

// first: access all values at task.category - input into array


// categoriseTasks(allToDos);

// Menu clicking logic

let menuButtons = document.querySelector(".menu-holder");
let taskHolder = document.querySelector("#main-tasks");
let mainContent = document.querySelector('#main-content');

menuButtons.addEventListener("click", (event) => {
    let target = event.target; //brings the clicked element so eg <div>All tasks</div>

    if(!target.matches("button")) {
        return;
    }

    console.log(target);
    taskHolder.textContent = '';

    let buttons = document.querySelectorAll(".menu > button");

    buttons.forEach(button => { 
        button.style.textDecoration = '';
    })

    const buttonsArray = [...buttons];
//    buttonsArray.forEach((button) => { 
//     console.log(button.textContent);
//    })

// what do i need each click to do after clearing:
// firstly i need a category sorter:
// split allToDos into smaller arrays by category

// use the display function to display the categorisedarray

let sortedObject = categoriseTasks(allToDos);


switch (target.id) { 
    case 'all-tasks': 
        // insert what i need to do here
        displayAll(allToDos);
        // target.style.background = '#D9DFC6';
        target.style.textDecoration = "underline";

    
    break;
    case 'personal': 
        displayAll(sortedObject["personal"]);
        // insert what i need to do here
        target.style.textDecoration = "underline";

        
        // target.style.background = '#D9DFC6';
    break;
    case 'home': 
         // insert what i need to do here
         displayAll(sortedObject["home"]);
        // target.style.background = '#D9DFC6';
        target.style.textDecoration = "underline";
    break;
    case 'work': 
         // insert what i need to do here
         displayAll(sortedObject["work"]);
        // target.style.background = '#D9DFC6';
        target.style.textDecoration = "underline";
    break;

}
    
});


// complete a task using tick


mainList.addEventListener("click", (event) => {
    if (event.target.matches("input[type='checkbox']")) { 
        
        let currentTask = event.target.closest("li");
        console.log("the checkbox was clicked");

        if(event.target.checked) {
            currentTask.classList.add("completed");
        } else { 
            currentTask.classList.remove("completed");
        }
        

    }
})

//deleting a task and rearranging data attributes to match index of array after deletion

mainList.addEventListener("click", (event) => {

    if (event.target.matches("button")) {
        let currentTask = event.target.closest("li");
        let arrayIndex = currentTask.dataset.index;
        console.log(arrayIndex);
        console.log(allToDos);
        allToDos.splice(arrayIndex,1);
        currentTask.remove();
        console.log(allToDos);



        const remainingCardsIndex = document.querySelectorAll("li");

                remainingCardsIndex.forEach((task, newIndex) => { 
                    task.setAttribute("data-index", newIndex );
                });
            
    }
});


// console.log(typeof firstTask.dueDate, firstTask.dueDate);

// const firstTaskJSON = JSON.stringify(allToDos[0]);

// // to string

// localStorage.setItem("task0-title", firstTaskJSON) ;

// // set to storage



// let newP = document.createElement("p");

// let itemCheck = localStorage.getItem("task0-title");

// // get from storage

// const firstTaskBack = JSON.parse(itemCheck);

// console.log(typeof firstTaskBack.dueDate, firstTaskBack.dueDate);

// // JSON parse only transforms back to strings/numbers/boolean so any complex data types (array,objects) 
// //revived using a reviver function. 



// mainContent.appendChild(newP);

export function saveTasksToLocalStorage() { 
    localStorage.setItem("allToDos", JSON.stringify(allToDos));
}

export function loadTasksFromLocalStorage() { 
    let storedTasks = localStorage.getItem("allToDos");

    if (storedTasks) { 
        allToDos = JSON.parse(storedTasks, (key, value) => key === "dueDate" ? new Date(value) : value); 
        // return Date of value if dueDate, or just the value unchanged for all other atts.
    } else { 
        allToDos = []; 
        console.log("No user-created tasks found. Showing sample tasks only.");
        // if localStorage empty then returns 'null'. To prevent errors instead set to empty 
        // so blank screen rather than working on null.
        
    }

    // here will need to re-render depending on what is clicked. allToDos for now. 

    // displayAll(allToDos);


   
}

 // STORAGE NEEDS:
 // WHEN:
 // ADDING a NEW TASK > main tasks if index = null
 // EDITING an EXISTING TASK 
 // DELETING A TASK

 loadTasksFromLocalStorage();

//  localStorage.clear();

let clearAll = document.querySelector(".clear-all");

clearAll.addEventListener("click", () => {
    localStorage.clear();
    // all to dos memory will still hold the objects, so also need to clear the program memory
    allToDos = [];
    mainList.textContent = '';
    

    
})

displayAll(allToDos);






























