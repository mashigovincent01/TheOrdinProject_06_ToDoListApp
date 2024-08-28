import style from './style.css';
import task from './task';
import project from './project';
import toDoList from './toDoList';
import taskCard from './taskCard';
import projectCard from './projectCard';
import toDoListStorage from './toDoListStorage';
import {updateProjects, updateTasks} from './update';
import {newProjectDialog, newTaskDialog} from './dialog';


const storage = toDoListStorage();

const tasks = document.querySelector("#tasks");
const projects = document.querySelector("#projects");
initialization();
function initialization(){
  let todolist = storage.getToDoList();
  
  if(todolist.getProjects().length === 0){
    todolist.addProject("Default");
  }
  updateProjects(todolist);
  storage.updateToDoList(todolist);
  newProjectDialog();
  newTaskDialog();
  updateTasks(todolist, todolist.getProjects()[0].getProjectName())
}




// const myProject = project("school");

// // Create new task instances
// const dates = [
//     new Date(2024, 8, 2),
//     new Date(2025, 1, 11),
//     new Date(2024, 7, 27),
//     new Date(2024, 8, 2),
//     new Date(2025, 1, 11),
//     new Date(2024, 7, 27),
//     new Date(2026, 8, 10),
//   ];

// storage.getToDoList();
// ///console.log(storage);
//   myTodoList.addTask('Default', task("Grocery Shopping", "Buy groceries for the week", dates[0], false));
//   myTodoList.addTask('Default', task("Finish Homework", "Complete math and science assignments", dates[1], false));
//   myTodoList.addTask('Default', task("Clean House", "Tidy up the living room and kitchen", dates[2], false));
//   storage.updateToDoList(myTodoList);
//   let res = storage.getToDoList();
//   //res.printProjects();
//   myTodoList.addProject("School");
  
//   myTodoList.addTask('School', task("Submit Project", "Submit the final version of the science project", dates[3], false));
//   myTodoList.addTask('School', task("Prepare for Exam", "Revise notes and practice past papers", dates[4], false));
//   myTodoList.addTask('School', task("Attend Study Group", "Join the study group session for biology", dates[5], false));
  
// myTodoList.addProject("Work")

// myTodoList.addTask('Work', task("Task 6", "aaa", dates[1], false));
// myTodoList.addTask('Work', task("Task 7", "bbb", dates[5],  false));
// myTodoList.addTask('Work', task("Task 8", "ccc", dates[3],  false));
// storage.updateToDoList(myTodoList);
// res = storage.getToDoList();
//  // res.printProjects();

// //myTodoList.printProjects();





// updateProjects(myTodoList);
// updateTasks(myTodoList, 'School');