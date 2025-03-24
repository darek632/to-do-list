
export class ToDoItem { 
    constructor(title,description,dueDate,priority,category = "general", completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.category = category;
        this.completed = completed;
    }
    displayToDo() {
        console.log(this.title.toUpperCase());
        console.log(this.description);
        console.log(this.dueDate);
        console.log(this.priority);
        console.log(this.category);
        console.log(this.completed);
       
    }

}