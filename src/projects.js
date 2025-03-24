// function addCategory(toDo) { 
//     console.log("Please enter category");
//     let newCategory = 

// }


// export function addTaskToGlobalArray (mainArray,...newTasks) {
//     mainArray.push(...newTasks);

// }


export function categoriseTasks(allTasks) {
    const categorised = allTasks.reduce((acc,task) => {
        if (!acc[task.category]) {
            acc[task.category] = [];
        }
        acc[task.category].push(task);
        return acc;
    }, {});

    // console.log(categorised);
    // let size = Object.keys(categorised).length;
    // console.log(size);

    console.log(categorised["personal"]);
    return categorised;

}



   

   



    // // first create an array of all diff values of "category":

    // const categoryValues = [];

    // allTasks.forEach((task) => categoryValues.push(task.category));
    
    // function removeDuplicates(arr) { 
    //     return [...new Set(arr)];
    // }

    // const uniqueCategories = removeDuplicates(categoryValues);


    // // then filter through the global array again, for each category name.

    // uniqueCategories.forEach((category) => {
    //     let categoryArray = [];
    //     allTasks.forEach((task) => {
    //         if(task.category === category) {
    //             categoryArray.push(task);

    //         }
    //     })

    //     return console.log(categoryArray);
    // }
  
    // )
    // so:
    // for first item of array
    // create array named ${value of first item}
    // go through the global array
    // check if each item's category matches the currently iterated category
    //if it does, push it to new category array.



    
export const categorySplitter = function (organisedObject,category) {
    return organisedObject[`${category}`];

}



export function categoryNames(categorisedTasks) { 
    return Object.keys(categorisedTasks);
}

export function categoryAccessor(catNames,categorisedProjects) {
  
    catNames.forEach((category)  => {
        console.log(`${category.toUpperCase()}:`);
        console.log(categorisedProjects[category]);

    }
        ); 
    
    }
