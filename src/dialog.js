import toDoListStorage from "./toDoListStorage";
import {updateProjects, updateTasks} from './update';

import task from "./task";
const dialog = document.querySelector("#dialog");
const storage = toDoListStorage();
const projectHeader = document.querySelector("#project-header");
function newProjectDialog(){
    
    updateNewProjectClick();

}

function newTaskDialog(){
  
           updateNewTaskClick();
}

function updateNewProjectClick(){
    const newProject = document.querySelector("#new-project");
    newProject.addEventListener("click", handleNewProject);
}
function updateNewTaskClick(){
    const newTask = document.querySelector("#new-task");
    newTask.addEventListener("click", handleNewTask);
}

function handleNewTask(){
  dialog.innerHTML = `
  <h2>New Task</h2>
           <fieldset>
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
           </fieldset>

           <fieldset>
            <label for="description">Description</label>
           
           <textarea name="description" id="description" rows="4" cols="30"></textarea>
           </fieldset>
           <fieldset>
            <label for="date">Date</label>
            <input type="date" name="date" id="date">

           </fieldset>
           <input type="button" class="button" id="new-task-button" value="Add Task">
           `;
  dialog.showModal();
    const newTaskButton = document.querySelector("#new-task-button");
    newTaskButton.addEventListener("click", ()=>{
        let projectName = projectHeader.textContent;
        //alert(projectName);
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const date = document.getElementById("date").value;
        if(title !== "" && description !== "" && date !== ""){
          const myTodoList = storage.getToDoList();
          myTodoList.addTask(projectName, task(title, description, new Date(date), false));
          storage.updateToDoList(myTodoList);
          updateTasks(myTodoList, projectName);
        }
        dialog.close();
      
    });
}

function handleNewProject(){
  dialog.innerHTML = `
     <h2>Add Project</h2>
            <label for="project-name"></label>
            <input type="text" name="project-name" id="project-name">
            <button id="add-project-button">Add project</button>
    `;
    dialog.showModal();
    const addProjectButton = document.querySelector("#add-project-button");
    addProjectButton.addEventListener("click", ()=>{
      let projectName = document.querySelector("#project-name").value;
      if(projectName !== ""){
        const myTodoList = storage.getToDoList()
        myTodoList.addProject(projectName);
        storage.updateToDoList(myTodoList);
        updateProjects(myTodoList);
        myTodoList.printProjects();
        dialog.close();
      }
    });
  }
  

export {newProjectDialog, newTaskDialog}