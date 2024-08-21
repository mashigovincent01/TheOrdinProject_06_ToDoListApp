import projectCard from './projectCard';

import taskCard from './taskCard';

const tasks = document.querySelector("#tasks");
const projects = document.querySelector("#projects");
const projectHeader = document.querySelector("#project-header");
const updateTasks = (todoList, projectName)=>{
    const myTasks = todoList.getTasks(projectName);

    projectHeader.innerHTML = `<h2>${projectName}</h2>`;
    for(let i = 0; i < myTasks.length; i++){
        tasks.appendChild(taskCard(myTasks[i], i));
    }
}

const updateProjects = (todoList)=>{
    projects.innerHTML = "";
    const myProjects = todoList.getProjects();

    for(let i = 0; i < myProjects.length; i++){
        projects.appendChild(projectCard(myProjects[i], i));
    }
}

export {updateTasks, updateProjects}