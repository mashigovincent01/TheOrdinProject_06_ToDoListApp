import project from "./project";

const toDoList = ()=>{
    let projects = [];
    projects.push(project('Default'));
    
    const addProject = (projectName)=>{
        if(!exists(projectName)){
            console.log("Hello there", projectName);
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
            if(projects[i].getProjectName() === projectName){
                projects[i].removeTask(index);
                return;
            }
            
        }
    }

    const printProjects =()=>{
        projects.forEach((project)=>{
            console.log("#############################################");
            project.printTasks();
            console.log("##############################################");
        });
    }
    const removeProject = (projectName)=>{
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getProjectName() === projectName){
                projects.splice(i, 1);
                return;
            }
            
        }
    }
    
    return {
        addProject,
        getProjects,
        getTasks,
        printProjects,
        addTask,
        removeTask,
        removeProject,
    }
}

export default toDoList;