//This is a factory function to create tasks
const task = ()=>{
    let title = ""
    let description = ""
    let date = null;
    let notes = ""
    let complete = "";

    const editTask = (ti, des, dueDate , not, done)=>{
        title = ti;
        description = des;
        date = dueDate;
        notes = not;
        complete = done;
    }
    const getTitle = ()=> title;
    const getDescription = ()=> description
    const getDate = ()=> date;
    const getNotes = ()=> notes;
    const getComplete = ()=> complete;
    const printTask = ()=>{
        console.log(
            {
                title, description, date, notes, complete
            }
        );
    }
    
    return{
        editTask,
        printTask,
        getTitle,
        getDate,
        getComplete,
        getNotes,
        getDescription
    }

}

export default task;