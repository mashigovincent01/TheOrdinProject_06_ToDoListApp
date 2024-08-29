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
    const sortTasks = () => {
        tasks.sort((task1, task2) => {
            // Compare task dates and sort them in ascending order
            if (isAfter(task1.getDate(), task2.getDate())) {
                return 1; // task1 comes after task2
            } else if (isAfter(task2.getDate(), task1.getDate())) {
                return -1; // task1 comes before task2
            } else {
                return 0; // dates are equal
            }
        });
    };

    const updateTask = (othertask, index) => {
        tasks[index] = othertask;
        sortTasks();
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
        sortTasks,
        getTasks,
        addTask,
        printTasks,
        removeTask,
        getProjectName,
        updateTask
        
    }
}

export default project;