import projectCard from './projectCard';
import toDoListStorage from './toDoListStorage';
import taskCard from './taskCard';

const tasks = document.querySelector("#tasks");
const projects = document.querySelector("#projects");
const projectHeader = document.querySelector("#project-header");
const storage = toDoListStorage();
const updateTasks = (todoList, projectName)=>{
    const myTasks = todoList.getTasks(projectName);
    tasks.innerHTML = "";
    projectHeader.innerHTML = `<h2>${projectName}</h2>`;
    for(let i = 0; i < myTasks.length; i++){
        tasks.appendChild(taskCard(myTasks[i], i));
    }
    updateEditIcons();
    updateDeleteIcons();
}

function updateEditIcons(){
    const editIcons = document.querySelectorAll(".edit-icon");
    console.log(editIcons);
    editIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            
            alert("Hello world" + " " + e.currentTarget.id);
            
        });
    });
}
function updateDeleteIcons(){
    const deleteIcons = document.querySelectorAll(".delete-icon");
    console.log(deleteIcons);
    deleteIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            
            alert("Hello world" + " " + e.currentTarget.id);
            
        });
    });
}
function updateDeleteProjectIcons(){
    const deleteProjectIcons = document.querySelectorAll(".delete-project");
    console.log(deleteProjectIcons);
    deleteProjectIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            
            alert("Hello world" + " " + e.currentTarget.id);
            
        });
    });
}

function updateDisplayProjectIcons(){
    const displayProjectIcons = document.querySelectorAll(".display-project");
    console.log(displayProjectIcons);
    displayProjectIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            
            //alert("Hello world" + " " + e.currentTarget.id);
            const  index  = parseInt(e.currentTarget.id.match(/\d+/)[0], 10);
            
            const mytodolist = storage.getToDoList();
            const projectName = mytodolist.getProjects()[index].getProjectName();
            updateTasks(mytodolist, projectName)
            //alert(index)
        });
    });
}

const updateProjects = (todoList)=>{
    projects.innerHTML = "";
    const myProjects = todoList.getProjects();

    for(let i = 0; i < myProjects.length; i++){
        projects.appendChild(projectCard(myProjects[i], i));
    }
    updateDeleteProjectIcons();
    updateDisplayProjectIcons();
}

export {updateTasks, updateProjects}