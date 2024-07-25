import project from "./project";

const toDoList = ()=>{
    let projects = [];
    projects.push(project('Default'));
    
    const addProject = (projectName)=>{
        if(!exists(projectName)){
            projects.push(project(projectName));
        }
    }
    const getProjects = ()=> projects;
    const getTasks = (projectName)=>{
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getProjectName() === projectName){
                return projects[i].getTasks();
            }
        }
    }
    const exists = (projectName)=>{
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getProjectName() === projectName){
                return true;
            }
        }
        return false;
    }
    const addTask = (projectName, task)=>{
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getProjectName() === projectName){
                projects[i].addTask(task);
            }
        }
    }
    const removeTask = (projectName, index)=>{
        for(let i = 0; i < projects.length; i++){
            projects[i].removeTask(index);
            return;
        }
    }
    const printProjects =()=>{
        console.log(projects)
    }
    return {
        addProject,
        getProjects,
        getTasks,
        printProjects,
        addTask,
        removeTask,
    }
}

export default toDoList;