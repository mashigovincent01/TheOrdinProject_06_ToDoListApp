import style from './style.css';
import task from './task';
import project from './project';

console.log("Hello world");
document.querySelector('h1').classList.add('hello');

const myProject = project();

// Create new task instances
let task1 = task();
const dates = [
    new Date(2024, 8, 2),
    new Date(2025, 1, 11),
    new Date(2024, 7, 27),
  ];
task1.editTask("Task 1", "Important task", dates[0], "Hello there", false);
myProject.addTask(task1);

let task2 = task();
task2.editTask("Task 2", "Another task", dates[1], "General notes", false);
myProject.addTask(task2);

let task3 = task();
task3.editTask("Task 3", "Yet another task", dates[2], "Additional notes", false);
myProject.addTask(task3);

// Print all tasks
myProject.printTasks();


