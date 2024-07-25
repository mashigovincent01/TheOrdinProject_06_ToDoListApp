import style from './style.css';
import task from './task';
import project from './project';
import toDoList from './toDoList';
console.log("Hello world");
document.querySelector('h1').classList.add('hello');

const myProject = project("school");

// Create new task instances
const dates = [
    new Date(2024, 8, 2),
    new Date(2025, 1, 11),
    new Date(2024, 7, 27),
    new Date(2024, 8, 2),
    new Date(2025, 1, 11),
    new Date(2024, 7, 27),
    new Date(2026, 8, 10),
  ];
const myTodoList = toDoList();
myTodoList.addTask('Default', task("Task 1", "aaa", dates[0], "aaaa", false));
myTodoList.addTask('Default', task("Task 2", "bbb", dates[1], "bbbb", false));
myTodoList.addTask('Default', task("Task 3", "ccc", dates[2], "cccc", false));


myTodoList.addTask('School', task("Task 3", "aaa", dates[3], "aaaa", false));
myTodoList.addTask('School', task("Task 4", "bbb", dates[4], "bbbb", false));
myTodoList.addTask('School', task("Task 5", "ccc", dates[5], "cccc", false));


myTodoList.addTask('Work', task("Task 6", "aaa", dates[1], "aaaa", false));
myTodoList.addTask('Work', task("Task 7", "bbb", dates[5], "bbbb", false));
myTodoList.addTask('Work', task("Task 8", "ccc", dates[3], "cccc", false));

console.log(myTodoList.getProjects()[0].printTasks());



