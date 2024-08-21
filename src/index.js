import style from './style.css';
import task from './task';
import project from './project';
import toDoList from './toDoList';
import taskCard from './taskCard';
import projectCard from './projectCard';
import {updateProjects, updateTasks} from './update';


const myTodoList = toDoList();
const newProject = document.querySelector("#new-project");
const addProjectDialog = document.querySelector("#add-project-dialog");
const tasks = document.querySelector("#tasks");
const projects = document.querySelector("#projects");

function handleNewProject(){
  addProjectDialog.showModal();
  const addProjectButton = document.querySelector("#add-project-button");
  addProjectButton.addEventListener("click", ()=>{
    let projectName = document.querySelector("#project-name").value;
    if(projectName !== ""){
      
      myTodoList.addProject(projectName);
      myTodoList.printProjects();
      addProjectDialog.close();
    }
  });
}
newProject.addEventListener("click", handleNewProject);

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

  myTodoList.addTask('Default', task("Grocery Shopping", "Buy groceries for the week", dates[0], false));
  myTodoList.addTask('Default', task("Finish Homework", "Complete math and science assignments", dates[1], false));
  myTodoList.addTask('Default', task("Clean House", "Tidy up the living room and kitchen", dates[2], false));
  
  myTodoList.addProject("School");
  
  myTodoList.addTask('School', task("Submit Project", "Submit the final version of the science project", dates[3], false));
  myTodoList.addTask('School', task("Prepare for Exam", "Revise notes and practice past papers", dates[4], false));
  myTodoList.addTask('School', task("Attend Study Group", "Join the study group session for biology", dates[5], false));
  
myTodoList.addProject("Work")

myTodoList.addTask('Work', task("Task 6", "aaa", dates[1], false));
myTodoList.addTask('Work', task("Task 7", "bbb", dates[5],  false));
myTodoList.addTask('Work', task("Task 8", "ccc", dates[3],  false));


myTodoList.printProjects();




//console.log(taskCard(2, 2).innerHTML);
//console.log(myTodoList.getProjects());
//tasks.appendChild(taskCard(myTodoList.getProjects()[0].getTasks()[0], 0));
// console.log(myTodoList.getProjects()[0])
// projects.appendChild(projectCard(myTodoList.getProjects()[0], 0));
updateProjects(myTodoList);
updateTasks(myTodoList, 'School');