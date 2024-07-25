import style from './style.css';
import task from './task';
import project from './project';
import toDoList from './toDoList';
console.log("Hello world");
document.querySelector('h1').classList.add('hello');

const myProject = project("school");

// Create new task instances
let task1 = task();
const dates = [
    new Date(2024, 8, 2),
    new Date(2025, 1, 11),
    new Date(2024, 7, 27),
    new Date(2024, 8, 2),
    new Date(2025, 1, 11),
    new Date(2024, 7, 27),
  ];
task1.editTask("Task 1", "Important task", dates[0], "Hello there", false);


let task2 = task();
task2.editTask("Task 2", "Another task", dates[1], "General notes", false);
myProject.addTask(task2);

let task3 = task();
task3.editTask("Task 3", "Yet another task", dates[2], "Additional notes", false);
myProject.addTask(task3);

const work = project('Work');
let task4 = task()
task4.editTask("Task 4", "Yet another task", dates[3], "Additional notes", false);
work.addTask(task4);

let task5 = task()
task5.editTask("Task 4", "Yet another task", dates[3], "Additional notes", false);
work.addTask(task5);

const myTodoList = toDoList();



