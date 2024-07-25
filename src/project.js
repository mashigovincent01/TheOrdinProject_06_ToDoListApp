import task from './task';
import {isAfter} from "date-fns";
const project = (name)=>{
    let projectName = name;
    let tasks = [];
    const getProjectName = ()=> projectName;
    const getTasks = ()=> tasks;
    const addTask = (task)=>{
        if(isAfter(task.getDate(), new Date())){
            if(tasks.length === 0){
                tasks.push(task);
                return;
            }
            tasks.push(task);
            if(isAfter(tasks[tasks.length-2].getDate(), tasks[tasks.length-1].getDate())){
                let temp = tasks[tasks.length-2];
                tasks[tasks.length-2] = tasks[tasks.length-1];
                tasks[tasks.length-1] = temp;
            }
        }
        
    }
    const printTasks = ()=>{
        console.log(projectName);
        tasks.forEach((task)=>{
            task.printTask();
        });
    }
    const removeTask = (index)=>{
        if(index < 0 || index >= tasks.length){
            return;
        }
        tasks.splice(index, 1);
    }

    
    return {
        getTasks,
        addTask,
        printTasks,
        removeTask,
        getProjectName,
        
    }
}

export default project;