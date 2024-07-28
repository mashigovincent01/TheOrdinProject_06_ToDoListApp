//This is a factory function to create tasks
const task = (tit, desc, dueDat , note, don)=>{
    let title = tit;
    let description = desc
    let date = dueDat
    let notes = note
    let complete = don;

    const editTask = (ti, des, dueDate , done)=>{
        title = ti;
        description = des;
        date = dueDate;
        complete = done;
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