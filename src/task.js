//This is a factory function to create tasks
import {isAfter} from "date-fns";
const task = (tit, desc, dueDat, don)=>{
    let title = tit;
    let description = desc
    let date = dueDat
    //let notes = note
    let complete = isAfter(new Date(), dueDat);

    const editTask = (ti, des, dueDate , done)=>{
        title = ti;
        description = des;
        date = dueDate;
        complete = isAfter(new Date(), dueDate);
    }
    
    const getTitle = ()=> title;
    const getDescription = ()=> description
    const getDate = ()=> date;
    const getComplete = ()=> complete;
    const printTask = ()=>{
        console.log(
            {
                title, description, date, complete
            }
        );
    }
    
    return{
        editTask,
        printTask,
        getTitle,
        getDate,
        getComplete,
        getDescription
    }

}

export default task;