import toDoList from "./toDoList";
import project from "./project";
import task from "./task";

const toDoListStorage = () => {
    const getToDoList = () => {
        let storage = localStorage.getItem('myToDoList');
        let mytoDoList;

        if (storage) {
            let parsedProjects = JSON.parse(storage);
            mytoDoList = toDoList();
            parsedProjects.forEach(projectData => {
                //console.log("PROJECT NAME " + projectData.name)
                const newProject = project(projectData.name);
                mytoDoList.addProject(projectData.name);
                console.log(projectData.tasks);
                projectData.tasks.forEach(taskData => {
                    const newTask = task(
                        taskData.title, 
                        taskData.description, 
                        new Date(taskData.date), 
                       // taskData.notes,
                        taskData.complete
                    );
                    newProject.addTask(newTask);
                    mytoDoList.addTask(projectData.name, newTask);
                });
                
            });
        } else {
            mytoDoList = toDoList();
        }

        console.log("GET TODOLIST");
        mytoDoList.printProjects();
        return mytoDoList;
    };

    const updateToDoList = (otherTodoList) => {
        console.log("OTHER TO DO LIST");
        const projectsData = otherTodoList.getProjects().map(proj => ({
            name: proj.getProjectName(),
            tasks: proj.getTasks().map(task => ({
                title: task.getTitle(),
                description: task.getDescription(),
                date: task.getDate(),
                //notes: task.getNotes(),
                complete: task.getComplete(),
            })),
        }));
        localStorage.setItem("myToDoList", JSON.stringify(projectsData));
    };

    return {
        getToDoList,
        updateToDoList,
    };
};

export default toDoListStorage;
