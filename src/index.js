import style from './style.css';
import task from './task';
import project from './project';
import toDoList from './toDoList';


const myTodoList = toDoList();
const newProject = document.querySelector("#new-project");
const addProjectDialog = document.querySelector("#add-project-dialog");

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

myTodoList.addTask('Default', task("Task 1", "aaa", dates[0],  false));
myTodoList.addTask('Default', task("Task 2", "bbb", dates[1],  false));
myTodoList.addTask('Default', task("Task 3", "ccc", dates[2],  false));

myTodoList.addProject("School");

myTodoList.addTask('School', task("Task 3", "aaa", dates[3],  false));
myTodoList.addTask('School', task("Task 4", "bbb", dates[4],  false));
myTodoList.addTask('School', task("Task 5", "ccc", dates[5], false));

myTodoList.addProject("Work")

myTodoList.addTask('Work', task("Task 6", "aaa", dates[1], false));
myTodoList.addTask('Work', task("Task 7", "bbb", dates[5],  false));
myTodoList.addTask('Work', task("Task 8", "ccc", dates[3],  false));


myTodoList.printProjects();




