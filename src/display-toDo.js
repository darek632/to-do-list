import { allToDos } from "./index.js";
import { format } from "date-fns";
import deleteOutline from "./images/trash-can-outline.svg";

const mainDiv = document.getElementById("main-content");
const mainList = document.getElementById("main-tasks");

export function addTaskToPage(allTasks) {
    let lastTask = allTasks[allTasks.length-1];


}

export function displayAll(taskArray) { 

    if (!taskArray || taskArray.length === 0) {
         // empty array will still return truthy value so need to catch it using length
         return;

    } else { 
   
        taskArray.forEach((task) => {

            let newLi = document.createElement("li");

            let newInput = document.createElement("input");
            let newLabel = document.createElement("label");
            let taskCard = document.createElement("div");
            let titleCard = document.createElement("div");
            let descriptionCard = document.createElement("div");
            let dueDateCard = document.createElement("div");
            let deleteButton = document.createElement("button");

            let globalIndex = allToDos.indexOf(task);


            let inputAttributes = {
                type: "checkbox",
                id: `task${globalIndex}`,
                name: `task${globalIndex}`,
                value: `task${globalIndex}`
            };

            
            for (let key in inputAttributes) { 
                newInput.setAttribute(key,inputAttributes[key]);
            } // quicker way than manually setting each attribute

            newLabel.setAttribute("for",`task${globalIndex}`);
            taskCard.classList.add("task-card");
            titleCard.classList.add("task-title");
            descriptionCard.classList.add("task-desc");
            dueDateCard.classList.add("task-due-date");
            newLi.classList.add(`${task.priority}`);
        




            // let tasks = document.querySelectorAll("#main-tasks > *");
            // let count = tasks.length;
            // console.log(count);

            newLi.setAttribute("data-index",globalIndex);
            console.log(newLi);

            
            let formattedDate = format(task.dueDate,"d MMM yy");

        
        
            titleCard.textContent = task.title;
            descriptionCard.textContent = task.description;
            dueDateCard.textContent = formattedDate;
            // deleteButton.textContent = "Remove task";
            deleteButton.classList.add("delete-task");
            deleteButton.style.backgroundImage = `url(${deleteOutline})`;



        
            taskCard.appendChild(titleCard);
            taskCard.appendChild(descriptionCard);
            taskCard.appendChild(dueDateCard);
        

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            newLi.appendChild(taskCard);
            newLi.appendChild(deleteButton);


            mainList.appendChild(newLi);
        });

    };  

    
}

