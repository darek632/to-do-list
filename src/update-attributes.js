export function updateTitle(toDo,newTitle) { 
    toDo.title = newTitle;
    return toDo;
}

export function updateDesc(toDo,description) {
    toDo.description = description;
    return toDo;
    }


export function updateCategory(toDo,category) { 
        let toDoCategory = "category";
        toDo[toDoCategory] = category;
        // console.log(toDo);
    }
  
export function updateDueDate(toDo,newDate) { 
    toDo.dueDate = newDate;
    return toDo;
}

export function updatePriority(toDo,newPriority) {
    toDo.prioritry = newPriority;
    return toDo;
}

export function updateCompletion(toDo) { 
    if(toDo.completed === false) { 
        toDo.completed = true;
    }
    else if (toDo.completed === true) { 
        toDo.completed = false;
    }

    return toDo;
}