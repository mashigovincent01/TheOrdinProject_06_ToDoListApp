import style from './style.css';
import toDoListStorage from './toDoListStorage';
import {updateProjects, updateTasks} from './update';
import {newProjectDialog, newTaskDialog} from './dialog';


const storage = toDoListStorage();

initialization();
function initialization(){
  let todolist = storage.getToDoList();
  
  if(todolist.getProjects().length === 0){
    todolist.addProject("Default");
  }
  updateProjects(todolist);
  storage.updateToDoList(todolist);
  newProjectDialog();
  newTaskDialog();
  updateTasks(todolist, todolist.getProjects()[0].getProjectName())
}




