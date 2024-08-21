import projectCard from './projectCard';

import taskCard from './taskCard';

const tasks = document.querySelector("#tasks");
const projects = document.querySelector("#projects");
const updateTasks = (todoList, projectName)=>{

}

const updateProjects = (todoList)=>{
    projects.innerHTML = "";
    const myProjects = todoList.getProjects();

    for(let i = 0; i < myProjects.length; i++){
        projects.appendChild(projectCard(myProjects[i], i));
    }
}

export {updateTasks, updateProjects}