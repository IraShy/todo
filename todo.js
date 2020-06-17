
const container = document.querySelector(".container");
let form = document.querySelector("form");
let num = document.querySelector(".number");
let tasksNum = Number(num.innerText);
let tasks = document.getElementsByClassName("todo");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newP = document.createElement("p");
  let newItem = event.target[0].value;
  event.target[0].value = '';
  newP.innerText = newItem;
  if (newP.innerText) {
    newP.classList = "todo";
    container.prepend(newP);
    tasksNum ++;
    num.innerText = tasksNum;
  }
})

container.addEventListener("click", (event) => {
  const task = event.toElement;
  if (task.classList.contains('todo')) {
    task.classList = "done";
    tasksNum --;
    num.innerText = tasksNum;
  } else {
      task.classList = "todo";
      tasksNum ++;
      num.innerText = tasksNum;
  }
})


// Extra:

// 1. Allow tasks to be marked as complete.
// 2. Add a progress bar to show % of tasks completed.
// 3. Allow tasks to be removed.
// 4. Update the input functionality. It should also search the tasks as a user types.
// 5. Refreshing the page wipes all our data! Find a way to persist data.




// below doesn't work, the program doesn't even go there
// toggleStatus = (event) => {
//   const task = event.target;
//   if (task.classList.contains('todo')) {
//     console.dir(task);
//     task.classList = "done"
//   }
// }


