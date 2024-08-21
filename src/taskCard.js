import project from "./project";
import {formatRFC7231} from 'date-fns' ;

const taskCard = (task, index)=>{
    const div = document.createElement("div");
    div.className = "task";
    div.id = "task-" + index;

    div.innerHTML = `
    <div class="task-header">
        <input type="checkbox" name="taskName" id="complete-${index}" ${task.getComplete() ? 'checked' : ''} readonly>
        <h3>${task.getTitle()}</h3>
        <div class="edit-delete">
            <div class="edit-icon" id="edit-${index}"><svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><title>clipboard-edit-outline</title><path d="M21.04 12.13C21.18 12.13 21.31 12.19 21.42 12.3L22.7 13.58C22.92 13.79 22.92 14.14 22.7 14.35L21.7 15.35L19.65 13.3L20.65 12.3C20.76 12.19 20.9 12.13 21.04 12.13M19.07 13.88L21.12 15.93L15.06 22H13V19.94L19.07 13.88M11 19L9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19C20.1 3 21 3.9 21 5V9L19 11V5H17V7H7V5H5V19H11M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z" /></svg></div>
            <div class="delete-icon" id="delete-${index}"><svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></div>
        </div>
        
    </div>
    <div class="task-body">
        <h4>${formatRFC7231(task.getDate())}</h4>
        <p>${task.getDescription()}</p>
    </div>`;
    //to be completed
    return div;
}

export default taskCard;