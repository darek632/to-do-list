import {format } from "date-fns";
import deleteOutline from "./images/trash-can-outline.svg";


const mainDiv = document.getElementById("main-content");
const mainList = document.getElementById("main-tasks");



export function addTaskToHtml(allTasks) { 
    

// const lastBookIndex = allTasks.indexOf(task);

    let lastTaskIndex = allTasks.length-1;
    let lastTask = allTasks[lastTaskIndex];
  


    let newLi = document.createElement("li");

    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");
    // will need to figure out way to add id with dynamic name 'task${index of task}, ideally without also passing the main array as a para'
    let taskCard = document.createElement("div");
    let titleCard = document.createElement("div");
    let descriptionCard = document.createElement("div");
    let dueDateCard = document.createElement("div");
    let deleteButton = document.createElement("button");


    let inputAttributes = {
        type: "checkbox",
        id: `task${lastTaskIndex}`,
        name: `task${lastTaskIndex}`,
        value: `task${lastTaskIndex}`
    };

    
    for (let key in inputAttributes) { 
        newInput.setAttribute(key,inputAttributes[key]);
    } // quicker way than manually setting each attribute

    newLabel.setAttribute("for",`task${lastTaskIndex}`);
    taskCard.classList.add("task-card");
    titleCard.classList.add("task-title");
    descriptionCard.classList.add("task-desc");
    dueDateCard.classList.add("task-due-date");
    newLi.classList.add(`${lastTask.priority}`);

    // document.querySelectorAll('.task-card > div').forEach(element => {
    //     element.classList.add("editable");

    // });


    let tasks = document.querySelectorAll("#main-tasks > *");
    let count = tasks.length;
    console.log(count);

    newLi.setAttribute("data-index",count);
    console.log(newLi);

    

    // let cards = document.querySelectorAll(".card");
    // let count = cards.length;

    // card.setAttribute("data-index",count);
    // console.log(card);

    let formattedDate = format(lastTask.dueDate,"d MMM yy");

    // descriptionCard.add("description");
    titleCard.textContent = lastTask.title;
    descriptionCard.textContent = lastTask.description;
    dueDateCard.textContent = formattedDate;
    // deleteButton.textContent = "Remove task";
    deleteButton.classList.add("delete-task");
     deleteButton.style.backgroundImage = `url(${deleteOutline})`;





    // append divs to li
    // then append li to ul

    // append divs to taskCard 
    // taskCard to li
    //li to mainlist



   
    taskCard.appendChild(titleCard);
    taskCard.appendChild(descriptionCard);
    taskCard.appendChild(dueDateCard);

    newLi.appendChild(newInput);
    newLi.appendChild(newLabel);
    newLi.appendChild(taskCard);
    newLi.appendChild(deleteButton);


    mainList.appendChild(newLi);
}


// main view section is a ul
// with each item from allToDos being an li
// so then, create boilerplate where main content is a ul
// 


// export function displayTaskInModal(task) {

//     const dialogTitle = document.querySelector("#di-ti");
//     const dialogDesc = document.querySelector("#di-desc");
//     const dialogCategory = document.querySelector("#category-value");
//     const dialogDue = document.querySelector("#due-date-value");
//     const dialogPriority = document.querySelector("#priority-value");

//     dialogTitle.textContent = task.title;
//     dialogDesc.textContent = task.description;
//     dialogCategory.textContent = task.category;
//     dialogDue.textContent = task.dueDate;
//     dialogPriority.textContent = task.priority;

//     console.log(dialogTitle.textContent);
    

// }
 