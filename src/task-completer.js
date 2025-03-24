export function updateCompletedTask(globalArray,completedArray) {

    const remainingTasks = globalArray.filter((task) => {
        if (task.completed === true) {
            completedArray.push(task);
            return false;
        }
        return true;
       
    });

    globalArray.length = 0;
    console.log(globalArray);
    globalArray.push(...remainingTasks);

    console.log(completedArray);
    console.log(globalArray);
};


    // globalArray.forEach((task, index) => {
    //     if (task.completed === true) {
    //         // remove the task from all toDos 
    //         // push this task to completed array
    //         completedArray.push(task);
    //         globalArray.splice(index,1);
    //     }


    // });
    // console.log(completedArray);
    // console.log(globalArray);
    // return globalArray;

// if (task["completed"] === true) { 
    
//     // task is an object in an array of objects as a value of a 'category' key. so i can still use array methods. 
//     // How to work on the array that is holding the task, do i need to pass it as para?


// }



