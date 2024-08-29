import projectCard from './projectCard';
import toDoListStorage from './toDoListStorage';
import taskCard from './taskCard';
import task from './task';

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
            const  index  = parseInt(e.currentTarget.id.match(/\d+/)[0], 10);
            let projectName = projectHeader.textContent;
            const taskinfo = storage.getToDoList().getTasks(projectName)[index];
            const dialog = document.querySelector("#dialog");
            dialog.innerHTML = `
        <h2>New Task</h2>
                <fieldset>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" value="${taskinfo.getTitle()}">
                </fieldset>

                <fieldset>
                    <label for="description">Description</label>
                <textarea name="description" id="description" rows="4" cols="50">${taskinfo.getDescription()}</textarea>
                </fieldset>
                <fieldset>
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date" value="${taskinfo.getDate().toISOString().substring(0, 10)}">

                </fieldset>
                <input type="button" class="button" id="edit-task-button" value="edit-task">
                `;
                dialog.showModal();
            const editTaskButton = document.querySelector("#edit-task-button");
            editTaskButton.addEventListener("click", ()=>{
                const title = document.getElementById("title").value.trim();
                const description = document.getElementById("description").value.trim();
                const date = document.getElementById("date").value;
                if(title !== "" && description !== "" && date !== ""){
                  const myTodoList = storage.getToDoList();
                  myTodoList.updateTask(projectName, task(title, description, new Date(date), false), index);
                  storage.updateToDoList(myTodoList);
                  updateTasks(myTodoList, projectName);
                }
                dialog.close();
            })
                
            
        });
    });
}


function updateDeleteIcons(){
    const deleteIcons = document.querySelectorAll(".delete-icon");
    console.log(deleteIcons);
    deleteIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            const  index  = parseInt(e.currentTarget.id.match(/\d+/)[0], 10);

            const projectName = projectHeader.textContent;
            //alert("Hello world" + " " + index + " " + projectName );
            const mytodolist = storage.getToDoList();
            mytodolist.removeTask(projectName, index);
            updateTasks(mytodolist, projectName);
            storage.updateToDoList(mytodolist);
            
        });
    });
}
function updateDeleteProjectIcons(){
    const deleteProjectIcons = document.querySelectorAll(".delete-project");
    console.log(deleteProjectIcons);
    deleteProjectIcons.forEach((icon)=>{
        icon.addEventListener("click", (e)=>{
            const  index  = parseInt(e.currentTarget.id.match(/\d+/)[0], 10);
            //alert(index);
            const mytodolist = storage.getToDoList();
            const projectName = mytodolist.getProjects()[index].getProjectName();
            mytodolist.removeProject(projectName);
           if(mytodolist.getProjects().length === 0){
                projectHeader.innerHTML = "";
           }
           else{
            projectHeader.innerHTML = mytodolist.getProjects()[0].getProjectName();
                updateTasks(mytodolist, mytodolist.getProjects()[0].getProjectName());
           }
            updateProjects(mytodolist);
            storage.updateToDoList(mytodolist);
            //updateTasks(mytodolist, projectName)
            //alert("Hello world" + " " + e.currentTarget.id);
            
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
    console.log("HELLO WORLD")

    projects.innerHTML = "";
    const myProjects = todoList.getProjects();
    console.log(myProjects);
    for(let i = 0; i < myProjects.length; i++){
        projects.appendChild(projectCard(myProjects[i], i));
    }
    updateDeleteProjectIcons();
    updateDisplayProjectIcons();
}

export {updateTasks, updateProjects}